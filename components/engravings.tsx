import type { CSSProperties, SVGProps } from 'react';

/**
 * Fine-line SVG engravings — the identity-bearing imagery of the
 * "Belgrade Banking Hall" world. All strokes currentColor, fill none,
 * pathLength=1 so the one draw-on gesture can run from CSS.
 */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.3,
  strokeLinecap: 'square' as const,
  vectorEffect: 'non-scaling-stroke' as const,
};

function stagger(ms: number): CSSProperties {
  return { '--draw-stagger': ms } as CSSProperties;
}

/** Trapezoid keystone with flanking voussoirs — the hero's crest. */
export function Keystone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="96"
      height="44"
      viewBox="0 0 96 44"
      aria-hidden="true"
      {...props}
    >
      <polygon points="38,6 58,6 54,38 42,38" pathLength={1} {...stroke} />
      <line x1="30" y1="10" x2="8" y2="20" pathLength={1} {...stroke} style={stagger(200)} />
      <line x1="34" y1="24" x2="16" y2="32" pathLength={1} {...stroke} style={stagger(300)} />
      <line x1="66" y1="10" x2="88" y2="20" pathLength={1} {...stroke} style={stagger(200)} />
      <line x1="62" y1="24" x2="80" y2="32" pathLength={1} {...stroke} style={stagger(300)} />
    </svg>
  );
}

/** The hero colonnade: six columns, entablature with dentils, central arch. */
export function Colonnade(props: SVGProps<SVGSVGElement>) {
  const columns = [90, 270, 450, 630, 810, 990];
  let n = 0;
  const next = () => stagger(120 + n++ * 45);

  return (
    <svg
      viewBox="0 0 1080 260"
      role="img"
      aria-label=""
      aria-hidden="true"
      {...props}
    >
      {/* cornice + architrave */}
      <line x1="20" y1="40" x2="1060" y2="40" pathLength={1} {...stroke} style={next()} />
      <line x1="30" y1="46" x2="1050" y2="46" pathLength={1} {...stroke} style={next()} />
      <line x1="40" y1="70" x2="1040" y2="70" pathLength={1} {...stroke} style={next()} />
      <line x1="40" y1="76" x2="1040" y2="76" pathLength={1} {...stroke} style={next()} />
      {/* dentils */}
      {Array.from({ length: 33 }, (_, i) => 60 + i * 30).map((x) => (
        <line
          key={`d${x}`}
          x1={x}
          y1="52"
          x2={x}
          y2="60"
          pathLength={1}
          {...stroke}
          style={stagger(400 + x / 4)}
        />
      ))}
      {/* columns */}
      {columns.map((x, i) => (
        <g key={`c${x}`}>
          {/* capital */}
          <line x1={x - 24} y1="84" x2={x + 24} y2="84" pathLength={1} {...stroke} style={stagger(300 + i * 70)} />
          <line x1={x - 19} y1="92" x2={x + 19} y2="92" pathLength={1} {...stroke} style={stagger(340 + i * 70)} />
          {/* shaft */}
          <line x1={x - 14} y1="92" x2={x - 14} y2="226" pathLength={1} {...stroke} style={stagger(380 + i * 70)} />
          <line x1={x + 14} y1="92" x2={x + 14} y2="226" pathLength={1} {...stroke} style={stagger(380 + i * 70)} />
          {/* base */}
          <line x1={x - 19} y1="226" x2={x + 19} y2="226" pathLength={1} {...stroke} style={stagger(420 + i * 70)} />
          <line x1={x - 24} y1="234" x2={x + 24} y2="234" pathLength={1} {...stroke} style={stagger(460 + i * 70)} />
        </g>
      ))}
      {/* central arch with keystone */}
      <path
        d="M 472 226 V 140 A 68 68 0 0 1 608 140 V 226"
        pathLength={1}
        {...stroke}
        style={stagger(900)}
      />
      <path
        d="M 480 226 V 142 A 60 60 0 0 1 600 142 V 226"
        pathLength={1}
        {...stroke}
        style={stagger(980)}
      />
      <polygon points="532,64 548,64 545,86 535,86" pathLength={1} {...stroke} style={stagger(1100)} />
      {/* stylobate */}
      <line x1="40" y1="234" x2="1040" y2="234" pathLength={1} {...stroke} style={next()} />
      <line x1="20" y1="244" x2="1060" y2="244" pathLength={1} {...stroke} style={next()} />
      <line x1="0" y1="254" x2="1080" y2="254" pathLength={1} {...stroke} style={next()} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Service glyphs — one drawing hand, four subjects (64×64)            */
/* ------------------------------------------------------------------ */

/** I. Cadastral block: the quartered grid, corner plots, one parcel marked. */
export function GlyphCadastralBlock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <path d="M6 6H58V58H6Z" pathLength={1} {...stroke} />
      {/* the block quartered */}
      <path d="M6 24H58M6 40H58M24 6V58M40 6V58" pathLength={1} {...stroke} style={stagger(110)} />
      {/* corner plots */}
      <path
        d="M10 10H20V20H10ZM44 10H54V20H44ZM10 44H20V54H10ZM44 44H54V54H44Z"
        pathLength={1}
        {...stroke}
        style={stagger(220)}
      />
      {/* hatching on the marked parcel */}
      <path
        d="M25 39L39 25M28 39L39 28M31 39L39 31M34 39L39 34M25 36L36 25M25 33L33 25M25 30L30 25M25 27L27 25"
        pathLength={1}
        {...stroke}
        style={stagger(330)}
      />
      {/* survey ticks at the interior corners */}
      <path
        d="M19 24H24M24 19V24M45 24H40M40 19V24M19 40H24M24 45V40M45 40H40M40 45V40"
        pathLength={1}
        {...stroke}
        style={stagger(430)}
      />
    </svg>
  );
}

