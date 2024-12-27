import react from '@vitejs/plugin-react'
import postcssPresetEnv from 'postcss-preset-env'; // Optional for CSS features
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          // Enable CSS features to work on older browsers if needed
          stage: 3, // Supports most recent CSS features
        }),
      ],
    },
    // Optionally enable minification for production
    minify: 'esbuild', // Default minifier, fast and efficient for modern browsers
  },
  build: {
    target: 'esnext', // Make sure your app targets the latest versions for modern browsers
    // For production, ensure the CSS is optimized and minified
    cssCodeSplit: true, // Split CSS to improve caching
  },
  server: {
    // Configure Vite dev server (useful for testing responsiveness in different environments)
    open: true, // Automatically open the app in the browser
    port: 3000, // Customize the port if needed
  },
})
