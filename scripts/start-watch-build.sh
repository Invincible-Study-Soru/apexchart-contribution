#!/bin/bash

concurrently \
  "yarn workspace apexcharts rollup -w -c build/config.js --environment TARGET:web-esm" \
  "yarn workspace react-apexcharts rollup -w -c rollup.config.js" \
  "yarn workspace react-deploy dev"

echo "All tasks started with concurrently."
