# LAW — Migrate any project off the design tool (portable)

Load on "migrate the project to …". **The phrase is the go-trigger**: no
questions, no stopping between phases. Stop only on a GATE FAIL (scripts throw
`GATE FAIL — …`); report that line and nothing else.

## Official facts (support article 17440474, read 2026-11-05)
- The tool closes **2026-12-14**: read-only after, originals deleted later.
- **Move to Claude** turns a design system into a design-system artifact in
  Claude.ai; the original becomes read-only for everyone, forever.
- **Chats and comments never move.** Public share links die.
- Official per-project download: Share → Project HTML → keep "Project
  archive" → Export (.zip, no chats or comments).
- **ORDER IS LAW:** capture → backup → official move → freeze.

## Trigger → target
| Phrase | target |
|---|---|
| "… to Claude ai" | `ai` |
| "… to Claude code" | `code` |
| "… to the best solution" | `best` (both) |
Fuzzy-match; typos are normal.

## Ground rules
- **Derive, never describe.** Every number in every output is computed by the
  script that writes it.
- **Never modify content.** Permitted source edits: the Phase 3 thumbnail
  line, and one routing row in the project's `CLAUDE.md` (Phase −1.5).
- **Never put secrets in Claude.ai knowledge.** Never copy a matched value.
- `run_script` dies at 30 s and writes nothing on error. Scripts are sized for
  one call; `10-inventory` is resumable (call until it logs DONE).
- Not applicable ≠ failed. Skip what the project doesn't have and say so.
- **A re-run starts with `delete_file MIGRATE`.** Everything in it is derived,
  and the write guard refuses to let a file shrink by half (UNCLOSED-CHATS
  shrinks as chats close).

## The loader (every script runs through it)
```js
const AF=Object.getPrototypeOf(async function(){}).constructor,K='migration-portable/scripts/';
const run=async(n,ARGS={})=>new AF('readFile','readFileBinary','saveFile','ls','log','ARGS',(await readFile(K+'_lib.js.txt'))+'\n'+(await readFile(K+n+'.js.txt')))(readFile,readFileBinary,saveFile,ls,log,ARGS);
await run('00-profile',{title:'…'});
```
One `run(...)` per `run_script` call unless both are small.

## Hazards measured 2026-11-22 (each one cost a session once)
1. A `.js`/`.mjs` outside `templates/` and `uploads/` is compiled into
   `_ds_bundle.js`; `.mjs` breaks it. Kit files stay `.txt` everywhere.
2. `super_inline_html` keeps a source's `@dsCard`/`@template` first line, so
   offline copies show up as duplicate cards. `31-offline-finish` strips them.
3. Files that are already self-contained (contain `__bundler/manifest`) fail
   `super_inline_html` → copy them as-is with `copy_files` (`asset: ""`).
4. `saveFile` rejects paths with characters like `(` `)` → scripts put those
   on a **manual** list; edit them with `str_replace_edit`.
5. In-page SVG refs (`%23noise`, `%23g`) show up as "asset not found" during
   bundling. They're false positives and still work in the page.
6. Google Fonts URLs contain `;` (`wght@500;600`). An `@import` extractor
   that stops at `;` leaves an unclosed `url('…` that swallows every token
   rule → the starter renders unstyled with **no console error**. Fixed in
   `40-claude-ai`, which now throws if an `@import` is cut. G4 is a LOOK at
   the screenshot (brand fonts and colours visible), not just zero errors.

## Phase −1 — Detect
1. If `laws/migrate.md` AND `migration/kit/` exist, the project has its own
   law. Use that instead and stop reading this file.
2. If `github.md` has `repo:` → `github_list_repos` → read `private`. Then
   `github_get_tree` (`path_prefix: "design-system"`, depth 1). If that folder
   exists and belongs to another project, use `dsFolder: "design-system-<slug>"`.
3. `run('00-profile',{title:<project title from system info>, repoPrivate, dsFolder, target})`.
   Read its log. A ⚠ line about its own law → back to step 1.
