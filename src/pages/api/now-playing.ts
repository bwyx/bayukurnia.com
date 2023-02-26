import { getCurrentlyPlaying } from '~/lib/spotify'

import type { APIRoute } from 'astro'
import type { NowPlayingResponse } from '~/types/spotify.type'

export const get: APIRoute = async () => {
  // cloudflare ENVs have to be inlined inside this get() function
  // https://docs.astro.build/en/guides/integrations-guide/cloudflare/#environment-variables
  const clientId = import.meta.env.SPOTIFY_CLIENT_ID
  const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET
  const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN

  const music = await getCurrentlyPlaying({
    clientId,
    clientSecret,
    refreshToken
  })

  let data: NowPlayingResponse

  if (!music || !music.item || !music.is_playing) {
    data = { isPlaying: false }
  } else {
    data = {
      isPlaying: true,
      title: music.item.name,
      artists: music.item.artists.map(({ name }: any) => name).join(', '),
      spotifyUrl: music.item.external_urls.spotify,
      cover: music.item.album.images.find(({ height }: any) => height === 64)
        ?.url
    }
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
