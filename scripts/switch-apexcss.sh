#!/usr/bin/env bash

MODE=$1

# 치환할 파일 경로
TARGET_FILE="packages/apexcharts/src/apexcharts.js"

if [ "$MODE" = "ref" ]; then
  echo "Switching apexcharts.css -> apexcharts.css?inline"
  npx replace-in-file \
    "import apexCSS from './assets/apexcharts.css'" \
    "import apexCSS from './assets/apexcharts.css?inline'" \
    $TARGET_FILE
elif [ "$MODE" = "build" ]; then
  echo "Switching apexcharts.css?inline -> apexcharts.css"
  npx replace-in-file \
    "import apexCSS from './assets/apexcharts.css?inline'" \
    "import apexCSS from './assets/apexcharts.css'" \
    $TARGET_FILE
else
  echo "Usage: $0 [ref|build]"
  exit 1
fi
