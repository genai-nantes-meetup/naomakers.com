/**
 * Shared identifiers for the site's JSON-LD graph. Centralised so every
 * `@id` reference (organization, website, page, people, projects) is built
 * from the same base and stays consistent across `BaseLayout` and the page
 * that emits its own nodes.
 */
export const SITE = 'https://naomakers.com';
export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;
export const WEBPAGE_ID = `${SITE}/#webpage`;

/** Stable `@id` for a bureau member, built from their slug (not their name,
 * which could be re-spelled without the identifier changing). */
export const personId = (slug: string) => `${SITE}/#person-${slug}`;

/** Stable `@id` for a project's `EventSeries` node. */
export const projectId = (slug: string) => `${SITE}/#project-${slug}`;
