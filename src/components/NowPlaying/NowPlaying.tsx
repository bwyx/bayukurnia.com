import { createResource, onMount, onCleanup, Show } from 'solid-js'
import { isServer } from 'solid-js/web'

import SpotifyLogo from '~/components/vectors/SpotifyLogo'

import styles from './NowPlaying.css'

import type { NowPlayingResponse, MusicPlaying } from '~/types/spotify.type'

const getCurrentlyPlaying = () =>
  fetch('/api/now-playing').then<NowPlayingResponse>((res) => res.json())

const Bars = () => (
  <div class={styles.bars}>
    <span class={styles.barItem} />
    <span class={styles.barItem} />
    <span class={styles.barItem} />
    <span class={styles.barItem} />
  </div>
)

const Placeholder = (props: { loading: boolean }) => (
  <div class={styles.inner}>
    <div class={styles.player}>
      <div class={styles.cover}>
        <SpotifyLogo />
      </div>
      <div class={styles.details}>
        <p class={styles.title}>Spotify</p>
        <span class={styles.artists}>
          {props.loading ? 'Loading...' : 'Not Playing'}
        </span>
      </div>
    </div>
  </div>
)

export default function () {
  const [music, { refetch }] = createResource(getCurrentlyPlaying)
  const musicPlaying = music as () => MusicPlaying

  if (!isServer) {
    const focusThrottleInterval = 5_000
    const refreshInterval = 30_000

    let polling: ReturnType<typeof setTimeout>
    let lastFetchedOn = Date.now()

    const checkShouldRefetch = (delta: number) => {
      const now = Date.now()

      if (now >= lastFetchedOn + delta) {
        lastFetchedOn = now
        refetch()
      }
    }

    const handleIntervalFetch = () => checkShouldRefetch(refreshInterval)
    const handleFocusFetch = () => checkShouldRefetch(focusThrottleInterval)

    onMount(() => {
      polling = setInterval(handleIntervalFetch, refreshInterval)
      window.addEventListener('focus', handleFocusFetch)
    })

    onCleanup(() => {
      clearInterval(polling)
      window.removeEventListener('focus', handleFocusFetch)
    })
  }

  return (
    <Show
      when={music()?.isPlaying}
      fallback={<Placeholder loading={music.loading} />}
    >
      <a
        href={musicPlaying().spotifyUrl}
        class={styles.inner}
        target="_blank"
        rel="noreferrer"
      >
        <div class={styles.player}>
          <div class={styles.cover}>
            <img
              src={musicPlaying().cover}
              srcSet={musicPlaying().srcset}
              alt={`[${musicPlaying().title}] Cover Album`}
              height={42}
              width={42}
            />
          </div>
          <div class={styles.details}>
            <p class={styles.title}>{musicPlaying().title}</p>
            <span class={`${styles.artists} artists`}>
              {musicPlaying().artists}
            </span>
            <span class={`${styles.artists} play`}>Play on Spotify</span>
          </div>
        </div>
        <Bars />
      </a>
    </Show>
  )
}
