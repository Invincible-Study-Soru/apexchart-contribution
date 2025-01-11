#!/bin/bash

ROOT_DIR="$(pwd)"

echo "Syncing apexcharts from upstream-apexcharts..."

# 1) Merge changes from the main branch of upstream-apexcharts into packages/apexcharts
git subtree pull --prefix=packages/apexcharts upstream-apexcharts main

# 2) Push the changes to the forked (origin) repository
git subtree push --prefix=packages/apexcharts origin-apexcharts main

echo "apexcharts synced."

echo "Syncing react-apexcharts from upstream-react-apexcharts..."

# 1) Merge changes from the main branch of upstream-react-apexcharts into packages/react-apexcharts
git subtree pull --prefix=packages/react-apexcharts upstream-react-apexcharts main

# 2) Push the changes to the forked (origin) repository
git subtree push --prefix=packages/react-apexcharts origin-react-apexcharts main

# 3) Modify package.json
jq '.peerDependencies.apexcharts = "workspace:packages/apexcharts"' \
  packages/react-apexcharts/package.json > tmp.json && mv tmp.json packages/react-apexcharts/package.json

echo "react-apexcharts synced."

cd "$ROOT_DIR"
echo "All done."
