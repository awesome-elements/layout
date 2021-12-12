echo "New version: "
echo "[<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]"
read NEW_VERSION
npm version $NEW_VERSION
npm publish

CORE_PROJECT_VERSION=$(npm -s run env echo '$npm_package_version')
CORE_PROJECT_PATH=$(pwd)
REACT_PROJECT_PATH=./packages/react

cd $REACT_PROJECT_PATH
if npm i --save-exact @awesome-elements/layout@$CORE_PROJECT_VERSION ; then
    npm version $CORE_PROJECT_VERSION
    git add package*.json
    git commit -m "react package updated to $CORE_PROJECT_VERSION"
    npm publish
else
    echo "Failed to fetch the new version of core package."
fi
