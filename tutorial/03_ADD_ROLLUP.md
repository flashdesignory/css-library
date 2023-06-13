# 03 - Add Rollup

Now it's time to work on our build step, which will generate our output files to distribute. There are a number of solutions available to accomblish this and I chose rollup for its simplicity. 

## Install rollup

This step will install rollup and a plugin to handle our css files:
```bash
npm install --save-dev rollup rollup-plugin-import-css
```

## Add a config file

Now we need to create a config file for rollup:
```bash
touch rollup.config.js
```

Once created, let's populate it with the following:
```javascript
import css from "rollup-plugin-import-css";

export default {
    input: "src/js/index.js",
    output: [
        {
            file: "dist/index.js",
            format: "es",
        }
    ],
    plugins: [
        css({
            minify: true,
            output: "dist/index.min.css",
        }),
    ],
};
```

## Add a build command

The last thing we need to test it out, is a script in the package.json file:
```bash
"build": "rollup -c --bundleConfigAsCjs"
```

Don't forget to add a comma after the `lint` script:
```bash
"dev": "http-server ./ -p 7005 -c-1 --cors -o",
"lint": "stylelint \"src/css/*.css\"",
"build": "rollup -c --bundleConfigAsCjs"
```

With this set up, let's try it out:
```bash
npm run build
```

Running this command will create a new `dist` directory, with an empty `index.js` file and one `index.min.css` file.

## Config explanation:
Notice, that the css file contains a lot of rules? Let's see what happened:

### input

The input key in our config points to the entry point of the files, which in our case is the index.js file with all the css import statements.

### output

The output key is our destination for the files created. The format of the file is not relevant, since we only care about the generated css files. 

### plugins: css

Rollup uses plugins to extend its functionality. The css plugin we added is responsible to combine and minify all imported css files that it found in the index.js file. We will create a separate un-minified index.css file later.
