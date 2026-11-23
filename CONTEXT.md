# Wishing Stones — the jobs and the checkpoints

The jobs, most frequent first. All of them end in the same release line.

| Job | Stages | Ends in |
|---|---|---|
| Update the website | `work/website/01_plan` → `work/website/02_build` | release |
| Release | `work/release/01_staging` → `02_production` | live site |

## The checkpoints (human gates)

| # | Where | The owner does |
|---|---|---|
| CHECK 1 | end of `work/website/01_plan` | the owner reads the plan: the exact words, prices, hours and photos that will change |
| CHECK 2 | end of `work/website/02_build` | the owner looks at the staging site on their phone — right words, photos look good, nothing broken |
| CHECK 3 | end of `work/release/01_staging` | opens staging on an iPad/phone (Safari) and looks at what changed |
| CHECK 4 | `work/release/02_production` | presses **Promote staging → production** in GitHub Actions |

## Hosting

GitHub Pages hosts production (`https://tancookjr-ops.github.io/Wishing-stones/`) and a sandboxed staging (`https://tancookjr-ops.github.io/Wishing-stones/staging/`). Details: `_shared/release-process.md`.

## Status — derive it, don't store it

- Work waiting at a checkpoint: files in each stage's `output/`.
- On staging but not live: `git log origin/Production..origin/Develop`.
- Released versions: files in `work/release/02_production/output/`.
