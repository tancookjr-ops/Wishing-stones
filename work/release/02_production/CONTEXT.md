# 02_production — promote the checked staging build to live

One job: after the staging check passes, make the staging build the live site and record it.

## Inputs
- Working (this run): the staging check passed on the current `Develop` tip
- Reference (every run): `../../../_shared/release-process.md`

Do NOT load: anything else — this step is a button and a note.

## Process
1. GitHub → Actions → **Promote staging → production** → Run workflow (from `Develop`).
2. If it stops with "Production has commits that are not on Develop": merge
   `Production` into `Develop`, let staging redeploy, re-check, promote again.
3. Write `output/<version>.md`: date, version, commit, one line per change.

## Outputs
- `Production` = `Develop`; live site updated (Pages, plus FTP once configured)
- `output/<version>.md` — the release note (these files are the release history)

## Human check — release check
Pressing **Run workflow** is the owner's decision and nobody else's. Afterwards, open the
live site on an iPad/phone (Safari).
