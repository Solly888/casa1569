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
World Contemporary**. Rather than stock photography, the site uses an
original graphic language of colour fields, fine cartographic line work
and coordinates — consistent with the brand's own style guide, which
calls for restraint over generic imagery.

Colour tokens (defined in `src/app/globals.css`):

| Token | Hex | Role |
| --- | --- | --- |
| Casa Ivory | `#F1EBDD` | Primary background |
| Atlantic Ink | `#17262C` | Primary typography / dark surfaces |
| Azulejo Blue | `#315E6D` | Cartographic / Portuguese accent |
| Patina | `#667063` | Botanical / São Miguel accent |
| Terracotta | `#A85D43` | Warm architectural accent |
| Aged Brass | `#A48656` | Premium detail |

Typography: Cormorant Garamond (display serif) paired with Inter
(supporting sans), loaded via `next/font/google`.

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
The contact email is a placeholder (`NEXT_PUBLIC_CONTACT_EMAIL` env var,
falling back to a clearly marked placeholder address) — replace it with
the house's real enquiries address before launch. The partner and
early-access forms have no backend; the partner form opens a pre-filled
`mailto:` link, and the early-access form is a local, front-end-only
confirmation.

## Project structure

```
src/
  app/            routes (App Router), metadata, sitemap, robots, OG image
  components/     Nav, Footer, Section, TexturePanel, forms, cards
  lib/            site content and configuration
```
