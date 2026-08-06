/** Canonical production origin — used for absolute canonical URLs,
 *  Open Graph URLs, the sitemap, and structured data. */
export const SITE_URL = "https://fitbeyondtherapy.com";

export const absoluteUrl = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;

/**
 * Contact info — centralized so it's a one-line change everywhere.
 * TODO: These are still placeholders. Replace with the real phone number
 * and email before launch, then every section/form picks it up automatically.
 */
export const PHONE_DISPLAY = "(931) 555-0100";
export const PHONE_TEL = "tel:+19315550100";
export const EMAIL_DISPLAY = "info@fitbeyondtherapy.com";
export const EMAIL_HREF = "mailto:info@fitbeyondtherapy.com";
export const ADDRESS_LINE1 = "449 W Lincoln St";
export const ADDRESS_LINE2 = "Tullahoma, TN 37388";
export const FBP_URL = "https://fitbeyondplus.com";