/** II. Ledger sheet with the accountant's double rule. */
export function GlyphLedger(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <rect x="10" y="6" width="44" height="52" pathLength={1} {...stroke} />
      <line x1="26" y1="6" x2="26" y2="58" pathLength={1} {...stroke} style={stagger(120)} />
      <line x1="42" y1="6" x2="42" y2="58" pathLength={1} {...stroke} style={stagger(180)} />
      <line x1="14" y1="18" x2="50" y2="18" pathLength={1} {...stroke} style={stagger(240)} />
      <line x1="14" y1="28" x2="50" y2="28" pathLength={1} {...stroke} style={stagger(300)} />
      <line x1="14" y1="38" x2="50" y2="38" pathLength={1} {...stroke} style={stagger(360)} />
      {/* the double rule under the sum */}
      <line x1="30" y1="48" x2="50" y2="48" pathLength={1} {...stroke} style={stagger(440)} />
      <line x1="30" y1="51" x2="50" y2="51" pathLength={1} {...stroke} style={stagger(500)} />
    </svg>
  );
}

/** III. Clause and seal: the bracketed provision, then the mark that binds it. */
export function GlyphClauseSeal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <path d="M12 4H52V60H12Z" pathLength={1} {...stroke} />
      <path d="M12 14H52" pathLength={1} {...stroke} style={stagger(110)} />
      {/* the clause */}
      <path d="M19 22H45M19 28H45M19 34H37" pathLength={1} {...stroke} style={stagger(210)} />
      {/* the bracket that holds it */}
      <path d="M48 22H52M52 22V34M48 34H52" pathLength={1} {...stroke} style={stagger(320)} />
      {/* signature lines */}
      <path d="M19 44H33M19 49H27" pathLength={1} {...stroke} style={stagger(410)} />
      {/* the seal, struck last */}
      <circle cx="43" cy="47" r="6" pathLength={1} {...stroke} style={stagger(490)} />
      <path d="M43 41V37M43 53V57M37 47H33M49 47H53" pathLength={1} {...stroke} style={stagger(560)} />
    </svg>
  );
}

