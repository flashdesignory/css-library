# 06 - Publish NPM

We are almost done. We have a css library that we can share locally, let's make it publicly available for easier distribution. NPM is a great place to start!

## Install Semver and add publish scripts

This packge will help us to introduce versioning for our published packages.

1. install the package:
```bash
npm install --save-dev semver
```

2. add scripts to the `package.json` file:
```bash
"release:major": "npm run build && npm version $(semver $npm_package_version -i major) && npm publish --tag latest && git push",
"release:minor": "npm run build && npm version $(semver $npm_package_version -i minor) && npm publish --tag latest && git push",
"release:patch": "npm run build && npm version $(semver $npm_package_version -i patch) && npm publish --tag latest && git push"
```

Again, let's make sure we added a comma before the last script. 
The scripts section should look like this:
```bash
"dev": "http-server ./ -p 7005 -c-1 --cors -o",
"lint": "stylelint \"src/css/*.css\"",
"build": "rollup -c --bundleConfigAsCjs",
"release:major": "npm run build && npm version $(semver $npm_package_version -i major) && npm publish --tag latest && git push",
"release:minor": "npm run build && npm version $(semver $npm_package_version -i minor) && npm publish --tag latest && git push",
"release:patch": "npm run build && npm version $(semver $npm_package_version -i patch) && npm publish --tag latest && git push"
```

Now we have three different scripts available to publish to npm: `major, minor, patch`. 
The scripts do a few things:

1. run the build command to ensure we have all changes built in the `dist` directory.
2. increase the version, depending on the release type (this changes the version value in teh package.json file)
3. publish the files to npm
4. push the latest files to Github.

## Choose which files to publish to npm

Our Github repo contains all our files needed: source files, development / build setup as well as the actual output files. 
We don't need to publish all these files to npm, since the consuming app is just concerned about the `dist` files. 

Let's add a `files` key to our `package.json`:
```bash
"files": [
    "/dist"
]
```

With this set up in our package.json, only the following files / folders will be published:

- package.json
- README.md
- dist/

## Publish to npm

Prerequisite: This step assumes you have a npm account set up already. 

Chose one of the `release` scripts, for example to publish a major version:
```bash
npm run release:major
```

For detailed instructions, please refer to the documents [here](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry).