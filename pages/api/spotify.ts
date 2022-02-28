import { getCurrentlyPlaying } from '~/lib/spotify'

import type { NextApiRequest, NextApiResponse } from 'next'

type Response =
  | { isPlaying: false }
  | {
      isPlaying: true
      title: string
      artists: string
      spotifyUrl: string
      cover: string
    }

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const { is_playing, ...data } = await getCurrentlyPlaying()

  if (!is_playing) return res.status(200).json({ isPlaying: false })

  res.status(200).json({
    isPlaying: true,
    title: data.item.name,
    artists: data.item.artists.map(({ name }: any) => name).join(', '),
    spotifyUrl: data.item.external_urls.spotify,
    cover: data.item.album.images.find(({ height }: any) => height === 64)?.url
  })
}

export default handler
