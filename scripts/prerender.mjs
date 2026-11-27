/**
 * Injects the server-rendered app markup into the built index.html so
 * crawlers, AI engines and no-JS visitors get the page copy without
 * executing any JavaScript. Runs after `vite build --ssr`.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const indexPath = path.join(root, "dist", "public", "index.html");
const ssrEntry = path.join(root, "dist", "ssr", "entry-server.js");

const { render } = await import(pathToFileURL(ssrEntry).href);
const markup = render("/");

if (!markup || markup.length < 1000) {
  throw new Error(`Prerender produced suspiciously little markup (${markup?.length ?? 0} chars)`);
}

const template = fs.readFileSync(indexPath, "utf-8");
const marker = '<div id="root"></div>';

if (!template.includes(marker)) {
  throw new Error(`Could not find ${marker} in ${indexPath}`);
}

fs.writeFileSync(indexPath, template.replace(marker, `<div id="root">${markup}</div>`), "utf-8");

const headings = (markup.match(/<h[1-3][\s>]/g) || []).length;
const text = markup.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
console.log(
  `prerendered ${markup.length.toLocaleString()} chars, ${headings} headings, ${text.length.toLocaleString()} chars of text into index.html`
);
