import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

/**
 * Renders the app to static markup at build time so the served document
 * carries the real copy and headings before any JavaScript runs.
 * The client hydrates onto this markup (see main.tsx).
 */
export function render(url = "/"): string {
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>
  );
}
