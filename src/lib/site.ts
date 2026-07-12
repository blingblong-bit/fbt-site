/** Canonical production origin — used for absolute canonical URLs,
 *  Open Graph URLs, the sitemap, and structured data. */
export const SITE_URL = "https://fitbeyondtherapy.com";

export const absoluteUrl = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;
