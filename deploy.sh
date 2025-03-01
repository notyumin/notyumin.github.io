# Build and push to gh-pages

STATUS="$(git status)"

if [[ $STATUS == *"nothing to commit, working tree clean"* ]]; then
  rm -rf out/
  npm run build       # build using next
  touch out/.nojekyll # add .nojekyll so _next/ can be pushed
  git add out/ -f     # force add public/ (cuz it's ignored)
  git commit -m "Commit to deploy"
  git push origin $(git subtree split --prefix out main):gh-pages --force
  git reset HEAD~
else
  echo "Need clean working directory to publish"
fi
