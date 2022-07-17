import Image from 'next/image'
import useSWR from 'swr'

import SpotifyLogo from '~/components/vectors/SpotifyLogo'

import { css, keyframes } from '~/styles'
import { stack } from '~/styles/primitives'
import { rgb } from '~/styles/variables.css'
import text from '~/styles/sprinkles/text.css'

import type { NowPlayingResponse } from '~/types/spotify.type'

const bounceBar = keyframes({
  '0%': {
    transform: 'scaleY(0.5)'
  },
  '50%': {
    transform: 'scaleY(0.3)'
  },
  '80%': {
    transform: 'scaleY(0.8)'
  },
  '100%': {
    transform: 'scaleY(0.5)'
  }
})

const styles = {
  outer: css({
    position: 'relative',
    display: 'block',
    width: 'fit-content',
    '.play': { display: 'none', xColor: '$accent' },
    '&:hover': {
      '.artists': { display: 'none' },
      '.play': { display: 'block' }
    }
  })(),
  inner: `${stack({
    y: 'center',
    density: 'spaceBetween'
  })} ${css({
    inset: 0,
    position: 'absolute',
    pl: '$3',
    pr: '$4'
  })()}`,
  player: `${stack({
    y: 'center'
  })} ${css({
    gap: '$2'
  })()}`,
  cover: `${stack({
    y: 'center',
    x: 'center'
  })} ${css({
    xColor: '$fg1',
    xColorOpacity: 0.25,
    position: 'relative',
    width: 42,
    height: 42,
    display: 'inherit',
    borderRadius: 6,
    overflow: 'hidden',
    flexShrink: 0
  })()}`,
  details: stack({ dir: 'col' }),
  title: `${text({
    fontSize: 'sm',
    fontWeight: 'medium',
    lineHeight: 'snug'
  })} ${css({
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth: '15ch'
  })()}`,
  artists: `${text({
    fontSize: 'xs',
    lineHeight: 'snug'
  })} ${css({
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth: '18ch',
    xColor: '$fg3'
  })()}`,
  bars: `${stack({
    dir: 'row',
    y: 'center'
  })} ${css({
    gap: 1,
    span: {
      animation: `${bounceBar}`,
      animationIterationCount: 'infinite',
      xBackground: '$brand',
      width: 2,
      '&:nth-child(1)': {
        height: 10,
        animationDelay: '.1s',
        animationTimingFunction: 'cubic-bezier(.77,.7,.14,1)',
        animationDuration: '.75s'
      },
      '&:nth-child(2)': {
        height: 16,
        animationDelay: '.15s',
        animationTimingFunction: 'cubic-bezier(.97,.04,.4,.66)',
        animationDuration: '.775s'
      },
      '&:nth-child(3)': {
        height: 12,
        animationDelay: '.05s',
        animationTimingFunction: 'cubic-bezier(.65,.18,.14,1)',
        animationDuration: '.7s'
      },
      '&:nth-child(4)': {
        height: 14,
        animationDelay: '.2s',
        animationTimingFunction: 'cubic-bezier(.37,.38,.14,1)',
        animationDuration: '.73s'
      }
    }
  })}`
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Glass = () => (
  <>
    <svg
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
      width="604"
      height="320"
      viewBox="0 0 604 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" filter="url(#filter0_f_206_14)">
        <path
          opacity="0.5"
          d="M100 159.776L310 100L520 159.776V160.223L310 220L100 160.223V159.776Z"
          fill="url(#paint0_linear_206_14)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_206_14"
          x="0"
          y="0"
          width="620"
          height="320"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_206_14"
          />
        </filter>
        <linearGradient
          id="paint0_linear_206_14"
          x1="474.674"
          y1="115.637"
          x2="209.227"
          y2="356.261"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={`rgb(${rgb.glass})`} />
          <stop offset="1" stopColor="#26BBBB" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      width="242"
      height="62"
      viewBox="0 0 242 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="241"
        height="61"
        rx="8.5"
        fill="url(#paint0_radial_201_12)"
        fillOpacity="0.5"
      />
      <rect
        x="0.5"
        y="0.5"
        width="241"
        height="61"
        rx="8.5"
        stroke="url(#paint1_linear_201_12)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_201_12"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(99 7.5) rotate(22.2368) scale(141.371 111.267)"
        >
          <stop stopColor={`rgb(${rgb.glass})`} stopOpacity="0.65" />
          <stop offset="1" stopColor={`rgb(${rgb.glass})`} stopOpacity="0.17" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_201_12"
          x1="-8.71429"
          y1="-4"
          x2="19.4747"
          y2="122.438"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={`rgb(${rgb.glass})`} stopOpacity="0.4" />
          <stop offset="1" stopColor={`rgb(${rgb.glass})`} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </>
)

const Bars = () => (
  <div className={styles.bars}>
    <span />
    <span />
    <span />
    <span />
  </div>
)

const NowPlaying = () => {
  const { data: music } = useSWR<NowPlayingResponse>(
    '/api/now-playing',
    fetcher
  )

  return (
    <a
      href={music?.isPlaying ? music.spotifyUrl : undefined}
      className={styles.outer}
      target="_blank"
      rel="noreferrer"
    >
      <Glass />
      <div className={styles.inner}>
        <div className={styles.player}>
          <div className={styles.cover}>
            {music?.isPlaying ? (
              <Image
                unoptimized
                src={music.cover}
                alt={`[${music.title}] Cover Album`}
                layout="fill"
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
                <span className={`${styles.artists} play`}>
                  Play on Spotify
                </span>
              </>
            ) : (
              <span className={styles.artists}>
                {music ? 'Not Playing' : 'Loading...'}
              </span>
            )}
          </div>
        </div>
        {music?.isPlaying ? <Bars /> : null}
      </div>
    </a>
  )
}

export default NowPlaying
