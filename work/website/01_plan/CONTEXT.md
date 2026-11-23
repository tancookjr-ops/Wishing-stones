# 01_plan — turn a request (new hours, text, shop items, photos) into a short change plan

One job: turn a request (new hours, text, shop items, photos) into a short change plan.

## Inputs
- Working (this run): `inbox/<anything>` — a note, a photo, a screenshot
- Reference (every run): `../../../_shared/rules.md` §3 (content rules)
- Reference (every run): `../../../design-system/readme.md` (voice, colours, type, imagery) and `../../../design-system/ui_kits/website/README.md` (which screen holds what)

Do NOT load: `design-system/MIGRATE/`, `design-system/uploads/`, `_ds_bundle.js` or the component sources — a plan needs words and screens, not code.

## Process
1. Read the inputs.
2. Name the screen(s) the request touches (Home, Visit, Rooms, Map, Shop — `*.jsx` in `design-system/ui_kits/website/`).
3. For each change write *now* → *after*, word for word (hours, prices, text), in the voice of the readme and Canadian spelling.
4. List any new photo: its file, where it goes, and its caption. Flag anything the request leaves unclear as a question.
5. Write the result to `output/`.

## Outputs
- `plan-<YYYY-MM-DD>-<topic>.md` (screens, now → after, photos, open questions) → `output/`

## Human check
the owner reads the plan: the exact words, prices, hours and photos that will change
