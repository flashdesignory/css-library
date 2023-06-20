# 02 - Add Files

This step will add the source files for the tutorial, which will allow us to focus on publishing the css-library.
The example files are representing the structure and styles for a modified `todomvc` app. 

## HTML

The `index.html` file represents different DOM states of the app, to be able to see different styles applied for a variety of scenarios. This file requests one single `partials.css` stylesheet, which in turn imports all single css files.

## CSS

The css folder contains styles separated by components. This is done for multiple reasons.

1. Readability
Using multiple files and breaking up one large css file will make it easier to follow along and find rules concerning a particular area. 

2. Separation of concerns
One stylesheet is only concerned of a particular component. For example the `header.css` file only contains styles that the `<header>` element needs. 

3. Output options
Using multiple stylesheets gives us flexibility in creating different variations for the output:

    - one single index.css file (appending all single files)
    - one single index.min.css file, which is minified
    - multiple css files (as it is in the source)
    - multiple css module files (`header.module.css`)

## JS

The js folder contains one single `index.js` file, which just imports all the separate css files.
This is used for our build step, to ensure all files are automatically detected and used for the generation of the `index.min.css` file. Besides that it doesn't serve any function. 

## Add a server (Optional)

Let's add a simple server to preview what we added. This is not a requirement, since you could simply double-click on the index.html file, but I think it is still useful, in case you'd like to add more functionality to the project down the road.

Let's install html-server:
```bash
npm install http-server --save-dev
```

Let's add our first script in the `package.json` file, by removing the "test" script and replacing it with:
```bash
"dev": "http-server ./ -p 7005 -c-1 --cors -o"
```

To see the server in action, let's run:
```bash
npm run dev
```

If everything went well, your default browser should open and show the index.html page.

## Add Stylelint (Optional)

This step will add linting for our css files. This has the benefit, that we can check if our output files are following a pre-defined set of rules and that all changes you might make to the css files are in line with these rules.
If you have the server running in your terminal, stop the server, before moving on.

Let's install stylelint:
```bash
npm install stylelint stylelint-config-standard --save-dev
```

Let's add a config file:
```bash
touch .stylelintrc.json
```

We will be adding a config file, which will use a baseline of lint rules and also disable some rules that I didn't need for our styles. Feel free to remove the rules object and adjust the css rules, if you rather want to opt into these rules. 

Open the newly created file and paste the following:
```json
{ 
    "extends": ["stylelint-config-standard"],
    "rules": {
        "alpha-value-notation": null,
        "color-function-notation": null,
        "value-keyword-case": null,
        "shorthand-property-no-redundant-values": null,
        "media-feature-range-notation": null,
        "media-feature-name-no-vendor-prefix": null
    }
}
```

Now we can add a script in our package.json file:
```bash
"lint": "stylelint \"src/css/*.css\""
```

Since we are adding another script, ensure you are adding a comma at the end of our `dev` script:
```bash
"dev": "http-server ./ -p 7005 -c-1 --cors -o",
"lint": "stylelint \"src/css/*.css\""
```

Now it's time to test our css files, by running the following command:
```bash
npm run lint
```

If all goes well and we didn't make any changes to our css files, this should be pretty uneventfull.
No warnings or errors in the console means that the linting passed and we can move on to the next step.

> **_NEXT:_**  [03 ADD ROLLUP](./03_ADD_ROLLUP.md)
