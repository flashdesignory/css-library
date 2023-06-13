# Add More Options

So far, we are able to build a single minified css file, which is nice, but doesn't give us flexibility yet. 
Ideally, we want to support several use-cases. Let's see how we can make it better!

## Maintenance / Clean directory

A handy addition to protecting us against our future selves would be to always start with a clean `dir` folder. An additional plugin can do this for us.

1. install the package:
```bash
npm install --save-dev rollup-plugin-cleaner
```

2. import the package in your `rollup.config.js` file:
```javascript
import cleaner from "rollup-plugin-cleaner";
```

3. add the plugin to the plugins array (before the css plugin):
```javascript
cleaner({
    targets: ["./dist/"],
}),
```

4. run the build script to ensure it completes without errors.

## More Output Options (setup and copy of existing css files)

This step will create more options in the `dist` directory. 
The first section below will install the package, import it in the `rollup.config.js` file, and simpliy copy over all css files to the `dist` folder.

1. install the package:
```bash
npm install --save-dev rollup-plugin-copy-merge
```

2. import the package in your `rollup.config.js` file:
```javascript
import copy from "rollup-plugin-copy-merge";
```

3. add the plugin to the plugins array (after the css plugin):
```javascript
copy({
    targets: [
        {
            src: ["src/css/*"],
            dest: "dist/",
        },
    ],
}),
```

4. run the build script to ensure it completes without errors.

## CSS Modules

We will re-use our existing css files from the `src` directory and create additional css modules.

If you skipped the previous step, ensure you are installing (previous step 1) and importing (previous step 2) the package.

Now we can adjust the options for the copy plugin:
```javascript
copy({
    targets: [
        {
            src: ["src/css/*"],
            dest: "dist/",
        },
        {
            src: ["src/css/*", "!src/css/partials.css", "!src/css/global.css"],
            dest: "dist/",
            rename: (name, extension) => `${name}.module.${extension}`,
        },
    ],
}),
```

Notice that we ommited two files: `partials.css` and `global.css`.
Our partials.css file was used for our `index.html` file and only contains imports. The global.css file contains general rules that should be applied globally. 

## Unminified index.css

The last thing missing is an unminified stylesheet that contains all rules.
The simplest way to accomplish this was to re-use the copy plugin again.
This also gives us the opportunity to tell the plugin in which order to combine the single css files.

If you skipped the previous step, ensure you are installing (previous step 1) and importing (previous step 2) the package.

Now we can adjust the options for the copy plugin:
```javascript
copy({
    targets: [
        {
            src: ["src/css/*"],
            dest: "dist/",
        },
        {
            src: ["src/css/*", "!src/css/partials.css", "!src/css/global.css"],
            dest: "dist/",
            rename: (name, extension) => `${name}.module.${extension}`,
        },
        {
            src: [
                "src/css/global.css",
                "src/css/header.css",
                "src/css/app.css",
                "src/css/topbar.css",
                "src/css/main.css",
                "src/css/todo-list.css",
                "src/css/todo-item.css",
                "src/css/bottombar.css",
                "src/css/footer.css",
            ],
            file: "dist/index.css",
        },
    ],
}),
```
