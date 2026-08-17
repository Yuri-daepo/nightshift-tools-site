# Nightshift Tools

Public website for Nightshift Tools, the publisher of focused Unity Editor workflow tools.

The site introduces LocFlow, explains the product's workflow and compatibility, and provides a dedicated support/contact page. It contains marketing material only—no LocFlow source code or customer project data.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm test
```

`npm test` produces a full production build containing the home and support routes.

## GitHub Pages

```bash
npm run build:pages
```

This creates the dependency-free static artifact in `pages-dist/`. The GitHub Actions workflow publishes that artifact to the organization Pages site.

## Structure

- `app/page.tsx` — publisher and LocFlow product page
- `app/support/page.tsx` — public support/contact page
- `app/globals.css` — responsive brand styling
- `static-site/` — dependency-free GitHub Pages HTML
- `scripts/build-pages.mjs` — static artifact builder
- `public/nightshift-tools-promo.png` — Asset Store promo banner
- `public/og.png` — social sharing image

© 2026 Nightshift Tools
