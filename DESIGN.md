---
name: MaLa Luminova Partners
description: Beaux-Arts Belgrade banking hall translated into a contemporary light-stone advisory site
colors:
  ink-navy: "#10203F"
  ink-navy-hover: "#1A2C55"
  bronze: "#6E5A34"
  brass-sheen: "#A98B4F"
  slate: "#4A505E"
  limestone: "#FBFAF7"
  stone-panel: "#F3EFE5"
  stone-inset: "#EAE4D4"
  hairline: "#DED7C6"
  plinth-navy: "#0A1730"
  plinth-link: "#C9CEDD"
  plinth-muted: "#AEB4C6"
  error-carmine: "#8C2F2F"
typography:
  display:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "clamp(1.75rem, 5.2vw, 3.9rem)"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "0.1em"
  headline:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.8vw, 2.125rem)"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "0.1em"
  title:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.08em"
  display-page:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "clamp(1.75rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "0.1em"
  headline-small:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "clamp(1.375rem, 2.6vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "0.1em"
  body-large:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  base:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  body-small:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.12em"
  label-small:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.12em"
  map-annotation:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    letterSpacing: "0.1em"
  map-annotation-compact:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "0.5625rem"
    fontWeight: 600
    letterSpacing: "0.06em"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  section: "clamp(72px, 11vw, 152px)"
components:
  button-plaque:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.limestone}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "18px 42px"
  button-plaque-hover:
    backgroundColor: "#1A2C55"
  button-ghost:
    textColor: "{colors.ink-navy}"
    typography: "{typography.label}"
    padding: "18px 8px"
  plaque-card:
    backgroundColor: "{colors.limestone}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.none}"
    padding: "clamp(28px, 4vw, 44px)"
  plaque-card-hover:
    backgroundColor: "{colors.stone-panel}"
  input:
    backgroundColor: "{colors.stone-panel}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.none}"
    padding: "13px 16px"
---

# Design System: MaLa Luminova Partners

## Overview

**Creative North Star: "The Belgrade Banking Hall"**

