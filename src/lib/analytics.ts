/**
 * Framework-agnostic analytics wrapper.
 *
 * Application code must go through `capture()` and never touch
 * `window.posthog` directly: the client is only injected in production
 * builds (see `../components/Analytics.astro`) and is routinely blocked by
 * ad blockers, so every call site would otherwise need its own guard.
 *
 * Event naming convention: `object_action`, snake_case
 * (e.g. `project_card_clicked`), so related events sort together in the
 * PostHog UI.
 */

/** The only part of the PostHog client this site uses. Before `array.js`
 * has loaded, this is the array-loader stub, which just queues the call —
 * same signature, so callers don't need to know the difference. */
type PostHogClient = {
  capture: (event: string, properties?: Record<string, unknown>) => unknown;
};

declare global {
  interface Window {
    /** Injected by the PostHog snippet in `BaseLayout`'s head. Absent in
     * dev, in token-less CI builds, and behind ad blockers — hence
     * optional. */
    posthog?: PostHogClient;
  }
}

/** Property values PostHog serialises as-is. */
export type AnalyticsProperties = Record<
  string,
  string | number | boolean | null | undefined
>;

/**
 * Record a custom event. Never throws, never blocks: a missing or broken
 * client is a silent no-op. Analytics must not be able to break the page.
 */
export function capture(event: string, properties?: AnalyticsProperties): void {
  try {
    window.posthog?.capture(event, properties);
  } catch {
    // Intentionally swallowed — see module doc.
  }
}
