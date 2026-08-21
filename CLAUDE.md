# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Content sync

The site's content lives in more than one place. When changing content
(projects, description, stats, contact...), update all of them so they stay
factually identical — not just similarly worded:

- `src/data/projects.ts` / `src/data/team.ts` / `src/data/faq.ts` /
  `src/data/association.ts` — source of truth. Rendered on the page **and**
  used to generate `/llms.txt` (`src/pages/llms.txt.ts`) at build time, so
  editing these files is the only step needed to keep both in sync — don't
  hand-edit an `llms.txt` file, there isn't one to edit.
- `README.md` ("Projects listed" section) — project names must match
  `projects.ts`.
- JSON-LD in `src/layouts/BaseLayout.astro` and `src/pages/index.astro` —
  structured data must mirror what's visible on the page (Google's
  structured data guidelines), so any visible stat (rating, project stats,
  FAQ answer...) needs a matching JSON-LD property and vice versa.
- `scripts/generate-og.mjs` / `public/og.png` — the OG share image duplicates
  the slogan as literal SVG text. If the slogan or H1 changes, edit the
  script and re-run `node scripts/generate-og.mjs` in the same commit; the
  build does not regenerate it automatically.

## Analytics

Application code must call `capture()` from `src/lib/analytics.ts` for any
tracking need — never call `window.posthog` directly. See the "Analytics"
section in `README.md` for the full config (token, naming convention,
`data-analytics-*` markup contract).

## Design

`DESIGN.md` is the source of truth for the visual system (typography, color,
spacing, motion). CSS should be a projection of it — if they drift,
`DESIGN.md` wins.

## Commands

- `npm run typecheck` — astro check
- `npm run lint` — prettier --check
- `npm run build` — static build to `dist/`
