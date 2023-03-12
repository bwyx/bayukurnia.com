export type NowPlayingResponse = { isPlaying: false } | MusicPlaying

export interface MusicPlaying {
  isPlaying: true
  title: string
  artists: string
  spotifyUrl: string
  cover: string
  srcset: string
}
