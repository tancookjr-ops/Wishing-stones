# Release process — branches, hosting, automation

Installed by repo-onboard (adapted from BorealCodex's deploy workflows, for a static site).

## Branches
| Branch | Role | Who writes to it |
|---|---|---|
| `Develop` | every change starts here; = staging | pull requests |
| `Production` | the live site | only the **Promote** workflow |

## Workflows (`.github/workflows/`)
| Workflow | Runs | Does |
|---|---|---|
| Deploy to Staging | every push to `Develop`, or by hand | every `scripts/check-*` + mirror check, then FTP staging (if configured) + GitHub Pages `/staging/` |
| Promote staging → production | by hand only — the release check | fast-forwards `Production` to `Develop`, then FTP production + Pages |
| Deploy production (emergency) | by hand only | re-deploys current `Production` without promoting |
| Publish to GitHub Pages / Upload to FTP | called by the three above | build + publish one Pages site · FTP upload (skips until secrets exist) |

Promote refuses to run if `Production` has commits `Develop` lacks —
merge it into `Develop` first. Production never silently loses a commit.

## Hosting
| Address | What |
|---|---|
| `https://tancookjr-ops.github.io/Wishing-stones/` | production |
| `https://tancookjr-ops.github.io/Wishing-stones/staging/` | staging — sandboxed: own storage keys, "STAGING" badge |

## One-time owner setup
1. **Pages source → GitHub Actions:** `https://github.com/tancookjr-ops/Wishing-stones/settings/pages`
   (do this BEFORE the first merge, or the first deploy fails).
2. If a deploy says "branch is not allowed to deploy": `https://github.com/tancookjr-ops/Wishing-stones/settings/environments`
   → `github-pages` → allow `Develop`.
3. **Dependabot:** `https://github.com/tancookjr-ops/Wishing-stones/settings/security_analysis` → Dependabot version updates.
4. Later, FTP: add the secrets in `_shared/secrets.md`. No other change needed.

## Shipping to installed devices
Installed copies only notice a new version when the service-worker version
(``) changes. Bump it in the staging step of a release.