/** IV. Radial coordination — four parties, one table. */
export function GlyphRadial(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="6" pathLength={1} {...stroke} />
      <circle cx="32" cy="8" r="5" pathLength={1} {...stroke} style={stagger(140)} />
      <circle cx="56" cy="32" r="5" pathLength={1} {...stroke} style={stagger(200)} />
      <circle cx="32" cy="56" r="5" pathLength={1} {...stroke} style={stagger(260)} />
      <circle cx="8" cy="32" r="5" pathLength={1} {...stroke} style={stagger(320)} />
      <line x1="32" y1="14" x2="32" y2="26" pathLength={1} {...stroke} style={stagger(400)} />
      <line x1="50" y1="32" x2="38" y2="32" pathLength={1} {...stroke} style={stagger(460)} />
      <line x1="32" y1="50" x2="32" y2="38" pathLength={1} {...stroke} style={stagger(520)} />
      <line x1="14" y1="32" x2="26" y2="32" pathLength={1} {...stroke} style={stagger(580)} />
    </svg>
  );
}

/** IV. A system plate: processes wired into one source of management information. */
export function GlyphSystemGrid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true" {...props}>
      {/* the plate */}
      <path d="M8 12H56V46H8Z" pathLength={1} {...stroke} />
      {/* the stand */}
      <path d="M32 46V54M22 54H42" pathLength={1} {...stroke} style={stagger(120)} />
      {/* the bus */}
      <path d="M14 29H50" pathLength={1} {...stroke} style={stagger(220)} />
      {/* processes wired into it */}
      <path d="M20 29V21M32 29V21M44 29V21M26 29V37M38 29V37" pathLength={1} {...stroke} style={stagger(320)} />
      <circle cx="20" cy="19" r="2" pathLength={1} {...stroke} style={stagger(420)} />
      <circle cx="32" cy="19" r="2" pathLength={1} {...stroke} style={stagger(460)} />
      <circle cx="44" cy="19" r="2" pathLength={1} {...stroke} style={stagger(500)} />
      <circle cx="26" cy="39" r="2" pathLength={1} {...stroke} style={stagger(540)} />
      <circle cx="38" cy="39" r="2" pathLength={1} {...stroke} style={stagger(580)} />
    </svg>
  );
}

export const serviceGlyphs: Record<string, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  'financial-advisory': GlyphLedger,
  'ma-transactions': GlyphClauseSeal,
  'business-transformation': GlyphRadial,
  digitalisation: GlyphSystemGrid,
};

/* ------------------------------------------------------------------ */
/* About medallions — double ring, one glyph each (72×72)              */
/* ------------------------------------------------------------------ */

function MedallionFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
      <circle cx="36" cy="36" r="34" pathLength={1} {...stroke} />
      <circle cx="36" cy="36" r="29" pathLength={1} {...stroke} style={stagger(160)} />
      {children}
    </svg>
  );
}

/** Column capital — governance. */
export function MedallionGovernance() {
  return (
    <MedallionFrame>
      <line x1="22" y1="28" x2="50" y2="28" pathLength={1} {...stroke} style={stagger(320)} />
      <path d="M 24 33 A 4 4 0 1 1 29 36" pathLength={1} {...stroke} style={stagger(400)} />
      <path d="M 48 33 A 4 4 0 1 0 43 36" pathLength={1} {...stroke} style={stagger(400)} />
      <line x1="30" y1="36" x2="30" y2="50" pathLength={1} {...stroke} style={stagger(480)} />
      <line x1="42" y1="36" x2="42" y2="50" pathLength={1} {...stroke} style={stagger(480)} />
      <line x1="26" y1="50" x2="46" y2="50" pathLength={1} {...stroke} style={stagger(560)} />
    </MedallionFrame>
  );
}

/** Ledger double rule — CFO leadership. */
export function MedallionLedger() {
  return (
    <MedallionFrame>
      <line x1="24" y1="28" x2="48" y2="28" pathLength={1} {...stroke} style={stagger(320)} />
      <line x1="24" y1="36" x2="48" y2="36" pathLength={1} {...stroke} style={stagger(400)} />
      <line x1="32" y1="45" x2="48" y2="45" pathLength={1} {...stroke} style={stagger(480)} />
      <line x1="32" y1="48" x2="48" y2="48" pathLength={1} {...stroke} style={stagger(540)} />
    </MedallionFrame>
  );
}

