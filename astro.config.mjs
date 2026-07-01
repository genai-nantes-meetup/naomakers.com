// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output (default). Deployed to Vercel behind the naomakers.com
// custom domain, so no `base` is required. `site` powers canonical URLs and
// the generated sitemap.
export default defineConfig({
  site: 'https://naomakers.com',
  integrations: [sitemap()],
});
