npm run build
cp build/index.html build/404.html
git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh-pages