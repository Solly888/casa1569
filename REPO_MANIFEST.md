# CASA 1569 — Repository Manifest

This repository is two things in one: the durable business knowledge
base (brand, strategy, sourcing, operations, compliance, research,
decisions, agent instructions) and the `/website` implementation built
against `website/MASTER_BUILD_PROMPT.md`. See
`decisions/0003-monorepo-structure.md` for why they live together this
way and where the boundary is.

## Business knowledge base (repo root)

- `.gitignore`
- `AGENTS.md` — business-facing agent operating instructions (authoritative for brand/commercial work)
- `README.md`
- `REPO_MANIFEST.md` — this file
- `agents/claude.md`
- `agents/cursor.md`
- `assets/README.md`
- `assets/moodboards/01-house-of-origins.png`
- `assets/moodboards/02-brand-identity-board.png`
- `assets/moodboards/03-luxury-tea-mockups.png`
- `brand/brand-guide.md`
- `brand/style-guide.md`
- `brand/voice.md`
- `business/launch-plan.md`
- `business/repo-governance.md`
- `business/strategy.md`
- `compliance/australia.md`
- `data/CASA_1569_Sourcing_Pipeline.xlsx`
- `decisions/0001-master-brand.md`
- `decisions/0002-founding-routes.md`
- `decisions/0003-monorepo-structure.md`
- `decisions/0004-canonical-domain.md`
- `operations/ai-operating-model.md`
- `operations/roadmap.md`
- `research/history-of-cha.md`
- `sourcing/RFQ_CHECKLIST.md`
- `sourcing/SUPPLIER_CONTACTS.md`
- `sourcing/contacts.csv`
- `sourcing/sourcing-strategy.md`

## Website implementation (`/website`)

A self-contained Next.js project — its own dependencies, config and
`README.md` with run instructions. Not enumerated file-by-file here to
keep this manifest stable as the implementation evolves; see
`website/README.md` for the current structure. Notable top-level items:

- `website/MASTER_BUILD_PROMPT.md` — the specification the site is built against
- `website/README.md` — local dev instructions, design-token and route reference
- `website/src/app/` — routes (App Router), metadata, sitemap, robots, OG/apple icons, 404
- `website/src/components/` — Nav, Footer, Section, Scene, Archive, TexturePanel, forms, cards
- `website/src/lib/` — site content, configuration, and the photography placeholder registry
- `website/src/proxy.ts` — canonical-domain redirect (see `decisions/0004-canonical-domain.md`)

## Keeping this manifest current

When you add or remove a file at the business-root level (not inside
`/website`), update the list above in the same change. When the website
structure changes materially, update `website/README.md` instead —
this file only needs to track its top-level shape.
