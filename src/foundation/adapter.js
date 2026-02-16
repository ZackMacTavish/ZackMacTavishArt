// Adapter for integrating with @zackmactavish/foundation when available,
// while providing safe fallbacks to local implementations.
import * as Foundation from '@zackmactavish/foundation'
import SEOFallback from '../components/SEO/SEO.jsx'

// Export a common SEO component
export const Seo = Foundation['Seo'] || Foundation['SEO'] || Foundation['Meta'] || SEOFallback

// Themes: prefer foundation tokens if present
export const lightThemeFromFoundation = Foundation['lightTheme'] || Foundation['LightTheme'] || null
export const darkThemeFromFoundation = Foundation['darkTheme'] || Foundation['DarkTheme'] || null
export const GlobalStylesFromFoundation = Foundation['GlobalStyles'] || Foundation['globalStyles'] || null

// Optional custom cursor from foundation
export const CustomCursorFromFoundation = Foundation['CustomCursor'] || Foundation['Cursor'] || null

// Helper to read site defaults if provided by foundation
export const siteDefaults = Foundation['siteDefaults'] || {}
