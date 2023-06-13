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
