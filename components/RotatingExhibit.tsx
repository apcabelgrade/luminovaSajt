'use client';

import { useEffect, useState } from 'react';

export interface ExhibitSlide {
  src: string;
  alt: string;
}

/**
 * The Rotunda: a framed exhibit whose plates change at museum pace —
 * 8s hold, 1.4s dissolve, bronze diamond markers, pause on hover/focus.
 * With a single plate it drifts gently instead (Ken Burns). Reduced
 * motion renders the first plate, still. Images are never altered —
 * only presented.
 */
export default function RotatingExhibit({
  slides,
  caption,
  markerLabel,
}: {
  slides: ExhibitSlide[];
  caption: string;
  markerLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length < 2 || paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 8000);
    return () => clearInterval(id);
  }, [slides.length, paused]);

  const single = slides.length === 1;

  return (
    <figure className="exhibit exhibit--ratio-wide exhibit--rotunda">
      <div className="exhibit__frame">
        <div
          className="exhibit__media"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={
                'rotunda__slide' +
                (i === index ? ' is-active' : '') +
                (single ? ' rotunda__slide--drift' : '')
              }
              aria-hidden={i !== index}
            >
              <img src={slide.src} alt={slide.alt} loading={i === 0 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>
      </div>
      <figcaption className="exhibit__caption rotunda__caption">
        <span>{caption}</span>
        {slides.length > 1 && (
          <span className="rotunda__markers" role="group">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                className={i === index ? 'rotunda__marker is-active' : 'rotunda__marker'}
                aria-label={`${markerLabel} ${i + 1}`}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
