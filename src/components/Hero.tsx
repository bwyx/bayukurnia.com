import Image from 'next/image'
import { Text } from '~/components/blocks'

import styles from '~/styles/components/Hero.style'

import type { PostProperties } from '~/types'

const GlassBackground = () => (
  <svg viewBox="0 0 422 422" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="0.5"
      y="0.5"
      width="421"
      height="421"
      rx="1rem"
      fill="url(#paint0_radial_21_350)"
      fillOpacity="0.5"
    />
    <rect
      x="0.5"
      y="0.5"
      width="421"
      height="421"
      rx="1rem"
      stroke="url(#paint1_linear_21_350)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_21_350"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(172.5 46.5) rotate(58.555) scale(438.966)"
      >
        <stop stopColor="rgb(var(--rgb-glass))" />
        <stop offset="1" stopColor="rgb(var(--rgb-glass))" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint1_linear_21_350"
        x1="-16"
        y1="-34"
        x2="445.5"
        y2="483.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="rgb(var(--rgb-glass))" />
        <stop offset="1" stopColor="rgb(var(--rgb-glass))" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

const Hero = ({ title, richDescription, date, cover }: PostProperties) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.postDetails}>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postSnippet}>
            <Text>{richDescription}</Text>
          </p>
        </div>
        <div className={styles.postAuthor}>
          <div className={styles.authorPicture}>
            <Image
              src="/profile.png"
              alt="Author Picture"
              width={54}
              height={54}
            />
          </div>
          <div className={styles.authorDetails}>
            <strong className={styles.authorName}>Bayu Kurnia</strong>
            <span className={styles.publishedDate}>{date}</span>
          </div>
        </div>
        <figure className={styles.cover}>
          <svg
            className={styles.gradientBackground}
            viewBox="0 0 1008 772"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5" filter="url(#filter0_f_29_31)">
              <path
                opacity="0.5"
                d="M150 385.093L541.5 150L933 385.093V386.851L541.5 621.945L150 386.851V385.093Z"
                fill="url(#paint0_linear_29_31)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_29_31"
                x="0"
                y="0"
                width="1083"
                height="771.945"
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
                  stdDeviation="75"
                  result="effect1_foregroundBlur_29_31"
                />
              </filter>
              <linearGradient
                id="paint0_linear_29_31"
                x1="848.5"
                y1="211.5"
                x2="87.5"
                y2="538.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="rgb(var(--rgb-brand))" />
                <stop offset="1" stopColor="#26BBBB" />
              </linearGradient>
            </defs>
          </svg>
          <GlassBackground />
          {cover ? (
            <div
              style={{
                position: 'absolute',
                inset: 1,
                borderRadius: '3.75%',
                overflow: 'hidden',
                objectFit: 'cover'
              }}
            >
              <Image
                src={cover}
                alt={`${title} Cover Image`}
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
              />
            </div>
          ) : null}
        </figure>
      </div>
    </header>
  )
}

export default Hero
