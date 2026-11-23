#!/usr/bin/env bash
# check-design-system.sh — the design system's own check (design-system/tools/check.mjs):
# every card, component and local reference resolves. Needs only Node (no npm install).
# Runs in the staging gate; must print "0 errors".
set -euo pipefail
cd "$(dirname "$0")/../design-system/tools"
out="$(node check.mjs)"; echo "$out" | tail -3
echo "$out" | grep -q '^0 errors' || { echo "✖ design-system check reported errors" >&2; exit 1; }
