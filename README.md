# CSS Library

A shareable and reusable css library.

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
