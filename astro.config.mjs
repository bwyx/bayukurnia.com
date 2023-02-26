import { defineConfig } from 'astro/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({ mode: 'advanced' }),
  integrations: [react(), mdx()],
  vite: {
    plugins: [vanillaExtractPlugin()]
  }
})