4. If root `CLAUDE.md` has a routing table, add ONE row:
   `| "migrate the project to …" | migration-portable/LAW.md |`.

## Phase 0 — Snapshot (only if `STATE.md` exists)
Write `## Chat Archive Summary — <date> (pre-migration snapshot)` at the top
of STATE.md, following the project's own close rules (`laws/sessions.md` if
present). It covers this chat and names every open `THREADS.md` row.

## Phase 1 — Inventory
1. `run('10-inventory')` repeatedly until it logs `DONE`.
2. `run('11-inventory-report')`.
3. **G1:** `list_files` (depth 99) on the root and on `MIGRATE`. Each reports
   a total, and those totals count folders. Check that root − MIGRATE equals
   `files + folders` from the 11 log. If they don't match, stop.
4. Review every secret-risk line in INVENTORY.md (its context shows only the
   keyword, never the value). Clear only prose, regex or placeholder hits,
   recording each as `{path, why}` for Phase 4.6.

## Phase 2+4.1+5.1 — Kit
`run('20-fill-kit')`. It copies `kit/` into `MIGRATE/` with every
placeholder filled. G5 and the no-placeholder gate are inside it.

## Phase 3 — Offline copies
1. `run('30-offline-prep')`. It injects the thumbnail line where it's missing and
   logs **manual** paths (edit those with `str_replace_edit`, putting the logged
   line right after `<body…>`) and **dc** paths (use `dc_html_str_replace`,
   putting the line right after the `@template` comment).
2. For every target: `super_inline_html` → `MIGRATE/offline/<same path>`.
   Batch these as parallel calls. For **bundled** targets use `copy_files`
   with `asset: ""` instead. Retry a failure once, then record
   `{path, error}`.
3. `run('31-offline-finish',{failed:[…]})`. It strips the markers, writes
   INDEX.html and FAILED.md, and runs **G2**. If it logs manual paths, strip
   their line 1 with `str_replace_edit`.

## Phase 4 — Claude.ai kit (`ai`, `best`)
1. `run('40-claude-ai')`. It writes tokens.inline.css,
   ds-components.js.txt (**G3**), `<slug>-starter.html` and
   brand-reference.html.
2. **G4:** `show_html` the starter with a screenshot, then `get_webview_logs`.
   Zero errors required. The log lists **NEEDS-PROPS** components: read each
   one's `.d.ts` and add real props to the `DEMO` list in the starter, then
   check again. Fix the starter, never the components. Do the same render check
   for brand-reference.html; benign ResizeObserver notices don't count.
3. `run('41-knowledge',{cleared:[…]})` → KNOWLEDGE-UPLOAD.md, plus
   EXCLUDE.txt and SCREEN-MAP.md when the target includes code.
4. 4A (official Move) is founder-only; it lives in the copy doc.

## Phase 6 — Chats and comments
1. I cannot read or export chat transcripts. Never claim otherwise.
2. `get_comments`, paged to the end. Then `run('50-chats',{comments:<full text>})`,
   which writes UNCLOSED-CHATS.md (from the Conversation Ledger, if there is one)
   and COMMENTS.md. Never resolve or change a comment.

## Phase 7 — Copy doc
`run('60-copy-doc')`. It writes `assets/copy/migrate-<target>.html` when
`assets/copy/` exists, else `MIGRATE/migrate-<target>.html`, and runs the
copy-doc gate inside. If the project has `laws/copy-docs.md`, its rules apply
too.

## Phase 8 — Ship
1. `delete_file` `MIGRATE/_work`.
2. `check_design_system`. If it reports cards or templates under `MIGRATE/`,
   a marker survived: strip it, then check again.
3. `present_fs_item_for_download`: path `""` (label `<short> — full project
   backup <date>`). For `ai`/`best`, also `MIGRATE/claude-ai`.
4. If `JOBS.md` exists, add a row `Migrate off the design tool` that copies the
   format of its neighbouring rows.
5. Reply in five lines or fewer: the target, the file count, the offline count,
   failures, and the copy doc's name and path last.
