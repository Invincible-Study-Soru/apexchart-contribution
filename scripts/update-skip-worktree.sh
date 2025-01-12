#!/bin/bash

# Function to update worktree settings
update_tracking() {
  local main_dir=$1
  shift
  local dirs_to_track=("$@")

  echo "Setting --skip-worktree for $main_dir..."
  git update-index --skip-worktree "$main_dir"

  for dir in "${dirs_to_track[@]}"; do
    echo "Setting --no-skip-worktree for $dir..."
    git update-index --no-skip-worktree "$dir"
  done

  echo "Tracking changes for: ${dirs_to_track[*]}"
}

# Update tracking for packages/apexcharts
if [ -d "packages/apexcharts" ]; then
  update_tracking "packages/apexcharts" \
    "packages/apexcharts/src" \
    "packages/apexcharts/test" \
    "packages/apexcharts/types"
else
  echo "Warning: Directory packages/apexcharts does not exist. Skipping."
fi

# Update tracking for packages/react-apexcharts
if [ -d "packages/react-apexcharts" ]; then
  update_tracking "packages/react-apexcharts" \
    "packages/react-apexcharts/src" \
    "packages/react-apexcharts/types"
else
  echo "Warning: Directory packages/react-apexcharts does not exist. Skipping."
fi

echo "Completed setting worktree tracking."
