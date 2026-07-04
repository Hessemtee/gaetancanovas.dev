# gaetancanovas.dev — Nuxt V0.9.1 scaffold

Minimal bilingual Nuxt 3 scaffold for `gaetancanovas.dev`.

## Stack

- Nuxt 3
- `@nuxtjs/i18n`
- CSS maison
- SVG inline locaux
- No UI library
- No icon package
- No animation package
- No Nuxt Content / no SQLite binding
- Optional lightweight analytics foundation
- Static SEO/release tooling

## Routes

FR default:

- `/`
- `/chantiers`
- `/chantiers/[slug]`
- `/atelier`
- `/blog`
- `/blog/[slug]`
- `/a-propos`
- `/contact`
- `/cv`
- `/confidentialite`
- `/*` fallback 404

EN:

- `/en`
- `/en/work`
- `/en/work/[slug]`
- `/en/lab`
- `/en/blog`
- `/en/blog/[slug]`
- `/en/about`
- `/en/contact`
- `/en/resume`
- `/en/privacy`
- `/en/*` fallback 404

## Install

```bash
npm install
npm run dev
```

## Generate static site

```bash
npm run generate
npm run preview
```

## Content check

```bash
npm run check:content
```

Regenerate the static sitemap after route/content changes:

```bash
npm run seo:sitemap
```

This validates that the local TypeScript content contains the expected slugs and required metadata.

## Patch history

### V0.1.1 — no Nuxt Content

- Removed `@nuxt/content` to avoid native SQLite bindings (`better-sqlite3`) during local dev.
- Long content is stored in `data/fr/*Details.ts` and `data/en/*Details.ts`.

### V0.2 — header + chips + icons

- Added explicit sticky header.
- Added lightweight mobile menu.
- Added `components.pathPrefix = false`.
- Added icon chips with local inline SVG.
- Added cards with icon boxes.
- Improved CSS without Tailwind or UI library.

### V0.3 — mini dashboard

- Replaced pseudo-code hero block with a fictional mini-dashboard.

### V0.4 — “Par où commencer ?”

- Replaced mini-dashboard with a clearer “Par où commencer ?” block.
- Home remains short and directional.

### V0.5 — editorialized indexes + polish

- Improved card hierarchy, badges and icon boxes.
- Added compact list item component for dense sections.
- Added limit/editorial rule notice component.
- Reworked `/chantiers`, `/atelier` and `/blog` indexes:
  - featured content first;
  - compact index/listing second;
  - filters and categories without infinite scrolling;
  - grouping for lab/atelier families.
- Refined detail page layout for work and blog pages.

## Editorial rule

The home guides. Dedicated pages prove, organize and let visitors go deeper.

The site should remain a map, not an encyclopedia.


### V0.6 — CV / Resume secondary path

- Added `/cv` in French and `/en/resume` in English.
- Added downloadable PDF placeholders under `/public/documents/`.
- Added CV links in `/a-propos`, `/contact` and footer.
- CV remains a practical secondary output, not part of the main navigation.


### V0.7 — DX fix + Backlog JV content slots

- Added root `tsconfig.json` extending Nuxt generated TypeScript config so IDEs resolve `~` aliases cleanly.
- Expanded the Backlog JV / Game Backlog detail page content.
- Added media/demo slots on detail pages when a project provides `media` metadata.
- Added local inline SVG icons for video and screenshots.
- Prepared Backlog JV page for future video, commented screenshots and optional web demo without publishing a desktop build yet.
- Updated content checks to cover the root TypeScript config and Backlog media metadata.


### V0.7.1 — SEO, analytics foundation and media structure

- Added `runtimeConfig.public.siteUrl` for canonical URLs.
- Improved `useSiteSeo()` with canonical, alternate `hreflang`, `x-default`, Open Graph URL and default OG image.
- Added static `robots.txt` and `sitemap.xml`.
- Added `/confidentialite` and `/en/privacy` privacy pages.
- Added optional analytics loader, disabled by default:
  - `cloudflare` for Cloudflare Web Analytics;
  - `plausible` for Plausible.