The site speaks the visual language of a serious Belgrade bank palace from the early twentieth century — limestone, engraved lettering, brass details — translated into a precise contemporary web surface. The ground is always light warm stone; navy is ink, carved into it; bronze exists only as drawn lines and fittings. Ornament is engraving: authored fine-line SVG drawings (colonnade, cadastral parcels, ledger, voussoir arch, radial coordination, medallions) carry the identity instead of photography. Photographs, when supplied, hang as framed exhibits inside brass hairline frames — displayed exactly as delivered, with no color treatment (the user's standing decision).

The mood is institutional calm: generous whitespace, disciplined symmetry, quiet authority. Nothing bounces, nothing glows. Motion is a single authored gesture — engraved lines draw themselves once — plus a faint brass response on interactive plaques. The site is bilingual (EN/SR latinica) with full parity.

**Key Characteristics:**
- Light limestone ground everywhere; navy as ink, never as mid-page section fills
- Bronze drawn as hairlines, frames, and fittings — never painted as area fill
- Engraved SVG line-work (≈1.3px stroke) as the identity-bearing imagery
- Rectilinear, double-hairline plaque frames; zero border radius
- One orchestrated motion moment; stillness as authority

## Colors

A three-ink palette lifted pixel-exact from the logo lockup, set on warm limestone.

### Primary
- **Ink Navy** (#10203F): all reading text, engraved display lettering, primary plaque button fill, engraving stroke color. Sampled from the ML monogram. Hover deepens to #1A2C55.

### Secondary
- **Bronze** (#6E5A34): hairline rules, plaque frames, kickers, clause numerals, ornament strokes. The gold rule from the logo. Drawn, never painted.
- **Brass Sheen** (#A98B4F): the hover response on plaque inner hairlines, and lettering on the footer plinth (5.3:1 there).

### Tertiary
- **Slate** (#4A505E): secondary text, captions, form labels' quieter siblings. Sampled from the PARTNERS wordmark. 7.4:1 on Limestone.

### Neutral
- **Limestone** (#FBFAF7): the page ground, sampled from the logo background.
- **Stone Panel** (#F3EFE5): alternating section bands (About, service CTA), form field fills, plaque hover.
- **Stone Inset** (#EAE4D4): photo placeholder fills, deep insets.
- **Hairline** (#DED7C6): neutral rules, inner frame lines, header border.
- **Plinth Navy** (#0A1730): the footer band only — the building's granite plinth. The single dark region permitted on any page.

### Named Rules
**The Bronze Is Drawn Rule.** Bronze appears only as lines, frames, lettering details, and fittings — never as an area fill, button background, or text block color.
**The Stone Stays Lit Rule.** Every content region sits on Limestone or Stone Panel. Navy fills exactly two things: the primary plaque button and the footer plinth.

## Typography

**Display Font:** Cinzel (Georgia fallback) — lapidary Roman capitals in the Trajan tradition; the engraved inscription itself. Loaded via `next/font` as `--font-display`, subsets latin + latin-ext.
**Body Font:** Libre Franklin (system-ui fallback) — institutional gothic echoing the spaced grotesque of the LUMINOVA PARTNERS wordmark. `--font-body`, subsets latin + latin-ext.

**Character:** Carved capitals over composed institutional text: the inscription speaks, the document explains.

### Hierarchy
- **Display** (Cinzel 500, clamp(1.75rem, 5.2vw, 3.9rem), 1.18): hero inscription; always uppercase, tracked 0.1em.
- **Headline** (Cinzel 500, clamp(1.5rem, 2.8vw, 2.125rem)): section inscriptions (`.section__title`); uppercase, tracked.
- **Title** (Cinzel 500, ~1.03–1.19rem, tracked 0.08em): plaque names, medallion titles, clause titles.
- **Body** (Libre Franklin 400, 1.0625rem, 1.65): prose; `.lede` in Slate at max 62ch.
- **Label** (Libre Franklin 600, 0.8125rem, 0.12em, uppercase): kickers, nav, buttons, captions, form labels.
- **Map annotation** (Libre Franklin 600, 0.6875rem / 0.5625rem below 640px, tracked, uppercase): city labels on the Market Map plate only — cartographic lettering, deliberately one step below Label; the Belgrade label uses 0.75rem on desktop and 0.6875rem on mobile.

### Named Rules
**The Inscription Rule.** Cinzel is carved text: uppercase only, always tracked ≥0.08em. It may fall to small carved sizes for signature moments (the tagline at 0.9375rem, the footer tagline at 0.875rem, exhibit placeholder titles), but it never sets body copy or control text — buttons and form labels are Franklin labels.

## Layout

Facade rhythm: a centered 1200px container (`--container`) with `clamp(20px, 4vw, 40px)` gutters. Sections separate like storeys with `--section-y: clamp(72px, 11vw, 152px)` vertical padding; stone bands (About, service CTA) carry top/bottom hairline borders as cornice lines. Symmetry is the default posture (hero and CTAs centered); asymmetric two-column grids (5/7 about, 7/5 memorandum) collapse to one column at 900px. Plaque grid is 2×2, collapsing at 760px. Spacing rides an 8px rhythm with more space above headings than below.

## Elevation & Depth

Flat, like carved stone. Depth is relief: layered hairlines, double-rule frames (outer bronze + inner hairline inset 4–6px), and tonal stone steps (Limestone → Stone Panel → Stone Inset). No box-shadows anywhere, at rest or on state.

### Named Rules
**The Relief Rule.** Separation is earned with a frame or a tonal step, never a blur.

## Shapes

Strictly rectilinear: border-radius 0 on every element, including inputs and buttons. The recurring silhouette is the engraved plaque: an outer 1px bronze rule, an inner offset hairline (inset 6px), and small drawn bronze corner fittings (10×1px bracket arms) at the inner frame's four corners. Full-width neutral rules with a centered bronze diamond (`.cornice`) divide passages; stone bands open with a cornice-and-dentil course (hairline rule over a 2px/14px dentil rhythm). Circular geometry exists only inside engraved medallions.

## Components

### Buttons
- **Shape:** square (0 radius).
- **Primary (`.btn-plaque`):** Ink Navy fill, Limestone label (Franklin 600, 0.8125rem, 0.12em, uppercase), padding 18px 42px, inner hairline `inset: 4px` in translucent limestone; hover deepens fill to #1A2C55 and turns the inner hairline Brass.
- **Ghost (`.btn-ghost`):** navy label over a bronze bottom rule; arrow glyph translates 4px on hover; label turns Bronze.
- **Focus:** 2px Bronze outline, offset 2px (global).

### Cards / Containers
- **Plaque (`.plaque`):** the service card and every framed container. Limestone face, 1px Bronze border, inner hairline `inset: 6px`, bronze corner fittings, padding clamp(28px, 4vw, 44px). Hover: face turns Stone Panel, inner hairline turns Brass, link arrow advances. Numeral (Roman) top-left, engraved glyph top-right. Memorandum clause counters on service pages are also upper-Roman.
- **Protocol (`.protocol`):** the contact form container, same double-frame-and-fittings grammar.

### Inputs / Fields
- **Style:** Stone Panel fill, 1px Hairline border, 0 radius, padding 13px 16px; labels are uppercase Franklin labels.
- **Focus:** 2px Bronze outline; border turns Bronze. **Error:** border and message in #8C2F2F, `aria-invalid` + described-by wired.

### Navigation
- **Header:** sticky Limestone bar, bottom hairline, 76px; trimmed lockup at 44px; links as tracked labels with bronze underline on hover; EN·SR switch behind a bronze left rule, current language underlined. Mobile ≤860px: text-labeled toggle opens a stacked limestone panel.
- **Footer:** Plinth Navy band; M|L mark in Cinzel with brass divider; brass headings; muted limestone links (#C9CEDD → Limestone on hover); bottom rule in translucent brass.

### Framed Exhibit (signature)
`.exhibit`: photograph inside a bronze frame with inner hairline and corner fittings; the image itself is shown untouched — no filter, no tint, no crop beyond the frame's `object-fit: cover` (the user explicitly decided photographs must not be altered). `photo.file` is a base name; any of jpg/jpeg/png/webp under `/public/photos/` is picked up at build time. Empty state is a designed placeholder: Stone Inset field, engraved facade glyph, "Photograph forthcoming" in Cinzel, and the exact `/public/photos/<file>` path. Caption is a tracked label led by a bronze dash.

### Engravings (signature)
Two layers share one hand (navy fine line on cream, bronze accents):
- **Authored SVGs** — colonnade (hero), keystone crest, four service glyphs (parcels, ledger, voussoir arch, radial), four medallions, and the signing pen (contact section: an engraved fountain pen glides along `SIGN_PATH` via `offset-path` while the abstract flourish writes itself; the cycle loops — write, rest, pen lifts, ink fades, a quiet beat, repeat every 6.5s while on screen; the path lives in both `engravings.tsx` and `globals.css` — keep in sync). Stroke `currentColor` 1.3px, square caps, `pathLength=1`. The single gesture: strokes draw via `stroke-dashoffset` (1.6s, exponential ease-out, per-element stagger). `DrawOnView` runs the gesture on every viewport entry — scrolling back up replays it — re-arming only once the drawing has fully left the screen, so it never blanks while visible; `prefers-reduced-motion` renders everything complete and still.
- **User-supplied engraving plates** (`public/engravings/service-*.png`) — the large plates on service pages (cadastral plan, assessment desk, arch construction drawing, bank facade). Shown exactly as delivered inside a plain hairline frame — no filters, no animation (assets are never altered). The SVG `servicePlates` in `components/engravings.tsx` were superseded by these and are kept only as fallback material.

## Do's and Don'ts

### Do:
- **Do** draw new icons and ornament as fine-line SVG engravings (1.3px, Ink Navy or Bronze) in the established hand.
- **Do** hang every photograph inside the framed-exhibit frame with its caption — and leave the image itself untouched (no filters, tints, or edits; the user's standing decision).
- **Do** keep EN and SR (latinica) in full parity — every surface, every state, both languages.
- **Do** respect `prefers-reduced-motion`: drawings appear complete, no scroll animation.
- **Do** keep body text ≥4.5:1; Bronze text only at label sizes on light stone (6.4:1) or as large lettering.

### Don't:
- **Don't** use photography outside the framed-exhibit system, or stock icons/illustrations from any library.
- **Don't** introduce dark backgrounds beyond the footer plinth, gradient text, glass/blur, or box-shadows.
- **Don't** round a corner or paint bronze as a fill.
- **Don't** add motion beyond the one draw-on gesture, the plaque hover response, and the Market Map band — no parallax, no scroll-jacking, no carousels. The Market Map (main-page band, user-requested) is an engraved atlas plate: strokes draw once on entry, then a dotted brass range-ring ripples outward from Belgrade (7s cycle, two offset rings) — the only perpetual motion on the site; reduced-motion renders the plate complete and still. (The retired Rotunda photo-rotation component remains in the repo, unused.)
- **Don't** name clients or invent numbers, testimonials, addresses, or claims not present in Advisor_Profile.pdf.
