# migration-portable — one paste, any project

Built 2026-11-22 from Boreal Codex's `laws/migrate.md` sweep. The tool closes
**2026-12-14**; chats and comments are deleted after that. Nothing in this kit
is Boreal-specific: name, namespace, components, colours, repo, continuity
files and invariants are detected per project.

## Use it (paste into a NEW chat inside the other project)
```
Copy /projects/e4313a00-bcd2-428b-beac-8781d442fd1e/migration-portable into this project, then read migration-portable/LAW.md and migrate the project to the best solution.
```
Swap "the best solution" for "Claude ai" or "Claude code" to run one side only.

## What it builds in that project
- `MIGRATE/PROFILE.json` — what was detected (name, namespace, accent, repo…).
- `MIGRATE/INVENTORY.*`, `MIGRATE/MOVE-PREFLIGHT.md` — every file, secrets flagged.
- `MIGRATE/offline/INDEX.html` — every screen, card and deliverable, offline.
- `MIGRATE/claude-ai/` — instructions, tokens, components, starter, brand
  reference, knowledge-upload tiers.
- `MIGRATE/claude-code/` — agent map, SETUP blocks, compiler + preview tools.
- `MIGRATE/chats/` — unclosed chats, comment dump.
- A copy doc with numbered steps (in `assets/copy/` if the project has one,
  else `MIGRATE/`).

Parts a project doesn't have (no component bundle, no repo, no STATE.md, no
ledger) are reported **not applicable** — never failed.

## Roster (from the founder's screenshots, 2026-11-22)
Design systems: Wishing Stones Design System · Tancook Island Botanicals Design
System · Classical · Sharon's Cookbook Design System.
Projects (not design systems; DS-only parts are skipped): Untitled · Boreal
Codex Business plan · Boreal Codex Customer Personas · Reset:Marketing · The
Boreal Codex wireframes · Boreal Codex snag list · Canadian fantasy artists.
Built-in samples (Modernist, Nocturne, Organic, Broadsheet, Industry) are not
the founder's and are skipped.
Boreal Codex itself keeps its own `laws/migrate.md` (already run 2026-11-22).
Founder checklist for the whole roster: `assets/copy/migrate-roster.html`.

## Dry run (2026-11-22, on Boreal Codex, out `scratch/portable-dryrun`)
Every script ran and every gate passed (G1 numbers, G3 10 exports, G5, copy-doc
gate). G4 found one bug — Google Fonts `@import` cut at `;` → unstyled
starter — fixed and re-checked: brand fonts and colours render, 0 errors.
Phase 3 (offline copies) was not dry-run here; it was proven live in the
Boreal sweep the same day.
