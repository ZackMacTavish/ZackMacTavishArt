# AI agent instructions for ZackMacTavishArt

This repo is a React + Vite single-page app for an art/portfolio site. It uses styled-components for theming/layout, react-router based hash routing for GitHub Pages, and selectively @react-three/fiber/drei for 3D visuals.

## Architecture & key modules
- Entry: `index.html` loads `src/main.jsx` which renders `src/App.jsx`.
- Routing: `HashRouter` in `src/App.jsx` defines routes (`/`, `/home`, `/about`, `/3d`, `/composition`, `/dwelling`, `/photography`, `/printmaking`). Unknown paths navigate to `/`.
- Theming: `styled-components` ThemeProvider with `lightTheme`/`darkTheme` and `GlobalStyles` in `src/components/Themes/Themes.jsx`. Theme variable names: `backgroundColor`, `backgroundTwo`, `fontColor`.
- Page pattern: Each page under `src/pages/**` typically:
  - Exports styled-components used across pages (e.g., `ArtSectionthreeog`, `Orbital`, `ArtText*` from `COMPOSITION/Composition.jsx`; `TwoImageGrid`/`ThreeImageGrid` from `Dwelling/Dwelling.jsx`; text sections from `Printmaking/Artworks.jsx`).
  - Calls `useLayoutEffect(() => window.scrollTo(0,0))` to reset scroll on navigation.
  - Renders large image sections using responsive inline styles (`objectFit`, `objectPosition`) when needed.
- 3D/graphics:
  - Intro overlay animation in `src/pages/Intro_Animation/IntroAnimation.jsx` uses `@react-three/fiber` and `@react-three/drei` (`Canvas`, `Float`, `OrbitControls`, `useGLTF`). Loads glTF from `public/models/scene.glb` via `import.meta.env.BASE_URL + 'models/...'`.
  - A standalone Three.js component in `src/components/Three/three.jsx` demonstrates a textured, animated plane with `useFrame`/`useLoader`.

## Conventions & patterns to follow
- Use hash-based routing (`HashRouter`) to support GitHub Pages; add new routes in `src/App.jsx`. Don’t switch to `BrowserRouter` unless deployment strategy changes.
- Reuse shared layout styled-components exported by pages instead of duplicating CSS. Examples:
  - Composition page exports `ArtSectionthreeog`, `Orbital`, `ArtText/ArtTexttwo/ArtTextthree`, `FullBg`, `GridRowTwo/Three`.
  - Dwelling page exports `TwoImageGrid` and `ThreeImageGrid` for responsive image grids.
  - Printmaking page exports `FullHeightTextSection`, `TextContainer`, `TextContent` for centered copy blocks.
- Page components typically import shared components directly from other pages (cross-page imports are normal here) to keep styling consistent site-wide.
- Asset usage:
  - Import images from `src/assets/` with relative or `/src/...` absolute paths (Vite handles both).
  - For public assets (e.g., GLTFs under `public/models/`), build paths with `import.meta.env.BASE_URL` to maintain correctness across dev/build/deploy.
- 3D canvas overlays (e.g., intro) set `pointerEvents: 'none'` and absolute positioning so they don’t block page interactions.
- Theme tokens: reference `props.theme.backgroundTwo` for white/section backgrounds and `props.theme.fontColor` for text; apply `GlobalStyles` once at app root.

## Workflows (dev, build, deploy, lint)
- Dev server: `npm run dev` (Vite).
- Build: `npm run build` → outputs to `dist/`.
- Preview build locally: `npm run preview`.
- Lint: `npm run lint` (config in `eslint.config.js`; `dist/` ignored).
- Deploy to GitHub Pages: `npm run predeploy` (builds and writes `dist/CNAME` with `zackmactavish.com`), then `npm run deploy` (publishes `dist` via `gh-pages`). Vite `base` is `/` and routing uses hashes, matching static hosting.

## Integration notes
- External deps in use: `react` 19, `react-router-dom` 7, `styled-components` 6, `@react-three/fiber` 9, `@react-three/drei`, `three` 0.179. The package `@zackmactavish/foundation` is listed but not referenced in the codebase at present.
- ESLint: extends `@eslint/js` recommended, React Hooks latest, React Refresh for Vite. Rule tweak: allow unused uppercase vars via `varsIgnorePattern: '^[A-Z_]'`.

## When adding features
- New page: scaffold under `src/pages/...`, import shared styled-components as needed, add a route in `src/App.jsx`, and include `useLayoutEffect` for scroll reset.
- New image sections: prefer `TwoImageGrid`/`ThreeImageGrid` for consistency and mobile behavior.
- New 3D scenes: follow the `Intro_Animation` pattern for GLTF loading and overlay; if embedding within content, consider the `components/Three/three.jsx` approach and mind z-index/pointer events.

Key files to reference: `src/App.jsx`, `src/components/Themes/Themes.jsx`, `src/pages/COMPOSITION/Composition.jsx`, `src/pages/Dwelling/Dwelling.jsx`, `src/pages/Printmaking/Artworks.jsx`, `src/pages/Intro_Animation/IntroAnimation.jsx`, `src/components/Three/three.jsx`, `package.json`, `vite.config.js`, `eslint.config.js`.
