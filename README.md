# CASA 1569 — A House of Origins

A static, launch-quality public website for **CASA 1569**, a modern
Portuguese house of origins beginning with exceptional, single-origin tea.

The site exists to establish credibility with tea estates, exporters,
packaging partners, press and early premium consumers — before CASA 1569
has sold a single tin. There is no shop, no cart, no accounts: this is a
brand and provenance site, not e-commerce.

## Stack

- [Next.js](https://nextjs.org) (App Router, static-export capable)
- TypeScript
- Tailwind CSS v4
- No database, no auth, no external services

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage — brand idea, ROTA 001, principles, founding origins |
| `/house` | The House — positioning and brand architecture (CASA / CHÁ / ROTA / CADERNOS DA ROTA) |
| `/origins` | The five origins currently being explored |
| `/1569` | The history behind the name, told in five chapters |
| `/partners` | For producers, estates, exporters and partners — enquiry form |
| `/journal` | Cadernos da Rota — editorial notes |
| `/journal/[slug]` | Individual journal entries |

## Design system

Visual direction: **Quiet Portuguese Luxury + Maritime Modernism + Old
World Contemporary**. Rather than stock photography, the site uses two
original placeholder systems documented in `src/lib/image-placeholders.ts`:

- **`Scene`** (`src/components/Scene.tsx`) — a documentary/cinematic
  landscape placeholder (gradient sky, clipped horizon silhouette, grain)
  used on the homepage hero, `/origins` and `/partners`.
- **`Archive`** (`src/components/Archive.tsx`) — an archival/manuscript
  placeholder (aged paper tone, ledger ruling, deckled edge, date stamp)
  used on `/1569`, deliberately contrasting with `Scene`.
- **`TexturePanel`** — the original cartographic panel (topography/wave/
  grid/ring line work), still used for smaller origin thumbnails.

None of these depict real people, estates or places — see
`image-placeholders.ts` for the brief to give a photographer once CASA
1569 commissions real photography.

### Colour tokens

Brand anchors (decorative use — backgrounds, borders, gradients):

| Token | Hex | Role |
| --- | --- | --- |
| Casa Ivory | `#F1EBDD` | Primary background |
| Atlantic Ink | `#17262C` | Primary typography / dark surfaces |
| Azulejo Blue | `#315E6D` | Cartographic / Portuguese accent |
| Patina | `#667063` | Botanical / São Miguel accent |
| Terracotta | `#A85D43` | Warm architectural accent |
| Aged Brass | `#A48656` | Premium detail |

Accessible text tokens (each verified ≥ 4.5:1 against the specific surface
it's designed for — see the comments in `globals.css` for the exact
contrast ratio of each):

| Token | Use |
| --- | --- |
| `text-ink` / `text-ink-secondary` / `text-ink-muted` | Body copy on Ivory, descending emphasis |
| `text-ivory-inverse` / `-secondary` / `-muted` / `-faint` | Body copy on Atlantic Ink, descending emphasis |
| `text-terracotta-text` / `text-terracotta-inverse` | Terracotta accent text on Ivory / on Atlantic Ink |
| `text-patina-text` | Patina accent text on Ivory |
| `text-brass-text` | Aged Brass accent text on Ivory |
| `text-ink-decorative` | Non-text ornament only (rules, glyphs) — never real content |

The `.surface-dark` class (applied to `Section dark` and any full-bleed
dark hero) flips `:focus-visible` outlines from ink to ivory so keyboard
focus stays visible on dark backgrounds.

### Typography

Cormorant Garamond (display serif) paired with Inter (supporting sans),
loaded via `next/font/google`.

### Motion

Tokens in `globals.css`: `--ease-out`, `--ease-in-out`, `--duration-fast`
(140ms), `--duration-base` (220ms), `--duration-slow` (320ms). Page
reveals run at ~220ms ease-out with an 8px translate; hover-scale on
imagery is gated behind `@media (hover: hover) and (pointer: fine)` so it
never fires from a touch tap; everything respects
`prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on **http://localhost:4287**.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Content

Site copy, origins and journal entries live in `src/lib/site-config.ts`.
The contact email (`partners@casa1569.com.au` by default, overridable via
`NEXT_PUBLIC_CONTACT_EMAIL`) is prepared but not confirmed live — verify
the mailbox is monitored before launch. The partner form validates
inline, includes a honeypot spam trap, and opens a pre-filled `mailto:`
on submit with an always-visible fallback email link; the early-access
form is a local, front-end-only confirmation (no backend, by design —
see the master build brief).

## Domains

`casa1569.com.au` is the canonical domain (`siteConfig.url`).
`casa1569.com` is a secondary domain CASA also controls; `src/proxy.ts`
redirects it (and its `www` subdomain) to the canonical domain with a
308, so the same deployment can serve both without duplicating the site.

## Accessibility

Skip-to-content link, semantic landmarks, `aria-current` on the active
nav item, a focus-trapped/`Escape`-closing mobile menu that returns focus
to its trigger, 44px+ touch targets, and the accessible colour tokens
described above. See `globals.css` for the exact contrast ratios behind
each token.

## Project structure

```
src/
  app/            routes (App Router), metadata, sitemap, robots, OG/apple icons, 404
  components/     Nav, Footer, Section, Scene, Archive, TexturePanel, forms, cards
  lib/            site content, configuration and the photography placeholder registry
  proxy.ts        secondary-domain redirect (casa1569.com → casa1569.com.au)
```