- Added `.env.example` documenting public analytics variables.
- Added media folders for Backlog JV screenshots and lightweight demo videos.
- Added default SVG Open Graph image under `/public/images/og/default-og.svg`.
- Updated content checks for SEO files, privacy route, media structure and analytics config.

## Analytics setup

Analytics are disabled by default.

For Cloudflare Web Analytics, copy `.env.example` to `.env` and set:

```bash
NUXT_PUBLIC_ANALYTICS_PROVIDER=cloudflare
NUXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=your_cloudflare_token
```

For Plausible:

```bash
NUXT_PUBLIC_ANALYTICS_PROVIDER=plausible
NUXT_PUBLIC_PLAUSIBLE_DOMAIN=gaetancanovas.dev
```

The analytics script is only injected in production builds.

## Media structure

Backlog JV screenshots:

```txt
/public/images/projects/backlog-jv/
```

Backlog JV videos:

```txt
/public/videos/backlog-jv/
```

Screenshots should be `.webp`, max width 1600px. Videos should stay short and compressed.

### V0.8.1 — design polish

- Polish global CSS : background, grille légère, focus states, reduced motion.
- Header plus premium : active state, menu mobile amélioré, marque plus lisible.
- Footer restructuré avec rappel éditorial discret.
- Cards Chantiers / Atelier / Blog plus éditoriales : accents visuels, ombres, hover states.
- PageHero retravaillé avec ornement léger.
- Pages détail blog/chantiers plus lisibles : meilleure prose, sections, média slots.
- Toujours sans Tailwind, sans UI library, sans lib d’icônes.

### V0.8.1.1 — PageHero ornament cleanup

- Removed the empty `.page-hero__ornament` DOM block.
- Replaced it with a subtle decorative `::after` pseudo-element.
- The page hero no longer looks like it is waiting for placeholder content.


### V0.8.1.2 — PageHero micro-texture

- Removed the circular halo/blob ornament.
- Replaced it with a lighter background micro-texture and a subtle corner line.
- No extra DOM, no contextual content block, no decorative placeholder.

### V0.8.2 — real content pass

- Expanded the main work detail pages with more credible, concrete text:
  - high-traffic front-end;
  - modernizing an existing front-end;
  - Backlog JV / Game Backlog;
  - TNSFC;
  - File Requester.
- Added compact facts metadata on work detail pages.
- Expanded blog articles from short placeholders into publishable first drafts.
- Added article metadata: status, reading time and year.
- Cleaned the CV project list to avoid referencing a project not present elsewhere on the site.
- Kept media honest: Backlog JV still expects real screenshots/video; no fake product screenshots were added.


### V0.9 — pre-publication / release candidate foundation

- Added a bilingual 404 page with `noindex` SEO metadata.
- Added a skip link and a stable `#main-content` target for keyboard navigation.
- Improved header accessibility labels in FR/EN and added `aria-controls` on the mobile menu.
- Removed dead `href="#"` links from the contact page.
- Added a central `utils/externalLinks.ts` file for contact/social links.
- Added a real SVG favicon.
- Added a raster 1200×630 Open Graph fallback image for social sharing.
- Added lightweight JSON-LD `WebPage`/`WebSite` structured data through `useSiteSeo()`.
- Added `scripts/generate-sitemap.mjs` and `npm run seo:sitemap`.
- Regenerated `public/sitemap.xml` with `lastmod` and FR/EN alternates.
- Added `public/_headers` with basic static security/privacy headers for compatible hosts.
- Added `docs/release-checklist.md` for the final V1 publication pass.


### V0.9.1 — editorial wording polish

- Replaced internal/test wording on the home page and index pages with more publishable copy.
- Localized several section eyebrow labels that were still hard-coded in English on FR pages.
- Softened portfolio/meta language around “proof”, “rules”, artificial showcases and placeholders.
- Clarified Backlog JV media wording without pretending screenshots or videos already exist.
- Updated footer, CV and about copy to use more natural public wording.

## Before V1 publication

Replace or add:

- real CV PDFs in `/public/documents/`;
- real Backlog JV screenshots in `/public/images/projects/backlog-jv/`;
- optional compressed Backlog JV demo video in `/public/videos/backlog-jv/` or external link;
- optional LinkedIn URL in `utils/externalLinks.ts`;
- final proofreading of FR/EN content.
