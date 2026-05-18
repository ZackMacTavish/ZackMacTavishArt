// Canonical URL helper for browser-routed pages
// usage: const canonical = canonicalFromLocation(useLocation());
export function canonicalFromLocation(location) {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://zackmactavish.com'
  const path = (location && location.pathname) ? location.pathname : '/'
  const search = (location && location.search) ? location.search : ''
  return `${origin}${path}${search}`
}
