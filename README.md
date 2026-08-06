# StudioAPI landing page

Marketing site for StudioAPI, built with Astro + Tailwind CSS v4.

## Development

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run check      # astro check
```

## Structure

```text
/
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── llms.txt          # AI-agent-readable site summary
├── src/
│   ├── components/       # Nav, Hero, Sources, Stats, Agentic, Code, ...
│   ├── layouts/          # BaseLayout with fonts + SEO + intro gating
│   ├── pages/index.astro
│   └── styles/global.css # theme tokens + design system
└── .github/workflows/deploy.yml
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow, which runs
`astro check`, builds the site, and deploys `dist/` to Cloudflare Pages
project `studioapi` via `cloudflare/wrangler-action`.

The workflow needs a `CLOUDFLARE_API_TOKEN` repository secret with
`Cloudflare Pages:Edit` permission. Add it in
GitHub → Settings → Secrets and variables → Actions.
