import useSWR from 'swr'

import SpotifyLogo from '~/components/vectors/SpotifyLogo'

import styles from './NowPlaying.css'

import type { NowPlayingResponse } from '~/types/spotify.type'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Bars = () => (
  <div className={styles.bars}>
    <span className={styles.barItem} />
    <span className={styles.barItem} />
    <span className={styles.barItem} />
    <span className={styles.barItem} />
  </div>
)

const NowPlaying = () => {
  const { data: music } = useSWR<NowPlayingResponse>(
    '/api/now-playing',
    fetcher
  )

  const Component = music?.isPlaying ? 'a' : 'div'

  return (
    <Component
      href={music?.isPlaying ? music.spotifyUrl : undefined}
      className={styles.inner}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.player}>
        <div className={styles.cover}>
          {music?.isPlaying ? (
            <img
              src={music.cover}
              alt={`[${music.title}] Cover Album`}
              height={42}
              width={42}
            />
          ) : (
            <SpotifyLogo />
          )}
        </div>
        <div className={styles.details}>
          <p className={styles.title}>
            {music?.isPlaying ? music.title : 'Spotify'}
          </p>
          {music?.isPlaying ? (
            <>
              <span className={`${styles.artists} artists`}>
                {music.artists}
              </span>
              <span className={`${styles.artists} play`}>Play on Spotify</span>
            </>
          ) : (
            <span className={styles.artists}>
              {music ? 'Not Playing' : 'Loading...'}
            </span>
          )}
        </div>
      </div>
      {music?.isPlaying ? <Bars /> : null}
    </Component>
  )
}

export default NowPlaying