/** Keystone — private equity, M&A, structuring under pressure. */
export function MedallionKeystone() {
  return (
    <MedallionFrame>
      <path d="M 22 50 V 42 A 14 14 0 0 1 50 42 V 50" pathLength={1} {...stroke} style={stagger(320)} />
      <polygon points="32,24 40,24 38,34 34,34" pathLength={1} {...stroke} style={stagger(440)} />
    </MedallionFrame>
  );
}

/** Drafting dividers — analytical rigor. */
export function MedallionDividers() {
  return (
    <MedallionFrame>
      <circle cx="36" cy="25" r="3" pathLength={1} {...stroke} style={stagger(320)} />
      <line x1="34" y1="28" x2="26" y2="50" pathLength={1} {...stroke} style={stagger(400)} />
      <line x1="38" y1="28" x2="46" y2="50" pathLength={1} {...stroke} style={stagger(400)} />
      <path d="M 28 46 A 22 22 0 0 0 44 46" pathLength={1} {...stroke} style={stagger(500)} />
    </MedallionFrame>
  );
}

/** Entities across borders — multi-entity, multi-country responsibility. */
export function MedallionEntities() {
  return (
    <MedallionFrame>
      {/* the meridian: one field, several jurisdictions */}
      <path d="M 17 36 A 19 19 0 0 1 55 36" pathLength={1} {...stroke} style={stagger(320)} />
      <line x1="17" y1="36" x2="55" y2="36" pathLength={1} {...stroke} style={stagger(380)} />
      {/* three entities seated on it */}
      <rect x="21" y="38" width="9" height="9" pathLength={1} {...stroke} style={stagger(460)} />
      <rect x="31.5" y="38" width="9" height="9" pathLength={1} {...stroke} style={stagger(520)} />
      <rect x="42" y="38" width="9" height="9" pathLength={1} {...stroke} style={stagger(580)} />
    </MedallionFrame>
  );
}

/** An unbroken line from diagnosis to implementation — continuity. */
export function MedallionContinuity() {
  return (
    <MedallionFrame>
      {/* the thread, drawn in one stroke */}
      <path
        d="M 22 44 C 28 44 28 30 34 30 C 40 30 40 44 46 44"
        pathLength={1}
        {...stroke}
        style={stagger(320)}
      />
      {/* the mark it arrives at */}
      <line x1="46" y1="44" x2="52" y2="44" pathLength={1} {...stroke} style={stagger(460)} />
      <line x1="49" y1="41" x2="52" y2="44" pathLength={1} {...stroke} style={stagger(520)} />
      <line x1="49" y1="47" x2="52" y2="44" pathLength={1} {...stroke} style={stagger(520)} />
      {/* the point it began from */}
      <circle cx="20" cy="44" r="2" pathLength={1} {...stroke} style={stagger(580)} />
    </MedallionFrame>
  );
}

export const medallions = [
  MedallionEntities,
  MedallionGovernance,
  MedallionKeystone,
  MedallionLedger,
  MedallionContinuity,
];

/**
 * The signing pen: an engraved fountain pen writes an abstract flourish
 * — the gesture of beginning a conversation. The flourish path is
 * duplicated in globals.css as the pen's offset-path; keep them in sync.
 */
export const SIGN_PATH =
  'M 24 104 C 40 60 70 46 82 72 C 92 94 70 112 60 98 C 52 86 74 66 102 70 C 130 74 146 94 170 88 C 192 82 202 64 191 58 C 182 53 172 66 188 76 C 204 86 240 74 266 78 C 290 82 306 92 331 86 C 339 84 343 88 340 93 C 324 108 196 120 104 112';

