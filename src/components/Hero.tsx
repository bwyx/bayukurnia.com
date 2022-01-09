import Image from 'next/image'
import { styled } from '~/styles'
import Container from './commons/Container'

interface Props {
  title: string
  snippet: string
  publishedDate: string
  cover: string | null
}

const Outer = styled('header', {
  paddingTop: '2rem',
  '@md': {
    paddingBottom: '1.5rem',
    [`& ${Container}`]: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      gridTemplateColumns: '1fr',
      gridTemplateAreas: `
      "... cover"
      "details cover"
      "author cover"
      `,
      alignItems: 'center'
    }
  },
  '@lg': {
    paddingTop: '3rem',
    paddingBottom: '2rem'
  }
})

const PostDetails = styled('div', {
  gridArea: 'details'
})

const PostTitle = styled('h1', {
  fontSize: '$3xl',
  lineHeight: 1.2,
  fontWeight: '800',
  maxWidth: '15ch',
  '@sm': { fontSize: '$4xl' },
  '@lg': { fontSize: '$5xl' }
})

const PostSnippet = styled('p', {
  marginTop: '0.5rem',
  color: 'rgb($fg / 50%)',
  maxWidth: '35ch',
  lineHeight: 1.5,
  '@lg': {
    fontSize: '$xl'
  }
})

const PostAuthor = styled('div', {
  gridArea: 'author',
  display: 'flex',
  alignItems: 'center',
  margin: '2rem 0',
  '@md': { margin: 0 }
})

const AuthorDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})

const AuthorPicture = styled('div', {
  position: 'relative',
  height: 48,
  width: 48,
  border: '2px solid rgb($brand)',
  borderRadius: '50%',
  marginRight: '1rem',
  display: 'inherit',
  overflow: 'hidden',
  '@lg': { width: 54, height: 54 }
})

const AuthorName = styled('div', {
  lineHeight: 1,
  fontWeight: 500,
  color: 'rgb($fg)'
})

const PublishedDate = styled('div', {
  lineHeight: 1,
  marginTop: '0.5rem',
  gridArea: 'date',
  fontSize: '$xs',
  color: 'rgb($fg / 50%)',
  fontWeight: 500
})

const Cover = styled('figure', {
  gridArea: 'cover',
  width: '100%',
  height: '100%',
  position: 'relative',
  pointerEvents: 'none',
  margin: '0 auto',
  maxWidth: 282,
  zIndex: 1,
  '@sm': {
    margin: 0,
    width: 342
  },
  '@md': {
    maxWidth: '40vw',
    margin: 0
  },
  '@lg': {
    width: 422
  }
})

const GradientBackground = styled('svg', {
  width: '240%',
  position: 'absolute',
  right: '-50%',
  bottom: '-55%'
})

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
        <stop stopColor="rgb(var(--colors-glass))" />
        <stop offset="1" stopColor="rgb(var(--colors-glass))" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint1_linear_21_350"
        x1="-16"
        y1="-34"
        x2="445.5"
        y2="483.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="rgb(var(--colors-glass))" />
        <stop offset="1" stopColor="rgb(var(--colors-glass))" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

const Hero = ({ title, snippet, publishedDate, cover }: Props) => {
  return (
    <Outer>
      <Container size="large">
        <PostDetails>
          <PostTitle>{title}</PostTitle>
          <PostSnippet>{snippet}</PostSnippet>
        </PostDetails>
        <PostAuthor>
          <AuthorPicture>
            <Image src="/profile.png" layout="fill" alt="Author Picture" />
          </AuthorPicture>
          <AuthorDetails>
            <AuthorName>Bayu Kurnia</AuthorName>
            <PublishedDate>{publishedDate}</PublishedDate>
          </AuthorDetails>
        </PostAuthor>
        <Cover>
          <GradientBackground
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
                <stop stopColor="rgb(var(--colors-brand))" />
                <stop offset="1" stopColor="#26BBBB" />
              </linearGradient>
            </defs>
          </GradientBackground>
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
              />
            </div>
          ) : null}
        </Cover>
      </Container>
    </Outer>
  )
}

export default Hero
