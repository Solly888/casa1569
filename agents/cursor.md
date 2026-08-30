# Cursor — CASA 1569 Project Instructions

Treat this repository as both a business knowledge base and software project.

## Website work

Read:
- `/website/MASTER_BUILD_PROMPT.md`
- `/brand/brand-guide.md`
- `/brand/style-guide.md`
- `/brand/voice.md`

Do not simplify the design into a default Next.js/Tailwind landing page.

## File discipline

Do not:
- move business documents into website source folders;
- overwrite research with marketing copy;
- remove decision records because they appear redundant.

The website implementation lives under `/website` (an intentional,
documented restructure — see `REPO_MANIFEST.md` and
`/decisions/0003-monorepo-structure.md`), alongside
`/website/MASTER_BUILD_PROMPT.md`. It is a self-contained Next.js
project: run all `npm`/`node` commands from inside `/website`, not the
repo root. Do not scatter website config (package.json, tsconfig, etc.)
at the repo root, and do not create a separate `/site` folder.

## Brand drift

If a proposed component conflicts with brand rules, the brand rules win.
