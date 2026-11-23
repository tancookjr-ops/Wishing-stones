# 01_staging — get Develop onto staging and check it

One job: make sure what's on `Develop` is on staging, ready for the owner's check.

## Inputs
- Working (this run): the merged change (`git log origin/Production..origin/Develop`)
- Reference (every run): `../../../_shared/release-process.md`

Do NOT load: drafts in other pipelines, mirrored copies, reference folders.

## Process
1. Follow the release doc above for anything that must change before a release.
2. A push to `Develop` runs **Deploy to Staging** (or run it by hand in Actions).
3. Confirm the run is green; its summary lists the staging commit and whether FTP ran.

## Outputs
- staging updated at `https://tancookjr-ops.github.io/Wishing-stones/staging/`

## Human check — staging check
The owner opens staging on **an iPad/phone (Safari)** and looks at exactly what changed.
Staging starts with empty saved data — that is the sandbox, not a bug.
