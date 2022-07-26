#!/bin/sh
set -e
npm run build
bundle exec jekyll serve
