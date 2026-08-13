import React, { Suspense, lazy, useCallback, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import './App.css';
import Customcursor from "./components/CustomCursor/customcursor";
import Footer from "./components/Footer/Footer";

// Themes
import { GlobalStyles, lightTheme, darkTheme, tokens } from '@zackmactavish/foundation'

// Components
const Nav = lazy(() => import("./components/Nav/Nav"));

// Pages
const About = lazy(() => import("./pages/About/About"));
const Composition = lazy(() => import("./pages/COMPOSITION/Composition"));
const Dwelling = lazy(() => import("./pages/Dwelling/Dwelling"));
const Graffiti = lazy(() => import("./pages/3d/MergedGraffiti"));
const Photography = lazy(() => import("./pages/Photography/Photography"));
const CV = lazy(() => import("./pages/CV/CV"));

// Combined Artworks Page
const Artworks = lazy(() => import("./pages/Printmaking/Artworks"));

// Intro Animation
const IntroAnimation = lazy(() => import("./pages/Intro_Animation/IntroAnimation"));
const LandingPage = lazy(() => import("./pages/Landing_Page/LandingPage"));

const THEME_STORAGE_KEY = 'zackmactavish-theme';
const CURSOR_STORAGE_KEY = 'zackmactavish-cursor';

const RouteLoadingShell = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.pageBackground};
`;

const canUseCustomCursor = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return !window.matchMedia('(pointer: coarse)').matches;
};

const getInitialCustomCursorPreference = () => {
  if (typeof window === 'undefined') return true;

  const savedPreference = window.localStorage.getItem(CURSOR_STORAGE_KEY);
  if (savedPreference === 'custom') return true;
  if (savedPreference === 'native') return false;

  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const siteThemes = {
  light: {
    ...lightTheme,
    backgroundColor: '#f3f0e8',
    backgroundTwo: '#ffffff',
    surfacePrimary: '#ffffff',
    surfaceSecondary: '#f3f0e8',
    fontColor: '#5d5d5d',
    pageBackground: '#f3f0e8',
    pageText: '#181818',
    pageMuted: 'rgba(24, 24, 24, 0.68)',
    pageSubtle: 'rgba(24, 24, 24, 0.2)',
    uiSurface: 'rgba(243, 240, 232, 0.82)',
    uiSurfaceStrong: 'rgba(243, 240, 232, 0.96)',
    controlBackground: '#181818',
    controlText: '#f3f0e8',
    controlBorder: 'rgba(24, 24, 24, 0.2)',
    landingControlBackground: 'rgba(255, 255, 255, 0.78)',
    landingControlText: '#181818',
    landingControlBorder: 'rgba(24, 24, 24, 0.16)',
    narrativeBackground: '#ffffff',
    narrativeText: '#222222',
    artworkBackground: '#ffffff',
    artworkText: '#5d5d5d',
    iconFilter: 'brightness(0) saturate(100%)',
    tokens,
  },
  dark: {
    ...darkTheme,
    backgroundColor: '#1c1c1c',
    backgroundTwo: '#0a0a0a',
    surfacePrimary: '#0a0a0a',
    surfaceSecondary: '#1c1c1c',
    fontColor: '#5d5d5d',
    pageBackground: '#0a0a0a',
    pageText: '#f3f0e8',
    pageMuted: 'rgba(243, 240, 232, 0.68)',
    pageSubtle: 'rgba(243, 240, 232, 0.2)',
    uiSurface: 'rgba(10, 10, 10, 0.72)',
    uiSurfaceStrong: 'rgba(10, 10, 10, 0.96)',
    controlBackground: 'rgba(10, 10, 10, 0.82)',
    controlText: '#f3f0e8',
    controlBorder: 'rgba(243, 240, 232, 0.2)',
    landingControlBackground: 'rgba(10, 10, 10, 0.72)',
    landingControlText: '#f3f0e8',
    landingControlBorder: 'rgba(243, 240, 232, 0.2)',
    narrativeBackground: '#0a0a0a',
    narrativeText: '#f3f0e8',
    artworkBackground: '#ffffff',
    artworkText: '#5d5d5d',
    iconFilter: 'none',
    tokens,
  },
};

function DevAgentation() {
  const [AgentationComponent, setAgentationComponent] = useState(null);

  useEffect(() => {
    let isMounted = true;

    import("agentation").then((module) => {
      if (isMounted) {
        setAgentationComponent(() => module.Agentation);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return AgentationComponent ? <AgentationComponent /> : null;
}

function HomeRoute({ onIntroReady }) {
  const [skipIntro, setSkipIntro] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return undefined;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncSkipIntro = () => setSkipIntro(mediaQuery.matches);

    syncSkipIntro();
    mediaQuery.addEventListener('change', syncSkipIntro);

    return () => {
      mediaQuery.removeEventListener('change', syncSkipIntro);
    };
  }, []);

  useEffect(() => {
    if (skipIntro) {
      onIntroReady?.();
    }
  }, [skipIntro, onIntroReady]);

  if (skipIntro) {
    return <LandingPage showCarousel />;
  }

  return <IntroAnimation onIntroReady={onIntroReady} />;
}

function AppRoutes({ theme, onToggleTheme }) {
  const location = useLocation();
  const [showNav, setShowNav] = useState(location.pathname !== "/");
  const [customCursorAvailable, setCustomCursorAvailable] = useState(canUseCustomCursor);
  const [customCursorEnabled, setCustomCursorEnabled] = useState(getInitialCustomCursorPreference);
  const handleIntroReady = useCallback(() => setShowNav(true), []);
  const customCursorActive = customCursorAvailable && customCursorEnabled;

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      setCustomCursorAvailable(false);
      return;
    }

    const mediaCoarse = window.matchMedia('(pointer: coarse)');
    const syncCursorMode = () => {
      setCustomCursorAvailable(!mediaCoarse.matches);
    };

    syncCursorMode();
    mediaCoarse.addEventListener('change', syncCursorMode);

    return () => {
      mediaCoarse.removeEventListener('change', syncCursorMode);
    };
  }, []);

  useEffect(() => {
    const toggleCustomCursor = (event) => {
      const target = event.target;
      const isEditable = target instanceof HTMLElement
        && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));

      if (event.repeat || event.metaKey || event.ctrlKey || event.altKey || isEditable) return;
      if (event.key !== 'c' && event.key !== 'C') return;

      event.preventDefault();
      event.stopImmediatePropagation();
      if (document.activeElement instanceof HTMLElement && document.activeElement !== document.body) {
        document.activeElement.blur();
      }
      setCustomCursorEnabled((enabled) => {
        const nextEnabled = !enabled;
        window.localStorage.setItem(CURSOR_STORAGE_KEY, nextEnabled ? 'custom' : 'native');
        return nextEnabled;
      });
    };

    window.addEventListener('keydown', toggleCustomCursor, { capture: true });
    return () => window.removeEventListener('keydown', toggleCustomCursor, { capture: true });
  }, []);

  return (
    <>
      {customCursorActive ? (
        <Customcursor routeKey={location.key} />
      ) : null}
      {showNav ? (
        <Suspense fallback={null}>
          <Nav themeMode={theme} onToggleTheme={onToggleTheme} customCursorActive={customCursorActive} hidden={!showNav} />
        </Suspense>
      ) : null}

      <Suspense fallback={<RouteLoadingShell aria-hidden="true" />}>
        <Routes>
          <Route path="/" element={<HomeRoute onIntroReady={handleIntroReady} />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/3d" element={<Graffiti />} />
          <Route path="/composition" element={<Composition />} />
          <Route path="/dwelling" element={<Dwelling />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/printmaking" element={<Artworks />} />
          <Route path="/cv" element={<CV />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      {showNav ? <Footer /> : null}
    </>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [followsSystemTheme, setFollowsSystemTheme] = useState(() => {
    if (typeof window === 'undefined') return true;
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme !== 'light' && storedTheme !== 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    if (!followsSystemTheme) return undefined;

    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const syncSystemTheme = () => setTheme(colorScheme.matches ? 'dark' : 'light');

    syncSystemTheme();
    colorScheme.addEventListener('change', syncSystemTheme);
    return () => colorScheme.removeEventListener('change', syncSystemTheme);
  }, [followsSystemTheme]);

  const handleToggleTheme = useCallback(() => {
    setFollowsSystemTheme(false);
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      return nextTheme;
    });
  }, []);

  useEffect(() => {
    const toggleTheme = (event) => {
      const target = event.target;
      const isEditable = target instanceof HTMLElement
        && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));

      if (event.repeat || event.metaKey || event.ctrlKey || event.altKey || isEditable) return;
      if (event.key !== 'd' && event.key !== 'D') return;

      handleToggleTheme();
    };

    window.addEventListener('keydown', toggleTheme);
    return () => window.removeEventListener('keydown', toggleTheme);
  }, [handleToggleTheme]);

  const GS = GlobalStyles || GlobalStyles

  return (
    <ThemeProvider theme={siteThemes[theme]}>
      <GS />
      <div className="App">
        <Router>
          <AppRoutes theme={theme} onToggleTheme={handleToggleTheme} />
        </Router>
      {import.meta.env.DEV ? <DevAgentation /> : null}
    </div>
  </ThemeProvider>
  );
}

export default App;