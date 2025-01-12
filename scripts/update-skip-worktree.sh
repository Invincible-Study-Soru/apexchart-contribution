#!/bin/bash

# Define directories and subdirectories to track
main_dirs=(
  "packages/apexcharts"
  "packages/react-apexcharts"
)

# Function to update worktree settings
update_tracking() {
  local main_dir=$1
  shift
  local dirs_to_track=($@)

  echo "Setting --skip-worktree for files in $main_dir (excluding node_modules)..."
  find "$main_dir" -type f ! -path "*/node_modules/*" -exec git update-index --skip-worktree {} \;

  for dir in "${dirs_to_track[@]}"; do
    if [ -d "$dir" ]; then
      echo "Setting --no-skip-worktree for files in $dir..."
      find "$dir" -type f ! -path "*/node_modules/*" -exec git update-index --no-skip-worktree {} \;
    else
      echo "Warning: Directory $dir does not exist. Skipping."
    fi
  done

  echo "Tracking changes for: ${dirs_to_track[*]}"
}

# Update tracking for each main directory
for main_dir in "${main_dirs[@]}"; do
  if [ "$main_dir" == "packages/apexcharts" ]; then
    update_tracking "$main_dir" \
      "packages/apexcharts/src" \
      "packages/apexcharts/tests" \
      "packages/apexcharts/types"
  elif [ "$main_dir" == "packages/react-apexcharts" ]; then
    update_tracking "$main_dir" \
      "packages/react-apexcharts/src" \
      "packages/react-apexcharts/types"
  else
    echo "Warning: Directory $main_dir does not exist. Skipping."
  fi
done

echo "Completed setting worktree tracking."
