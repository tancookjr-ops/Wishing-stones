# migration-portable/ — the off-ramp kit for ANY project

Brand-neutral copy of Boreal Codex's migration sweep. Other projects copy this
folder in and run `LAW.md`. Start at `README.md`.

- `LAW.md` — the procedure (phases, gates, tool calls).
- `scripts/*.js.txt` — the derivations, run through the loader in `LAW.md`.
- `kit/` — templates with `{{PLACEHOLDERS}}` and `<!--if:flag-->` blocks,
  filled per project by `scripts/20-fill-kit.js.txt`.

Rules:
- **Every script and tool stays `.txt`.** A `.js`/`.mjs` anywhere outside
  `templates/` and `uploads/` is compiled into the design-system bundle, and
  `.mjs` breaks it (measured 2026-11-22). Never rename them in any project.
- Edit the kit HERE (Boreal Codex project), never inside a copy; projects
  re-copy the folder to pick up fixes.
- No Boreal-specific value may appear in `kit/` or `scripts/` — everything is
  detected into `MIGRATE/PROFILE.json` by `scripts/00-profile.js.txt`.
