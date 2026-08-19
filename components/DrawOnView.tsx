'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

/**
 * Runs the engrave gesture whenever the wrapped drawing enters the
 * viewport — including again on the way back up. The drawing re-arms
 * only after it has left the screen completely, so it never blanks
 * while visible.
 *
 * Two things keep the gesture honest:
 *
 * 1. The drawing is only hidden once JavaScript has armed it
 *    (`engrave--armed`). Without JS, or under prefers-reduced-motion,
 *    the server markup renders complete and stays that way. Armed
 *    strokes sit still at full offset and are released by
 *    `engrave--drawn` — never paused mid-stroke, so a drawing cannot
 *    come to rest half engraved.
 *
 * 2. The dash length is corrected for the plate's scale. The engravings
 *    carry `vector-effect: non-scaling-stroke`, which makes the browser
 *    resolve dash lengths in device space while `pathLength={1}`
 *    normalizes in user space. The two disagree by exactly the factor
 *    between those spaces — the SVG's CSS scale times the device pixel
 *    ratio — so every line draws only 1/factor of its length: the
 *    colonnade stopping short, the medallion ring never closing. On a
 *    Windows screen at 125% that is 80% of every stroke, on a plate
 *    blown up past its viewBox less still. Publishing the factor as
 *    `--draw-len` (in pathLength units, where 1 is the whole path)
 *    makes the dash cover the stroke end to end at any size or DPI.
 *
 * The correction is React state rendered as an inline custom property,
 * never a DOM mutation: a re-render or a Fast Refresh cannot strip it
 * and quietly restore the broken geometry.
 */
export default function DrawOnView({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const drawn = useRef(false);
  const [armed, setArmed] = useState(false);
  const [scale, setScale] = useState(1);
  const [state, setState] = useState<'idle' | 'waiting' | 'drawn'>('idle');
  const [epoch, setEpoch] = useState(0);

  /** Device units per viewBox unit: CSS scale of the plate times the DPI. */
  const measure = useCallback(() => {
    const svg = ref.current?.querySelector('svg');
    if (!svg) return;

    const box = svg.viewBox.baseVal;
    const width = svg.getBoundingClientRect().width;
    if (!box || box.width <= 0 || width <= 0) return;

    const next = (width / box.width) * (window.devicePixelRatio || 1);
    if (!Number.isFinite(next) || next <= 0) return;

    // Sub-pixel churn should not restart anything; a real resize should.
    setScale((current) => (Math.abs(current - next) > 0.001 ? next : current));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    measure();
    setArmed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            drawn.current = true;
            setState('drawn');
          } else {
            // Fully off-screen: re-arm so the gesture replays on return.
            if (drawn.current) {
              drawn.current = false;
              setEpoch((e) => e + 1);
            }
            setState('waiting');
          }
        }
      },
      // The first visible pixel starts the gesture: with no ratio gate and
      // no viewport inset, a drawing can never sit on screen unstarted.
      { threshold: 0 },
    );
    observer.observe(el);

    // A resized plate changes the scale, and with it every dash length.
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(el);

    // So does a DPI change: a browser zoom, or the window moving to a
    // monitor with different scaling.
    const dpi = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
    dpi.addEventListener('change', measure);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      dpi.removeEventListener('change', measure);
    };
  }, [measure, scale]);

  const stateClass = [
    'engrave',
    armed ? 'engrave--armed' : '',
    state === 'waiting' ? 'engrave--waiting' : '',
    state === 'drawn' ? 'engrave--drawn' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={className}>
      <div
        key={epoch}
        className={stateClass}
        style={{ '--draw-len': scale } as CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
