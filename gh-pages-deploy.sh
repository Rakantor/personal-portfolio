#!/usr/bin/env sh

# abort on errors
set -e

# build
npx nuxi generate

# navigate into the build output directory
cd .output/public
touch .nojekyll

# if you are deploying to a custom domain
echo 'mave.dev' > CNAME

git init
git add -A
git config --local user.email "rakantor.dev@gmail.com"
git config --local user.name "Rakantor"
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Rakantor/personal-portfolio.git master:gh-pages

cd -