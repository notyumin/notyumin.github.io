# Build and push to gh-pages

STATUS="$(git status)"

if [[ $STATUS == *"nothing to commit, working tree clean"* ]]; then
  rm out/ -rf
  npm run build   # build using next
  git add out/ -f # force add public/ (cuz it's ignored)
  git commit -m "Commit to deploy"
  git push origin $(git subtree split --prefix out main):gh-pages --force
  git reset HEAD~
else
  echo "Need clean working directory to publish"
fi
