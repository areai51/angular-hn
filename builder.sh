#!/bin/bash
PATH=$PATH:$(npm bin)
set -x

# Building Prod
ng build --prod


# Copy the basic service worker file
cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

# Serve Prod version
cd dist
http-server