git pull
npm run build
cp build/index.html build/404.html
git add build -f
git commit -m "adding build"
git subtree push -f --prefix build origin gh-pages