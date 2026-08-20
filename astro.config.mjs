// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output (default). Deployed to Vercel behind the naomakers.com
// custom domain, so no `base` is required. `site` powers canonical URLs and
// the generated sitemap.
export default defineConfig({
  site: 'https://naomakers.com',
  integrations: [sitemap()],
  env: {
    schema: {
      // PostHog project token, read client-side by `src/components/Analytics.astro`.
      // Public by design (it can only ingest events), kept out of the repo so it
      // can be rotated from Vercel. Optional on purpose: the GitHub Actions build
      // has no Vercel environment variables and must keep passing without it —
      // the analytics snippet is then simply not emitted.
      PUBLIC_POSTHOG_KEY: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },
});
