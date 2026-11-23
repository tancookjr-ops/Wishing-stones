# Wishing Stones

The Wishing Stones design system and website — a gallery, museum, library, gift shop and community hub in one old building on Tancook Island, Nova Scotia — and the workspace that updates the site and releases it.

Built on ICM: folders carry sequencing, hierarchy carries context, files carry state.
If something needs explaining, it goes in that folder's `CONTEXT.md`.
`AGENTS.md` is a pointer to this file — one map for every assistant.

## Where things live

| Path | What it holds |
|---|---|
| `index.html` (root) | sends visitors to the website at `design-system/ui_kits/website/` |
| `design-system/ui_kits/website/` | the live website — Home, Visit, Rooms, Map, Shop |
| `design-system/` | the design system (tokens, components, guidelines, tools) — own `CLAUDE.md` |
| `work/website/` | pipeline: 01_plan → 02_build |
| `work/release/` | pipeline: Develop → staging → owner check → Production |
| `work/LEDGER.md` | session handoffs, newest first |
| `_shared/` | factory: **rules**, working practices, secrets, release process |
| `_templates/` · `_archive/` | blank starters · what is retired and why |
| `.github/` 🔒 · `scripts/` 🔒 | deploy automation and checks — guarded (own `CONTEXT.md`) |

## Route by job

| Job | Go to | Then stop at |
|---|---|---|
| update the website | `work/website/01_plan/CONTEXT.md` | the owner reads the plan: the exact words, prices, hours and photos that will change |
| release a version | `work/release/02_production/CONTEXT.md` | owner presses Promote |
| deploys, CI, scripts 🔒 | `.github/CONTEXT.md` / `scripts/CONTEXT.md` | owner's yes to the impact summary |
| secrets, server details | `_shared/secrets.md` | owner enters values in GitHub |
| set up another repo the same way | https://github.com/tancookjr-ops/repo-onboard (the patch) | owner approves the proposal |
| "pickup" / "handoff" | `_shared/working-practices.md` → Pickup / handoff | — |
| asked for status | `CONTEXT.md` → "Status" | report what exists |

## The laws (full text, and how each is enforced: `_shared/rules.md`)

1. Real saved data is the production database — never rename a storage key or change its shape without a migration.
2. Live files are the one source; mirrored copies are synced, never edited alone.
3. Voice is warm, joyful and unhurried — first-person plural and second person ("come find us"); never corporate or salesy. No emoji in body copy or as icons; the single ✦ star is decorative only. Icons come from Lucide. Canadian spelling in everything people read.
4. Work lands on `Develop` through a pull request from a `claude/<topic>` branch, one concern each, Conventional Commits. `Production` is promote-only.
5. `.github/` and `scripts/` are guarded: only when asked, impact summary first.
6. Actions SHA-pinned, Dependabot 7-day cooldown, npm via `npm ci --ignore-scripts`, no new CDN or service without a yes.
7. No secret in the repo, a file, a prompt or a chat.
8. Nothing moves past a CHECK until the owner has looked at it.

How Claude works with the owner: `_shared/working-practices.md`. Lost? Ask — don't wander.
