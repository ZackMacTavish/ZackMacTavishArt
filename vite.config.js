import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // <-- set this to root because of custom domain
  build: {
    // three.js minified is ~600 KB on its own; we lazy-load it on /about only.
    // Raise the warning floor so the build log isn't noisy about chunks we
    // already deferred off the critical path.
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          // Split three.js core into its own long-lived chunk so updates to
          // @react-three/fiber don't bust the much larger three cache.
          if (id.includes('/node_modules/three/')) return 'three';
          if (id.includes('/node_modules/@react-three/')) return 'react-three';
          // GSAP plugins are already dynamically imported in
          // ProjectCarousel.jsx, but pin the core chunk for clarity.
          if (id.includes('/node_modules/gsap/')) return 'gsap';
          // React + styled-components are used everywhere; let Rollup keep
          // them in the main entry rather than splitting.
          return undefined;
        },
      },
    },
  },
})
