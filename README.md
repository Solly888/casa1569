# CASA 1569

## A House of Origins

CASA 1569 is a modern Portuguese house of origins, beginning with exceptional single-origin tea.

This repository is the **single source of truth for the business**: brand, sourcing, website, operating model, historical research, supplier relationships, launch planning, and AI-agent instructions.

> Every origin has a story.  
> Every story has a route.

## Current stage

**Pre-launch / supplier development**

The public website (`/website`) is built and live-ready — see
`website/README.md` to run it locally. Immediate priorities:

1. ~~Establish a credible public CASA 1569 brand site.~~ Built; see `/website`.
2. Qualify and contact founding tea producers.
3. Sample and score candidate teas.
4. Lock ROTA 001 — São Miguel.
5. Finalise Australian importing/co-packing model.
6. Build launch economics before purchasing production inventory.

## Repository map

This repository holds both the durable business record and the
website implementation. See `REPO_MANIFEST.md` for the full file index
and `decisions/0003-monorepo-structure.md` for why they're structured
this way.

- `brand/` — brand architecture, style guide, voice, visual system.
- `website/` — the Next.js website implementation, built against
  `website/MASTER_BUILD_PROMPT.md`. Self-contained: run all `npm`
  commands from inside `/website`, not the repo root.
- `business/` — proposition, strategy, launch model, economics assumptions.
- `sourcing/` — route strategy, supplier contacts, RFQ and evaluation process.
- `operations/` — one-person AI-native operating model and roadmap.
- `compliance/` — Australian import/labelling working notes.
- `research/` — historical and category research.
- `decisions/` — major strategic decisions and rationale.
- `agents/` — instructions for Claude/Cursor/other agents.
- `assets/` — current visual mood boards and brand reference images.
- `data/` — working spreadsheets and structured business data.

## Brand hierarchy

**Master brand:** CASA 1569  
**Descriptor:** A House of Origins  
**Founding category:** CHÁ  
**Product provenance system:** ROTA  
**Editorial:** Cadernos da Rota

## Founding routes

- ROTA 001 — São Miguel, Açores
- ROTA 002 — Wuyishan / Fujian, China
- ROTA 003 — Darjeeling, India
- ROTA 004 — Ceylon Highlands, Sri Lanka
- ROTA 005 — Wazuka, Kyoto, Japan
- ROTA 006 — Assam, India (Phase 2)

## Rule

No agent may invent product availability, supplier agreements, historical facts, certifications, prices, trademarks, legal conclusions or customer claims.

If a fact is unverified, mark it **TBC**.

## Operating philosophy

The company is designed to remain extremely lean. AI agents may research, draft, analyse and execute reversible workflows, while the founder retains approval over:

- supplier contracts;
- money movement;
- purchase orders;
- product selection;
- public historical claims;
- legal/compliance matters;
- major pricing changes;
- brand identity changes;
- public crisis communications.
