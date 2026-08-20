# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Content sync

The site's content lives in more than one place. When changing content
(projects, description, stats, contact...), update all of them so they stay
factually identical — not just similarly worded:

- `src/data/projects.ts` / `src/data/team.ts` / `src/data/faq.ts` — source of
  truth, rendered on the page.
- `public/llms.txt` — summary for AI answer engines (GEO). **Don't forget to
  update it whenever page content changes.** Names, URLs and numbers must
  match the rendered page exactly.
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

## Design

`DESIGN.md` is the source of truth for the visual system (typography, color,
spacing, motion). CSS should be a projection of it — if they drift,
`DESIGN.md` wins.

## Commands

- `npm run typecheck` — astro check
- `npm run lint` — prettier --check
- `npm run build` — static build to `dist/`
