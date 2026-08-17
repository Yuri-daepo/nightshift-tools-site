import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";

const output = new URL("../pages-dist/", import.meta.url);
const supportOutput = new URL("support/", output);

await mkdir(supportOutput, { recursive: true });

const css = (await readFile(new URL("../app/globals.css", import.meta.url), "utf8"))
  .replace(/^@import "tailwindcss";\r?\n\r?\n/, "");

await Promise.all([
  copyFile(new URL("../static-site/index.html", import.meta.url), new URL("index.html", output)),
  copyFile(new URL("../static-site/support/index.html", import.meta.url), new URL("index.html", supportOutput)),
  copyFile(new URL("../public/favicon.svg", import.meta.url), new URL("favicon.svg", output)),
  copyFile(new URL("../public/og.png", import.meta.url), new URL("og.png", output)),
  copyFile(
    new URL("../public/nightshift-tools-promo.png", import.meta.url),
    new URL("nightshift-tools-promo.png", output),
  ),
  writeFile(new URL("styles.css", output), css),
  writeFile(new URL(".nojekyll", output), ""),
]);

console.log("GitHub Pages artifact created in pages-dist/");
