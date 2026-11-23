# 02_build — make the approved change in `design-system/ui_kits/website/`, run `npm run check` and preview it, then merge to Develop

One job: make the approved change in `design-system/ui_kits/website/`, run `npm run check` and preview it, then merge to Develop.

## Inputs
- Working (this run): `../01_plan/output/` (approved files only)
- Reference (every run): `../../../_shared/rules.md` §3 (content rules)
- Reference (every run): `../../../design-system/CLAUDE.md` (tools, definition of done) and `../../../design-system/readme.md` (brand)

Do NOT load: `design-system/MIGRATE/offline/` or `design-system/uploads/` (large copies and raw photos); never hand-edit `_ds_bundle.js`.

## Process
1. Read the inputs.
2. On a `claude/<topic>` branch from `Develop`, make exactly the approved plan's changes in `design-system/ui_kits/website/` (new photos into `design-system/ui_kits/website/assets/`).
3. Use only design-system tokens and components; if a component must change, `npm run build -- --replace` in `design-system/tools/`.
4. In `design-system/tools/`: `npm run check` → `0 errors`; `CHROME_PATH=/opt/pw-browsers/chromium npm run preview -- ../ui_kits/website/index.html`, then read the PNG (console errors 0).
5. Open a pull request into `Develop`; after merge the staging deploy publishes it at `/staging/`.
6. Write a short build note to `output/`.

## Outputs
- `build-<YYYY-MM-DD>-<topic>.md` (PR link, check/preview output lines, staging link) → `output/`

## Human check
the owner looks at the staging site on their phone — right words, photos look good, nothing broken
