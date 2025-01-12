#!/bin/bash

# Get the current branch name
current_branch=$(git symbolic-ref --short HEAD 2>/dev/null)

# Exit if the branch name cannot be determined (e.g., detached HEAD state)
if [ -z "$current_branch" ]; then
  echo "Error: Unable to determine the current branch. Please ensure you are on a branch."
  exit 1
fi

# Check if the branch exists in origin-apexcharts and perform subtree split and push
if git ls-remote --exit-code --heads origin-apexcharts "$current_branch" > /dev/null; then
  echo "Subtree split: packages/apexcharts -> origin-apexcharts/$current_branch"

  apexcharts_commit=$(git subtree split --prefix=packages/apexcharts HEAD)
  if [ $? -ne 0 ]; then
    echo "Error: Failed to split subtree for packages/apexcharts."
    exit 1
  fi

  git push origin-apexcharts "$apexcharts_commit:$current_branch" --force
  if [ $? -ne 0 ]; then
    echo "Error: Subtree push for packages/apexcharts failed."
    exit 1
  fi
else
  echo "Error: Branch '$current_branch' does not exist in origin-apexcharts."
  exit 1
fi

# Check if the branch exists in origin-react-apexcharts and perform subtree split and push
if git ls-remote --exit-code --heads origin-react-apexcharts "$current_branch" > /dev/null; then
  echo "Subtree split: packages/react-apexcharts -> origin-react-apexcharts/$current_branch"

  react_apexcharts_commit=$(git subtree split --prefix=packages/react-apexcharts HEAD)
  if [ $? -ne 0 ]; then
    echo "Error: Failed to split subtree for packages/react-apexcharts."
    exit 1
  fi

  git push origin-react-apexcharts "$react_apexcharts_commit:$current_branch" --force
  if [ $? -ne 0 ]; then
    echo "Error: Subtree push for packages/react-apexcharts failed."
    exit 1
  fi
else
  echo "Error: Branch '$current_branch' does not exist in origin-react-apexcharts."
  exit 1
fi

echo "Subtree split and push completed successfully."
