#!/bin/bash

ROOT_DIR="$(pwd)"

echo "Syncing apexcharts from upstream-apexcharts..."

# Merge changes from the main branch of upstream-apexcharts into packages/apexcharts
git subtree pull --prefix=packages/apexcharts upstream-apexcharts main --squash

echo "apexcharts synced."

echo "Syncing react-apexcharts from upstream-react-apexcharts..."

# Merge changes from the main branch of upstream-react-apexcharts into packages/react-apexcharts
git subtree pull --prefix=packages/react-apexcharts upstream-react-apexcharts master --squash

# Modify package.json
jq '.peerDependencies.apexcharts = "workspace:packages/apexcharts"' \
  packages/react-apexcharts/package.json > tmp.json && mv tmp.json packages/react-apexcharts/package.json

echo "react-apexcharts synced."

cd "$ROOT_DIR"
echo "All done."