export function ContactSignature(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 380 150" aria-hidden="true" {...props}>
      <path
        className="sign-path"
        d={SIGN_PATH}
        pathLength={1}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <g className="sign-pen">
        {/* nib */}
        <polygon points="0,0 7.8,-14.8 14.8,-7.8" {...stroke} />
        <line x1="1" y1="-1" x2="7" y2="-7" {...stroke} />
        <circle cx="7.8" cy="-7.8" r="1.6" {...stroke} />
        {/* section and barrel */}
        <line x1="7.8" y1="-14.8" x2="26.2" y2="-33.2" {...stroke} />
        <line x1="14.8" y1="-7.8" x2="33.2" y2="-26.2" {...stroke} />
        <line x1="26.2" y1="-33.2" x2="33.2" y2="-26.2" {...stroke} />
        {/* cap band */}
        <line x1="23.4" y1="-30.4" x2="30.4" y2="-23.4" {...stroke} />
        <line x1="25.5" y1="-32.5" x2="32.5" y2="-25.5" {...stroke} />
        {/* invisible balance point so the bbox centers on the nib tip */}
        <circle cx="-33.2" cy="33.2" r="0.1" fill="none" stroke="none" />
      </g>
    </svg>
  );
}

/** Small facade for empty photograph frames. */
export function GlyphFacade(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="56" height="42" viewBox="0 0 64 48" aria-hidden="true" {...props}>
      <polygon points="32,4 60,16 4,16" pathLength={1} {...stroke} />
      <line x1="12" y1="20" x2="12" y2="40" pathLength={1} {...stroke} style={stagger(140)} />
      <line x1="25" y1="20" x2="25" y2="40" pathLength={1} {...stroke} style={stagger(200)} />
      <line x1="39" y1="20" x2="39" y2="40" pathLength={1} {...stroke} style={stagger(260)} />
      <line x1="52" y1="20" x2="52" y2="40" pathLength={1} {...stroke} style={stagger(320)} />
      <line x1="4" y1="44" x2="60" y2="44" pathLength={1} {...stroke} style={stagger(380)} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Large engravings for service pages (one hand, larger plate)         */
/* ------------------------------------------------------------------ */

export function PlateParcels(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 220" aria-hidden="true" {...props}>
      {/* survey plat: parcels along a river curve */}
      <path d="M 10 178 C 80 150 150 196 310 158" pathLength={1} {...stroke} />
      <path d="M 10 190 C 80 162 150 208 310 170" pathLength={1} {...stroke} style={stagger(120)} />
      <polygon points="24,26 112,14 126,74 40,90" pathLength={1} {...stroke} style={stagger(240)} />
      <polygon points="112,14 208,24 196,80 126,74" pathLength={1} {...stroke} style={stagger(320)} />
      <polygon points="208,24 296,44 272,96 196,80" pathLength={1} {...stroke} style={stagger(400)} />
      <polygon points="40,90 126,74 196,80 180,140 56,148" pathLength={1} {...stroke} style={stagger(480)} />
      <polygon points="196,80 272,96 252,142 180,140" pathLength={1} {...stroke} style={stagger(560)} />
      {/* hatching: the marked parcel */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1={206 + i * 12}
          y1={88 + i * 2}
          x2={196 + i * 12}
          y2={134 + i * 1}
          pathLength={1}
          {...stroke}
          style={stagger(640 + i * 50)}
        />
      ))}
      {/* plot marker */}
      <circle cx="86" cy="52" r="5" pathLength={1} {...stroke} style={stagger(900)} />
      <line x1="86" y1="40" x2="86" y2="30" pathLength={1} {...stroke} style={stagger(960)} />
      {/* dimension ticks */}
      <line x1="24" y1="206" x2="296" y2="206" pathLength={1} {...stroke} style={stagger(1000)} />
      <line x1="24" y1="200" x2="24" y2="212" pathLength={1} {...stroke} style={stagger(1050)} />
      <line x1="296" y1="200" x2="296" y2="212" pathLength={1} {...stroke} style={stagger(1100)} />
    </svg>
  );
}

