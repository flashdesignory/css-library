import css from "rollup-plugin-import-css";
import cleaner from "rollup-plugin-cleaner";
import copy from "rollup-plugin-copy-merge";

export default {
    input: "src/js/index.js",
    output: [
        {
            file: "dist/index.js",
            format: "es",
        }
    ],
    plugins: [
        cleaner({
            targets: ["./dist/"],
        }),
        css({
            minify: true,
            output: "dist/index.min.css",
        }),
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
    ],
};
