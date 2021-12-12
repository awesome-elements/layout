echo "New version: "
echo "[<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]"
read NEW_VERSION
npm version $NEW_VERSION
npm publish

CORE_PROJECT_VERSION=$(npm -s run env echo '$npm_package_version')
CORE_PROJECT_PATH=$(pwd)
REACT_PROJECT_PATH=./packages/react

cd $REACT_PROJECT_PATH
npm i --save-exact awesome-layout@$CORE_PROJECT_VERSION
npm version $CORE_PROJECT_VERSION
git commit -m "react package updated to $CORE_PROJECT_VERSION"
npm publish
