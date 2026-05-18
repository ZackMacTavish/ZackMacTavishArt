import React, { Suspense, lazy, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import './App.css';

// Themes
import { GlobalStyles, lightTheme, darkTheme, CustomCursor, tokens } from '@zackmactavish/foundation'

// Components
import Customcursor from "./components/CustomCursor/customcursor";
import Nav from "./components/Nav/Nav";

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

function AppRoutes({ theme }) {
  const location = useLocation();
  const [showNav, setShowNav] = useState(location.pathname !== "/");
  const Cursor = CustomCursor || Customcursor;

  useEffect(() => {
    setShowNav(location.pathname !== "/");
  }, [location.pathname]);

  return (
    <>
      <Cursor />
      <Nav theme={theme} hidden={!showNav} />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<IntroAnimation onIntroReady={() => setShowNav(true)} />} />
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