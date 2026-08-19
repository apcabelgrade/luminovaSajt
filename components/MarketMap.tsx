import type { CSSProperties } from 'react';
import DrawOnView from '@/components/DrawOnView';
import type { Dictionary } from '@/lib/content';

/**
 * The Market Map: an engraved atlas plate. Belgrade is the gold mark;
 * rings ripple outward from it toward the world while arcs draw
 * themselves once to the capital centers international investors come
 * from. Same hand as the user's engraving plates: navy line on
 * limestone, one gold accent.
 */

const B = { x: 700, y: 235 };

interface City {
  key: keyof Dictionary['map']['cities'];
  x: number;
  y: number;
  /** Quadratic control point for the connecting arc. */
  cx: number;
  cy: number;
  anchor?: 'start' | 'end';
  labelAbove?: boolean;
}

const CITIES: City[] = [
  { key: 'newYork', x: 85, y: 168, cx: 390, cy: 40, anchor: 'start' },
  { key: 'london', x: 275, y: 88, cx: 490, cy: 52, labelAbove: true },
  { key: 'frankfurt', x: 445, y: 118, cx: 574, cy: 104, labelAbove: true },
  { key: 'vienna', x: 565, y: 155, cx: 630, cy: 148, labelAbove: true },
  { key: 'milan', x: 455, y: 250, cx: 575, cy: 210 },
  { key: 'istanbul', x: 872, y: 300, cx: 790, cy: 244 },
  { key: 'dubai', x: 1075, y: 330, cx: 895, cy: 238, anchor: 'end' },
];

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.2,
  strokeLinecap: 'square' as const,
};

function stagger(ms: number): CSSProperties {
  return { '--draw-stagger': ms } as CSSProperties;
}

function fade(ms: number): CSSProperties {
  return { '--fade-delay': `${ms}ms` } as CSSProperties;
}

export default function MarketMap({ dict }: { dict: Dictionary }) {
  const m = dict.map;

  return (
    <figure className="exhibit exhibit--map">
      <div className="exhibit__frame">
        <DrawOnView className="exhibit__media market-map">
          <svg viewBox="0 0 1200 420" role="img" aria-label={m.aria}>
            {/* graticule */}
            <g className="market-map__graticule">
              <path d="M 0 84 Q 600 44 1200 84" pathLength={1} {...stroke} />
              <path d="M 0 196 Q 600 156 1200 196" pathLength={1} {...stroke} style={stagger(80)} />
              <path d="M 0 308 Q 600 268 1200 308" pathLength={1} {...stroke} style={stagger(160)} />
              <path d="M 240 0 Q 232 210 244 420" pathLength={1} {...stroke} style={stagger(240)} />
              <path d="M 480 0 Q 474 210 484 420" pathLength={1} {...stroke} style={stagger(320)} />
              <path d="M 720 0 Q 716 210 724 420" pathLength={1} {...stroke} style={stagger(400)} />
              <path d="M 960 0 Q 956 210 964 420" pathLength={1} {...stroke} style={stagger(480)} />
            </g>

            {/* engraved rings around Belgrade */}
            <g className="market-map__rings">
              <circle cx={B.x} cy={B.y} r="18" pathLength={1} {...stroke} style={stagger(300)} />
              <circle cx={B.x} cy={B.y} r="30" pathLength={1} {...stroke} style={stagger(420)} />
              <circle cx={B.x} cy={B.y} r="44" pathLength={1} {...stroke} style={stagger(540)} />
            </g>

            {/* ripples: the map expanding from Belgrade outward */}
            <circle className="map-ripple" cx={B.x} cy={B.y} r="22" fill="none" stroke="var(--brass)" strokeWidth="1" />
            <circle
              className="map-ripple"
              cx={B.x}
              cy={B.y}
              r="22"
              fill="none"
              stroke="var(--brass)"
              strokeWidth="1"
              style={{ animationDelay: '3.5s' }}
            />

            {/* arcs to the capital centers */}
            <g className="market-map__arcs">
              {CITIES.map((c, i) => (
                <path
                  key={c.key}
                  d={`M ${B.x} ${B.y} Q ${c.cx} ${c.cy} ${c.x} ${c.y}`}
                  pathLength={1}
                  {...stroke}
                  style={stagger(700 + i * 170)}
                />
              ))}
            </g>

            {/* city nodes */}
            <g className="market-map__nodes">
              {CITIES.map((c, i) => (
                <circle
                  key={c.key}
                  cx={c.x}
                  cy={c.y}
                  r="4.5"
                  pathLength={1}
                  {...stroke}
                  style={stagger(900 + i * 170)}
                />
              ))}
            </g>

            {/* Belgrade: the gold mark */}
            <rect
              className="map-fade"
              x={B.x - 6}
              y={B.y - 6}
              width="12"
              height="12"
              fill="var(--bronze)"
              stroke="none"
              transform={`rotate(45 ${B.x} ${B.y})`}
              style={fade(500)}
            />

            {/* cartographer's furniture: scale bar and north arrow */}
            <g className="market-map__furniture">
              <line x1="60" y1="382" x2="192" y2="382" pathLength={1} {...stroke} style={stagger(600)} />
              <rect className="map-fade" x="60" y="376" width="22" height="6" fill="currentColor" stroke="none" style={fade(900)} />
              <rect className="map-fade" x="104" y="376" width="22" height="6" fill="currentColor" stroke="none" style={fade(1000)} />
              <line x1="60" y1="372" x2="60" y2="388" pathLength={1} {...stroke} style={stagger(700)} />
              <line x1="192" y1="372" x2="192" y2="388" pathLength={1} {...stroke} style={stagger(760)} />
              <polygon className="map-fade" points="1140,34 1147,64 1140,57 1133,64" fill="currentColor" stroke="none" style={fade(1100)} />
              <line x1="1140" y1="64" x2="1140" y2="80" pathLength={1} {...stroke} style={stagger(820)} />
            </g>
          </svg>

          {/* labels: HTML so they stay readable at every size */}
          <div className="market-map__labels" aria-hidden="true">
            <span
              className="market-map__label market-map__label--belgrade map-fade"
              style={{ left: `${(B.x / 1200) * 100}%`, top: `${(B.y / 420) * 100}%`, ...fade(700) }}
            >
              {m.cities.belgrade}
            </span>
            {CITIES.map((c, i) => (
              <span
                key={c.key}
                className={
                  'market-map__label map-fade' +
                  (c.anchor === 'start' ? ' market-map__label--start' : '') +
                  (c.anchor === 'end' ? ' market-map__label--end' : '') +
                  (c.labelAbove ? ' market-map__label--above' : '')
                }
                style={{ left: `${(c.x / 1200) * 100}%`, top: `${(c.y / 420) * 100}%`, ...fade(1100 + i * 170) }}
              >
                {m.cities[c.key]}
              </span>
            ))}
          </div>
        </DrawOnView>
      </div>
      <figcaption className="exhibit__caption">{m.caption}</figcaption>
    </figure>
  );
}
