# naomakers.com

Showcase website for **Naomakers**, a Nantes-based non-profit association that
promotes the digital sector in Nantes and supports the people and players of the
tech ecosystem — through hackathons, meetups and conferences.

Built with [Astro](https://astro.build) as a fully static site and deployed on
Vercel.

## Projects listed

- [Startup Weekend Nantes](https://startupweekendnantes.fr)
- [SHIFT Hackathon](https://shift-hackathon.com)
- [Generative AI Nantes](https://www.meetup.com/generative-ai-nantes)
- Gen AI Days _(work in progress)_

## Development

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:4321)
npm run build    # build the static site into dist/
npm run preview  # preview the production build locally
```

## Deployment

Production is hosted on **Vercel** (Git integration builds each push).
`.github/workflows/build-and-test.yml` runs lint, typecheck, build and link
checking on every push and pull request, and `.github/workflows/daily-redeploy.yml`
triggers a daily Vercel rebuild via the `VERCEL_DEPLOY` deploy-hook secret.
Dependabot plus `auto-merge.yml` keep dependencies current.
