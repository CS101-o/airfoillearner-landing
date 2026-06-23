# AirfoilLearner landing — deploy notes (for Kaan)

This is the marketing landing page for AirfoilLearner. It's a static **Astro** site —
no backend, no database. It builds to plain HTML/CSS/JS you can host anywhere.

## Run it locally
```bash
npm install
npm run dev        # opens http://localhost:4321
```

## Build for production
```bash
npm run build      # outputs a static site to ./dist
```

## Deploy to Netlify (pick one)
- **Drag-drop:** go to https://app.netlify.com/drop and drop the `dist` folder. Instant.
- **Git (recommended for ongoing edits):** push this repo to GitHub → Netlify → "Add new site" →
  "Import from Git". Build command `npm run build`, publish directory `dist`. (A `netlify.toml`
  with these settings is already included.)
- **CLI:** `npm i -g netlify-cli && netlify login && netlify deploy --prod --dir=dist`

Works the same on Vercel, Cloudflare Pages, GitHub Pages, etc. — it's just static files.

## Connecting the domain (airfoillearner.com)
Right now the apex `airfoillearner.com` serves the **demo**. Plan to avoid breaking the demo:
1. Put this landing on the apex `airfoillearner.com` (Netlify: Domain settings → add custom domain).
2. Move the existing demo to a subdomain, e.g. `demo.airfoillearner.com`
   (add it as a domain alias on the demo's Netlify site + a DNS CNAME record).
3. In this project, edit **`src/data/site.ts`** and set:
   ```ts
   export const DEMO_URL = 'https://demo.airfoillearner.com';
   ```
   It currently points to `https://airfoillearner.netlify.app` so the "try the demo" buttons
   keep working until the migration is done. Rebuild after changing it.

## Before launch — quick edits in `src/data/site.ts`
- `CONTACT_EMAIL` — currently the placeholder `hello@airfoillearner.com`.
- Footer LinkedIn link in `src/components/Footer.astro` is a placeholder (`https://www.linkedin.com/`).

## Where things live
- `src/data/site.ts` — demo link, contact email, nav links (edit copy/links here first)
- `src/components/` — page sections (Hero, Problem, HowItWorks, Proof, Science, CTA, Footer)
- `src/components/graphics/` — the hand-built SVG airfoil + pipeline line-art
- `src/styles/tokens.css` — the colour palette and fonts (paper/ink + vermilion accent)
