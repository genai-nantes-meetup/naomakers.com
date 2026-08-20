/**
 * Server-only: builds the PostHog "array loader" snippet as a literal
 * string, injected verbatim into the page head via `set:html`
 * (see `../components/Analytics.astro`). Never import this from client
 * code — it would ship the loader source as a dead string into the browser
 * bundle.
 *
 * The loader body below is copied from PostHog's own generator
 * (`docs/onboarding/product-analytics/_snippets/js-snippet-builder.ts` in
 * PostHog/posthog, `snippetFunctions()`), not from the PostHog dashboard:
 * the dashboard derives its stubbed-method list by reflecting over the
 * loaded SDK's prototype, which leaks minified, version-dependent names
 * (`os`, `ds`, `Qr`...). `SNIPPET_METHODS` below is PostHog's stable
 * `DEFAULT_SNIPPET_METHODS` constant instead. Those stubs only queue calls
 * made before `array.js` has loaded — this site only ever calls `capture`
 * (see `./analytics`).
 */

/**
 * Reverse proxy in front of PostHog Cloud US. Must forward `/static/*` and
 * `/array/*` to `us-assets.i.posthog.com`, everything else to
 * `us.i.posthog.com`: the loader's own `.replace(".i.posthog.com", …)`
 * heuristic is a no-op on a custom domain, so the SDK ends up fetched from
 * `${POSTHOG_API_HOST}/static/array.js` — verified to return 200.
 */
export const POSTHOG_API_HOST = 'https://hogpost.naomakers.com';

// `ui_host` points at the same proxy as `api_host` (decided explicitly):
// the managed proxy doesn't serve the PostHog app itself, so the in-app
// toolbar and "view this event" links from autocapture won't resolve.
// Ingestion is unaffected.
export const POSTHOG_UI_HOST = POSTHOG_API_HOST;

/** Pins the SDK's behaviour bundle so a future posthog-js release cannot
 * silently change what gets captured. */
const POSTHOG_DEFAULTS = '2026-05-30';

const SNIPPET_METHODS =
  'init capture register register_once register_for_session unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group identify setPersonProperties setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags resetGroups onFeatureFlags addFeatureFlagsHandler onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep';

/**
 * Serialise a value as a JS string literal for interpolation into the
 * snippet. `set:html` injects raw markup, so a stray "</script>" inside an
 * interpolated value would terminate the element early — the same defence
 * `BaseLayout.astro` applies to the JSON-LD block, but scoped to
 * interpolated *values* only: the loader body itself contains "<" as a
 * comparison operator (`n<o.length`), where `<` would not parse.
 */
const jsString = (value: string) =>
  JSON.stringify(value).replace(/</g, '\\u003c');

/** Build the full inline snippet for a given PostHog project token. */
export function buildPostHogSnippet(token: string): string {
  const loader = `!function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}p||((p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",p.onerror=function(){p=null},(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r));var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o=${jsString(SNIPPET_METHODS)}.split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);`;

  // `persistence: "cookie"` and `autocapture: true` were chosen explicitly
  // for this project; the trade-offs (cookie weight on every request,
  // CNIL exemption not met without a privacy notice) are documented in the
  // install plan, not repeated here.
  const init = `posthog.init(${jsString(token)},{api_host:${jsString(POSTHOG_API_HOST)},ui_host:${jsString(POSTHOG_UI_HOST)},defaults:${jsString(POSTHOG_DEFAULTS)},autocapture:true,persistence:"cookie"});posthog.register({site:"naomakers.com",environment:"production"});`;

  return loader + init;
}
