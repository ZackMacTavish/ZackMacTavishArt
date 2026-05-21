import React, { Suspense, lazy, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import './App.css';

// Themes
import { GlobalStyles, lightTheme, darkTheme, tokens } from '@zackmactavish/foundation'

// Components
const Nav = lazy(() => import("./components/Nav/Nav"));
const Customcursor = lazy(() => import("./components/CustomCursor/customcursor"));

// Pages
const About = lazy(() => import("./pages/About/About"));
const Composition = lazy(() => import("./pages/COMPOSITION/Composition"));
const Dwelling = lazy(() => import("./pages/Dwelling/Dwelling"));
const Graffiti = lazy(() => import("./pages/3d/MergedGraffiti"));
const Photography = lazy(() => import("./pages/Photography/Photography"));

// Combined Artworks Page
const Artworks = lazy(() => import("./pages/Printmaking/Artworks"));

// Intro Animation
const IntroAnimation = lazy(() => import("./pages/Intro_Animation/IntroAnimation"));
const LandingPage = lazy(() => import("./pages/Landing_Page/LandingPage"));

// Assets removed - no theme toggle needed

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

function AppRoutes({ theme }) {
  const location = useLocation();
  const [showNav, setShowNav] = useState(location.pathname !== "/");
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      setShowCustomCursor(false);
      return;
    }

    const mediaCoarse = window.matchMedia('(pointer: coarse)');
    const mediaReduce = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncCursorMode = () => {
      setShowCustomCursor(!mediaCoarse.matches && !mediaReduce.matches);
    };

    syncCursorMode();
    mediaCoarse.addEventListener('change', syncCursorMode);
    mediaReduce.addEventListener('change', syncCursorMode);

    return () => {
      mediaCoarse.removeEventListener('change', syncCursorMode);
      mediaReduce.removeEventListener('change', syncCursorMode);
    };
  }, []);

  useEffect(() => {
    setShowNav(location.pathname !== "/");
  }, [location.pathname]);

  return (
    <>
      {showCustomCursor ? (
        <Suspense fallback={null}>
          <Customcursor />
        </Suspense>
      ) : null}
      {showNav ? (
        <Suspense fallback={null}>
          <Nav theme={theme} hidden={!showNav} />
        </Suspense>
      ) : null}

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomeRoute onIntroReady={() => setShowNav(true)} />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/3d" element={<Graffiti />} />
          <Route path="/composition" element={<Composition />} />
          <Route path="/dwelling" element={<Dwelling />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/printmaking" element={<Artworks />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  const [theme, _setTheme] = useState("light");

  // Theme toggler (currently unused)
  // const themeToggler = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  const GS = GlobalStyles || GlobalStyles

  const lightOverrides = { ...lightTheme, backgroundColor: '#3F455C' }

  return (
    <ThemeProvider theme={theme === "light" ? { ...lightOverrides, tokens } : { ...darkTheme, tokens }}>
      <GS />
      <div className="App">
        <Router>
          <AppRoutes theme={theme} />
        </Router>
      {import.meta.env.DEV ? <DevAgentation /> : null}
    </div>
  </ThemeProvider>
  );
}

export default App;