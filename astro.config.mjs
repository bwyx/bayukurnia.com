import { defineConfig } from 'astro/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'
import solid from '@astrojs/solid-js'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'

import gruvbox from './gruvbox-material-dark.json'

// https://astro.build/config
export default defineConfig({
  site: 'https://bayukurnia.com',
  output: 'server',
  adapter: cloudflare({ mode: 'advanced' }),
  integrations: [mdx(), sitemap(), solid(), react()],
  build: { assets: '_' },
  markdown: {
    shikiConfig: {
      theme: gruvbox
    }
  },
  vite: {
    plugins: [vanillaExtractPlugin()]
  }
})
