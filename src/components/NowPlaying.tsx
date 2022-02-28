import Image from 'next/image'
import useSWR from 'swr'

import { css } from '~/styles'
import stack from '~/styles/stack.style'
import text from '~/styles/text.style'

import type { NowPlayingResponse } from '~/types/spotify.type'

const artists = text({
  size: 'xs',
  leading: 'snug',
  ellipsis: true,
  css: { maxWidth: '20ch', xColor: '$fg3' }
})

const styles = {
  outer: css({
    position: 'relative',
    display: 'block',
    '.play': { display: 'none' },
    '&:hover': {
      '.artists': { display: 'none' },
      '.play': { display: 'block' }
    }
  })()
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const NowPlaying = () => {
  const { data: music } = useSWR<NowPlayingResponse>(
    '/api/now-playing',
    fetcher
  )

  return (
    <a
      href={music && music.isPlaying ? music.spotifyUrl : undefined}
      className={styles.outer}
      target="_blank"
      rel="noreferrer"
    >
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
            <stop stopColor="rgb(var(--rgb-brand))" />
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
            <stop stopColor="rgb(var(--rgb-glass))" stopOpacity="0.65" />
            <stop
              offset="1"
              stopColor="rgb(var(--rgb-glass))"
              stopOpacity="0.17"
            />
          </radialGradient>
          <linearGradient
            id="paint1_linear_201_12"
            x1="-8.71429"
            y1="-4"
            x2="19.4747"
            y2="122.438"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="rgb(var(--rgb-glass))" stopOpacity="0.4" />
            <stop
              offset="1"
              stopColor="rgb(var(--rgb-glass))"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
      </svg>

      <div
        className={stack({
          y: 'center',
          css: {
            inset: 0,
            position: 'absolute',
            gap: '$2',
            px: '$3'
          }
        })}
      >
        {music && music.isPlaying ? (
          <div
            style={{
              display: 'inherit',
              borderRadius: 6,
              overflow: 'hidden',
              flexShrink: 0
            }}
          >
            <Image
              unoptimized
              src={music.cover}
              alt=""
              width={42}
              height={42}
            />
          </div>
        ) : (
          <svg
            style={{
              margin: 10
            }}
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0002 0C5.37282 0 0 5.37268 0 12.0001C0 18.6278 5.37282 24 12.0002 24C18.6283 24 24.0006 18.6278 24.0006 12.0001C24.0006 5.37311 18.6283 0.000573189 12.0001 0.000573189L12.0002 0ZM17.5034 17.3075C17.4522 17.3915 17.385 17.4644 17.3055 17.5223C17.2261 17.5802 17.136 17.6219 17.0404 17.6449C16.9448 17.6679 16.8457 17.6719 16.7486 17.6565C16.6515 17.6412 16.5584 17.6068 16.4746 17.5555C13.657 15.8344 10.1101 15.4447 5.93297 16.399C5.73955 16.443 5.53658 16.4084 5.36867 16.3028C5.20076 16.1972 5.08164 16.0293 5.0375 15.8359C5.01552 15.7401 5.01264 15.641 5.02903 15.5441C5.04541 15.4472 5.08075 15.3546 5.13301 15.2714C5.18527 15.1882 5.25342 15.1161 5.33357 15.0593C5.41372 15.0025 5.50429 14.962 5.60009 14.9403C10.1713 13.8959 14.0924 14.3456 17.2555 16.2787C17.608 16.495 17.7198 16.955 17.5034 17.3075ZM18.9722 14.0401C18.7014 14.4803 18.1254 14.6193 17.6854 14.3484C14.4598 12.3658 9.5428 11.7916 5.72748 12.9497C5.23268 13.0992 4.71007 12.8203 4.55989 12.3264C4.48823 12.0889 4.51367 11.8327 4.63063 11.6139C4.74759 11.3952 4.94653 11.2318 5.18381 11.1595C9.54194 9.83713 14.9599 10.4777 18.6642 12.754C19.1041 13.0248 19.2431 13.6009 18.9722 14.0402V14.0401ZM19.0983 10.6376C15.2307 8.34038 8.84966 8.12916 5.15701 9.24989C4.56405 9.42973 3.93697 9.09499 3.75728 8.50202C3.67087 8.21714 3.70115 7.9096 3.84144 7.64703C3.98174 7.38446 4.22058 7.18836 4.50544 7.10186C8.74434 5.81504 15.791 6.06366 20.2439 8.70708C20.3708 8.78216 20.4816 8.88153 20.5701 8.99951C20.6585 9.11749 20.7228 9.25176 20.7593 9.39463C20.7958 9.5375 20.8037 9.68616 20.7826 9.8321C20.7616 9.97803 20.7119 10.1184 20.6365 10.2451C20.3213 10.7785 19.6306 10.9543 19.0989 10.6376H19.0983Z"
              fill="rgb(var(--rgb-fg1) / 0.25)"
            />
          </svg>
        )}
        <div className={stack({ dir: 'col' })}>
          <p
            className={text({
              size: 'sm',
              weight: 'medium',
              leading: 'snug',
              ellipsis: true,
              css: { maxWidth: '20ch', pr: '$4' }
            })}
          >
            {music && music.isPlaying ? music.title : 'Spotify'}
          </p>
          {music && music.isPlaying ? (
            <>
              <span className={`${artists} artists`}>{music.artists}</span>
              <span className={`${artists} play`}>Play on Spotify</span>
            </>
          ) : (
            <span className={artists}>Not Playing</span>
          )}
        </div>
      </div>
    </a>
  )
}

export default NowPlaying
