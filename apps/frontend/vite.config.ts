/// <reference types="vite" />

import react from '@vitejs/plugin-react'
import { ViteUserConfig, defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()] as ViteUserConfig["plugins"],
  test: {
    environment: 'jsdom'
  }
})
