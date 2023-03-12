import { defineConfig } from 'astro/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'
import solid from '@astrojs/solid-js'
import mdx from '@astrojs/mdx'

import gruvbox from './gruvbox-material-dark.json'

// https://astro.build/config
export default defineConfig({
  site: 'https://bayukurnia.com',
  output: 'server',
  adapter: cloudflare({ mode: 'advanced' }),
  integrations: [mdx(), sitemap(), solid()],
  build: { assets: '_' },
  markdown: {
    shikiConfig: {
      theme: gruvbox
    }
  },
  vite: {
    plugins: [vanillaExtractPlugin()],
    define: {
      'process.env.SPOTIFY_CLIENT_ID': JSON.stringify(
        process.env.SPOTIFY_CLIENT_ID
      ),
      'process.env.SPOTIFY_CLIENT_SECRET': JSON.stringify(
        process.env.SPOTIFY_CLIENT_SECRET
      ),
      'process.env.SPOTIFY_REFRESH_TOKEN': JSON.stringify(
        process.env.SPOTIFY_REFRESH_TOKEN
      ),
      'process.env.CLOUDINARY_CLOUD_NAME': JSON.stringify(
        process.env.CLOUDINARY_CLOUD_NAME
      ),
      'process.env.CLOUDINARY_FOLDER': JSON.stringify(
        process.env.CLOUDINARY_FOLDER
      )
    }
  }
})
