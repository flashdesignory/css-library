# 05 - Add Readme

## Local testing

Now that we have output files to use, we can test locally.

1. Install this "package" with a file path.
This example shows you how to target this package if the consuming app is in the same parent directory as this package:
```bash
npm install ../css-library
```

2. Using npm link:
Follow the instructions (here)[https://docs.npmjs.com/cli/v9/commands/npm-link]

## Readme file:
Time to add some instructions on how we can use the output files.
Let's add content to our `README.md` file:
````
## How to use

This package allows you to use the stylesheets in various ways, either by including the complete rules (index.css, index.min.css) in a link tag, or by importing partial css / css module files in your code.

install the package

```bash
npm install css-library
```

including the styles in html with a link tag

```html
<link href="css-library/dist/index.min.css" rel="stylesheet" />
```

importing the styles in JavaScript:

```javascript
import "css-library/dist/global.css";
```

importing a css module in React:

```javascript
import styles from "css-library/dist/footer.module.css";

export default function Footer() {
    return <footer className={styles.footer}></footer>;
}
```
````

> **_NEXT:_**  [06 PUBLISH TO NPM](./06_PUBLISH_NPM.md)
