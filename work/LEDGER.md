# Ledger — session handoffs (newest first)

Append-only. One entry per "handoff" (see `_shared/working-practices.md`).
Status is never stored here — it is read from the files (`CONTEXT.md` → Status).

## 2026-11-23 — onboarded with repo-onboard

**Changed**
- Design-tool backup (release `Wishingstone-upload`) imported unchanged into `design-system/`,
  with working `tools/` (check · build · preview); `uploads/` stays out of git (backup's own
  rule for a public repo) and remains in the release zip.
- ICM workspace, rules and working practices, `work/website/` pipeline (plan → build),
  deploy workflows (GitHub Pages: `/staging/` from Develop, `/` from Production; FTP off until
  secrets exist), `scripts/check-design-system.sh` in the staging gate, Dependabot, icm-architect skill.
- Branches `Develop` (staging) and `Production` (promote-only) created. Production shows a
  coming-soon page until the first promote.

**Waiting on the owner**
- Make `Develop` the default branch: https://github.com/tancookjr-ops/Wishing-stones/settings
- Turn on Dependabot: https://github.com/tancookjr-ops/Wishing-stones/settings/security_analysis
- Promote when ready (CHECKs pass on staging first).

**Next**
- First website update through `work/website/01_plan/`; swap placeholder photos for real ones.
