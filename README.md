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

## Structure

- `app/page.tsx` — publisher and LocFlow product page
- `app/support/page.tsx` — public support/contact page
- `app/globals.css` — responsive brand styling
- `public/nightshift-tools-promo.png` — Asset Store promo banner
- `public/og.png` — social sharing image

© 2026 Nightshift Tools
