/* ============================================================
   ANALYTICS — Umami Cloud
   Cookieless, no personal data, no cookie banner required.
   To activate: paste the website ID from the Umami dashboard
   (Settings -> Websites -> your site) between the quotes below.
   While it is empty, no script is loaded and no requests are made.
   ============================================================ */

const UMAMI_WEBSITE_ID = "";

const UMAMI_SRC = "https://cloud.umami.is/script.js";
const UMAMI_DOMAINS = "strategyedge.com.au,www.strategyedge.com.au";
const ALLOWED_HOSTS = ["strategyedge.com.au", "www.strategyedge.com.au"];

type EventData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: { track: (event: string, data?: EventData) => unknown };
  }
}

let loaded = false;
let queue: Array<[string, EventData?]> = [];

export function initAnalytics() {
  if (!UMAMI_WEBSITE_ID || typeof document === "undefined") return;
  // Keep localhost, previews and any other host out of the stats.
  if (!ALLOWED_HOSTS.includes(window.location.hostname)) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = UMAMI_SRC;
  script.setAttribute("data-website-id", UMAMI_WEBSITE_ID);
  script.setAttribute("data-domains", UMAMI_DOMAINS);
  script.onload = () => {
    loaded = true;
    queue.forEach(([name, data]) => window.umami?.track(name, data));
    queue = [];
  };
  document.head.appendChild(script);
}

/** Record a custom event. Safe to call before the tracker has loaded. */
export function trackEvent(name: string, data?: EventData) {
  if (!UMAMI_WEBSITE_ID) return;
  if (loaded && window.umami) {
    window.umami.track(name, data);
  } else if (queue.length < 20) {
    queue.push([name, data]);
  }
}