export function PlateLedger(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 220" aria-hidden="true" {...props}>
      <rect x="46" y="10" width="228" height="200" pathLength={1} {...stroke} />
      <rect x="54" y="18" width="212" height="184" pathLength={1} {...stroke} style={stagger(120)} />
      <line x1="150" y1="18" x2="150" y2="202" pathLength={1} {...stroke} style={stagger(240)} />
      <line x1="212" y1="18" x2="212" y2="202" pathLength={1} {...stroke} style={stagger(300)} />
      <line x1="54" y1="44" x2="266" y2="44" pathLength={1} {...stroke} style={stagger(360)} />
      {[68, 88, 108, 128, 148].map((y, i) => (
        <g key={y}>
          <line x1="62" y1={y} x2="140" y2={y} pathLength={1} {...stroke} style={stagger(420 + i * 60)} />
          <line x1="158" y1={y} x2="204" y2={y} pathLength={1} {...stroke} style={stagger(450 + i * 60)} />
          <line x1="220" y1={y} x2="258" y2={y} pathLength={1} {...stroke} style={stagger(480 + i * 60)} />
        </g>
      ))}
      {/* the sum and its double rule */}
      <line x1="220" y1="172" x2="258" y2="172" pathLength={1} {...stroke} style={stagger(800)} />
      <line x1="212" y1="184" x2="266" y2="184" pathLength={1} {...stroke} style={stagger(880)} />
      <line x1="212" y1="189" x2="266" y2="189" pathLength={1} {...stroke} style={stagger(940)} />
    </svg>
  );
}

export function PlateArch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 220" aria-hidden="true" {...props}>
      <path d="M 40 210 V 120 A 120 120 0 0 1 280 120 V 210" pathLength={1} {...stroke} />
      <path d="M 64 210 V 124 A 96 96 0 0 1 256 124 V 210" pathLength={1} {...stroke} style={stagger(140)} />
      {/* voussoirs */}
      <line x1="52" y1="94" x2="74" y2="106" pathLength={1} {...stroke} style={stagger(300)} />
      <line x1="86" y1="52" x2="102" y2="72" pathLength={1} {...stroke} style={stagger(360)} />
      <line x1="234" y1="52" x2="218" y2="72" pathLength={1} {...stroke} style={stagger(420)} />
      <line x1="268" y1="94" x2="246" y2="106" pathLength={1} {...stroke} style={stagger(480)} />
      {/* keystone */}
      <polygon points="146,14 174,14 168,44 152,44" pathLength={1} {...stroke} style={stagger(600)} />
      {/* springer courses */}
      <line x1="20" y1="210" x2="300" y2="210" pathLength={1} {...stroke} style={stagger(700)} />
      <line x1="40" y1="160" x2="10" y2="160" pathLength={1} {...stroke} style={stagger(760)} />
      <line x1="280" y1="160" x2="310" y2="160" pathLength={1} {...stroke} style={stagger(760)} />
    </svg>
  );
}

export function PlateRadial(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 220" aria-hidden="true" {...props}>
      <circle cx="160" cy="110" r="20" pathLength={1} {...stroke} />
      <circle cx="160" cy="110" r="14" pathLength={1} {...stroke} style={stagger(120)} />
      <circle cx="160" cy="26" r="14" pathLength={1} {...stroke} style={stagger(260)} />
      <circle cx="286" cy="110" r="14" pathLength={1} {...stroke} style={stagger(330)} />
      <circle cx="160" cy="194" r="14" pathLength={1} {...stroke} style={stagger(400)} />
      <circle cx="34" cy="110" r="14" pathLength={1} {...stroke} style={stagger(470)} />
      <line x1="160" y1="40" x2="160" y2="90" pathLength={1} {...stroke} style={stagger(560)} />
      <line x1="272" y1="110" x2="180" y2="110" pathLength={1} {...stroke} style={stagger(620)} />
      <line x1="160" y1="180" x2="160" y2="130" pathLength={1} {...stroke} style={stagger(680)} />
      <line x1="48" y1="110" x2="140" y2="110" pathLength={1} {...stroke} style={stagger(740)} />
      {/* diagonal counsel lines */}
      <line x1="150" y1="36" x2="44" y2="100" pathLength={1} {...stroke} style={stagger(820)} />
      <line x1="170" y1="184" x2="276" y2="120" pathLength={1} {...stroke} style={stagger(880)} />
    </svg>
  );
}

export const servicePlates: Record<string, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  'financial-advisory': PlateLedger,
  'ma-transactions': PlateArch,
  'business-transformation': PlateRadial,
  digitalisation: PlateParcels,
};
