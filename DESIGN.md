# DESIGN.md — naomakers.com

Single source of truth for the visual system. The CSS, components and tokens are
projections of this file; if they drift, this file wins.

## Discovery

- **Artifact:** marketing / showcase landing page for a non-profit association,
  listing 4 event projects.
- **Audience & positioning:** Nantes tech community (devs, designers, product) —
  _maker_ / hackathon culture. Grassroots, hands-on, energetic, technical.
- **Primary outcome:** let visitors discover the 4 projects and open their sites.
- **Brand adjectives:** builder · frank · structured · community-driven · energetic.
- **Aesthetic essence (3 words):** engineering-sheet maker energy.

## Aesthetic commitment

**Industrial maker / blueprint.** The page reads like an engineering drawing
sheet: a light gridded ground, crisp ink rules, monospace annotations, and
numbered "spec sheet" project cards. Deliberately the opposite of the
violet-on-dark "AI" default (the red-ocean look this project explicitly avoids).

**Signature move:** project cards are numbered technical fiches — a lime index
chip (`01`–`04`) + a monospace category label in a ruled header, sitting on a
blueprint grid, with a **hard offset lime shadow** appearing on hover.

## Typography

- **Display & body:** `Space Grotesk` (400/500/700) — engineered grotesque with
  character. Never Inter/Roboto/system as primary.
- **Mono:** `Space Mono` (400/700) — labels, metadata, index numbers, eyebrows,
  counts, links. Same-family cohesion with the display face.
- **Scale:** major third (1.25), base 1rem → `--step--1 … --step-4`.

## Color (OKLCH, 60 / 30 / 10)

| Role                      | Token                         | Value                                   |
| ------------------------- | ----------------------------- | --------------------------------------- |
| Ground                    | `--bg`                        | `oklch(0.985 0.004 95)` warm near-white |
| Surface                   | `--surface`                   | `oklch(1 0 0)`                          |
| Ink (text/borders)        | `--ink`                       | `oklch(0.22 0.02 260)`                  |
| Muted                     | `--muted`                     | `oklch(0.52 0.02 260)`                  |
| Hairline                  | `--border`                    | `oklch(0.86 0.01 260)`                  |
| Grid                      | `--grid`                      | `oklch(0.92 0.012 250)`                 |
| Accent                    | `--accent`                    | `oklch(0.87 0.19 128)` electric lime    |
| Success / Warning / Error | `--success/--warning/--error` | greens/amber/red in OKLCH               |

Neutral dominates; ink carries structure; **lime is used sparingly** (index
chips, hover shadow, ticks). Lime never carries body text on white (contrast) —
it is always a fill with ink on top.

## Tokens

- **Spacing:** 8px base (`--space-1…8`).
- **Radius:** `--radius: 0` (sharp) with `--radius-sm: 2px` for small tags. Two
  values max, no blob-rounding.
- **Shadow:** ONE approach — defined edge (ink borders) at rest, hard offset
  lime shadow (`6px 6px 0 var(--accent)`) on hover. No diffuse drop shadows.
- **Motion:** `--dur: 180ms`, `--ease: cubic-bezier(0.2,0,0,1)`; transform +
  opacity only.

## Craft layer

- **Layout:** engineering-sheet frame (ink-bordered white panel on a blueprint
  grid ground), asymmetric hero, ruled section label with a `[ 04 ]` count, a
  deliberate 2×2 card grid (1 col on mobile). Breaks the centered-column reflex.
- **Components:** cards specified across rest/hover/focus; full-card links with
  `target=_blank rel=noopener`; WIP card renders a diagonal hatch placeholder +
  ink "Bientôt" tag instead of an image.
- **Imagery:** the three real event visuals are unified with a light rest-state
  desaturation that resolves to full color on hover (art direction as a system).
- **Iconography:** monospace arrows (`→ ↗`) and rules rather than a default icon
  set.
- **Motion:** card hover = `translate(-3px,-3px)` + hard lime shadow; respects
  `prefers-reduced-motion`.
- **Accessibility (WCAG 2.2 AA):** ink focus outline (2px, offset), full-card
  targets ≥24px, color never the sole signal (WIP also carries a text tag),
  reduced-motion honored. Lime kept off small text on white.

## Contact

`team@naomakers.com` is intentionally discreet — a small mailto in the footer
title-block, not a prominent CTA (per brief: "hidden somewhere").

## Slop audit

- No Inter/violet/dark-AI default · no hero+3-cards boilerplate template · no
  gradient text · no glassmorphism · no blob radius · no diffuse-shadow +
  hairline stacked · distinctive committed palette + type + signature move. Pass.

## Changelog

- v2 — Blueprint maker redesign (light + lime), away from the initial
  violet-on-dark theme flagged as AI-slop.
