import { defineConfig } from 'astro/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), mdx()],
  vite: {
    plugins: [vanillaExtractPlugin()]
  }
})
