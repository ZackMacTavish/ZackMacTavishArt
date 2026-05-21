import React from 'react'             // <-- add this line
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootEl = document.getElementById('root')
// Clear any static skeleton painted from index.html before React mounts so we
// don't end up with duplicated content alongside the React tree.
const skeleton = document.getElementById('landing-skeleton')
if (skeleton && skeleton.parentNode) {
  skeleton.parentNode.removeChild(skeleton)
}

// Warm the LandingPage chunk in parallel with the rest of the initial JS
// when the user lands on `/`. The lazy() inside App.jsx will pick up the
// already-resolved module from the module cache.
if (typeof window !== 'undefined') {
  const path = window.location.pathname
  if (path === '/' || path === '') {
    import('./pages/Landing_Page/LandingPage')
  }
}

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
)