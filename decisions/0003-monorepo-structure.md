# ADR 0003 — Website Implementation Lives at `/website`

**Status:** Accepted

## Context

This repository was originally a business knowledge base with a
`/website/MASTER_BUILD_PROMPT.md` specification but no implementation.
A Next.js site has now been built against that specification.

## Decision

The Next.js implementation (TypeScript, Tailwind, App Router) lives
entirely under `/website`, alongside `MASTER_BUILD_PROMPT.md`. It is a
self-contained project: its own `package.json`, `node_modules`,
`tsconfig.json`, lockfile and `README.md` (with local run instructions)
live there, not at the repo root.

The repo root remains the business knowledge base: brand, business,
sourcing, operations, compliance, research, decisions, agents and
assets. Nothing under those folders should move into `/website`, and
website config/dependencies should never leak to the repo root.

## Why

- Keeps the durable business record (the repository's primary purpose
  per `business/repo-governance.md`) clearly separated from a specific
  technical implementation that may be rebuilt, migrated or replaced.
- Matches `agents/cursor.md`'s existing file-discipline rule against
  mixing business documents into website source folders — this ADR is
  the "intentionally restructured and documented" exception that rule
  anticipated once real code existed.
- Lets `/website` be deployed, cloned, or handed to a contractor as a
  self-contained project without dragging in confidential business
  documents (supplier contacts, pricing hypotheses, compliance notes).

## Consequence

Run all website commands from inside `/website` (`cd website && npm
install && npm run dev`), not the repo root. Two `AGENTS.md` files now
exist at different scopes: `/AGENTS.md` (business operating
instructions, authoritative for brand/commercial decisions) and
`/website/AGENTS.md` (Next.js framework conventions, auto-managed by
the `next dev` tooling). They serve different audiences and should not
be merged.
