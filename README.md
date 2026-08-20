# naomakers.com

Showcase website for **Naomakers**, a Nantes-based non-profit association that
promotes the digital sector in Nantes and supports the people and players of the
tech ecosystem, through hackathons, meetups and conferences.

Built with [Astro](https://astro.build) as a fully static site and deployed on
Vercel.

## Projects listed

- [Startup Weekend Nantes](https://startupweekendnantes.fr)
- [Shift, le Hackathon Gen AI](https://shift-hackathon.com)
- [Generative AI Nantes](https://www.meetup.com/generative-ai-nantes)
- [Gen AI Days](https://genai-days-nantes.com)

## Development

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:4321)
npm run build    # build the static site into dist/
npm run preview  # preview the production build locally
```

## Analytics

Production loads [PostHog](https://posthog.com) behind the reverse proxy
`hogpost.naomakers.com` (managed proxy pointing at PostHog Cloud US). It is
built with the array-loader snippet, not the `posthog-js` npm package, and
only ships in production builds — `astro dev` and PR/CI builds emit nothing.

- **Token**: `PUBLIC_POSTHOG_KEY` env var (see `.env.example`), declared as
  an optional client schema entry in `astro.config.mjs` so a token-less
  build (GitHub Actions has no Vercel environment variables) still passes.
  Set the real value in Vercel → Project Settings → Environment Variables,
  **Production** scope only.
- **Config**: `autocapture: true`, `persistence: 'cookie'`,
  `api_host`/`ui_host` both set to the proxy. Super properties registered
  at init: `site: 'naomakers.com'`, `environment: 'production'`.
- **Custom events**: `object_action` snake_case naming
  (e.g. `project_card_clicked`). Application code never touches
  `window.posthog` — it calls `capture()` from `src/lib/analytics.ts`.
  Markup opts elements into tracking declaratively via
  `data-analytics-event` (+ optional `data-analytics-*` properties), picked
  up by a single delegated click listener in `src/layouts/BaseLayout.astro`.
- **CSP**: the site has none today. If one is ever added, `script-src` and
  `connect-src` need `https://hogpost.naomakers.com` plus `'unsafe-inline'`
  (both the JSON-LD block and the PostHog snippet are inline scripts).
- **CI**: `.lycheeignore` excludes the proxy host, since the
  `<link rel="preconnect">` it emits isn't a browsable page.

## Deployment

Production is hosted on **Vercel** (Git integration builds each push).
`.github/workflows/build-and-test.yml` runs lint, typecheck, build and link
checking on every push and pull request, and `.github/workflows/daily-redeploy.yml`
triggers a daily Vercel rebuild via the `VERCEL_DEPLOY` deploy-hook secret.
Dependabot plus `auto-merge.yml` keep dependencies current.
