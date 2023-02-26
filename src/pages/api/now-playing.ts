import { getCurrentlyPlaying } from '~/lib/spotify'

import type { APIRoute } from 'astro'
import type { NowPlayingResponse } from '~/types/spotify.type'

export const get: APIRoute = async () => {
  const music = await getCurrentlyPlaying()

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
