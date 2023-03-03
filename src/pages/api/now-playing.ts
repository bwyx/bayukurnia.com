import { getCurrentlyPlaying } from '~/lib/spotify'
import { CloudinaryImage } from '@cloudinary/url-gen'
import { fill } from '@cloudinary/url-gen/actions/resize'

import type { APIRoute } from 'astro'
import type { NowPlayingResponse } from '~/types/spotify.type'

export const get: APIRoute = async () => {
  const music = await getCurrentlyPlaying()
  const cloudName = import.meta.env.CLOUDINARY_CLOUD_NAME

  let data: NowPlayingResponse

  if (!music || !music.item || !music.is_playing) {
    data = { isPlaying: false }
  } else {
    const cover = music.item.album.images.find(
      ({ height }: any) => height === 300
    )?.url

    const srcset = [1, 2]
      .map((dpr) => {
        const src = new CloudinaryImage(cover, { cloudName })
          .setDeliveryType('fetch')
          .format('auto')
          .quality(75)
          .resize(fill(42 * dpr, 42 * dpr))
          .toURL()

        return `${src} ${dpr}x`
      })
      .join(', ')

    data = {
      isPlaying: true,
      title: music.item.name,
      artists: music.item.artists.map(({ name }: any) => name).join(', '),
      spotifyUrl: music.item.external_urls.spotify,
      cover,
      srcset
    }
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
