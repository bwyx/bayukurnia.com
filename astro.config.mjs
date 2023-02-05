import { defineConfig } from 'astro/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [vanillaExtractPlugin()]
  }
})
