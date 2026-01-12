import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

// Themes
import { lightTheme, darkTheme, GlobalStyles } from './components/Themes/Themes';

// Components
import Customcursor from "./components/CustomCursor/customcursor";
import Nav from "./components/Nav/Nav";

// Pages
import About from "./pages/About/About";
import Composition from "./pages/COMPOSITION/Composition";
import Dwelling from "./pages/Dwelling/Dwelling";
import Graffiti from "./pages/3d/MergedGraffiti"; 
import LandingPage from "./pages/Landing_Page/LandingPage";
import Photography from "./pages/Photography/Photography";

// Combined Artworks Page
import Artworks from "./pages/Printmaking/Artworks";

// Intro Animation
import IntroAnimation from "./pages/Intro_Animation/IntroAnimation";

// Assets removed - no theme toggle needed

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Router>
          <Customcursor />
          <Nav theme={theme} />
        
        <Routes>
          {/* Root shows IntroAnimation first */}
          <Route path="/" element={<IntroAnimation />} />
          
          {/* Landing page */}
          <Route path="/home" element={<LandingPage />} />
          
          {/* Art pages */}
          <Route path="/about" element={<About />} />
          <Route path="/3d" element={<Graffiti />} />
          <Route path="/composition" element={<Composition />} />
          <Route path="/dwelling" element={<Dwelling />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/printmaking" element={<Artworks />} />
          
          {/* Fallback for unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  </ThemeProvider>
  );
}

export default App;