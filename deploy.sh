#!/usr/bin/env sh

set -e

pnpm build

cd dist

git init

git add -A
git commit -m 'deploy'
git push -f https://github.com/adlkt/adlkt.github.io.git main