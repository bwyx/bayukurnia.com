/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ENV {
  readonly SITE_URL: string

  readonly CLOUDINARY_CLOUD_NAME: string
  readonly CLOUDINARY_FOLDER: string

  readonly SPOTIFY_CLIENT_ID: string
  readonly SPOTIFY_CLIENT_SECRET: string
  readonly SPOTIFY_REFRESH_TOKEN: string
}

interface ImportMeta {
  readonly env: ENV
}
