import { format, parseISO } from 'date-fns'
import { BlurImage, VisuallyHidden } from '~/components'
import SquareGlass from '~/components/vectors/SquareGlass'
import GitHubLogo from '~/components/vectors/GitHubLogo'
import TwitterLogo from '~/components/vectors/TwitterLogo'

import { css } from '~/styles'
import { container, stack, text } from '~/styles/primitives'
import themes from '~/styles/themes'

import config from '~/config'

import type { PostWithCover } from '~/types/blog.type'

const styles = {
  header: css({
    pt: '$8',
    '@md': { pb: '$6' },
    '@lg': { pt: '$12', pb: '$8' }
  })(),
  container: `${container({ size: 'large' })} ${css({
    '@sm': {
      display: 'grid',
      alignItems: 'center',
      gridTemplateRows: 'auto 1fr auto',
      gridTemplateColumns: '1fr',
      gridTemplateAreas: `
    "date cover"
    "details cover"
    "author cover"
    `
    }
  })()}`,
  postDetails: css({
    gridArea: 'details',
    my: '$6',
    '@sm': {
      mr: '$4'
    }
  })(),
  postTitle: text({
    size: {
      '@initial': '3xl',
      '@md': '4xl',
      '@lg': '5xl'
    },
    leading: 'tight',
    weight: 'extrabold',
    css: { maxWidth: '15ch' }
  }),
  postSnippet: text({
    size: {
      '@initial': 'base',
      '@md': 'lg',
      '@lg': 'xl'
    },
    css: {
      mt: '$2',
      xColorOpacity: 0.5,
      xColor: '$fg1',
      maxWidth: '35ch'
    }
  }),
  postAuthor: stack({
    dir: 'row',
    y: 'center',
    css: {
      gridArea: 'author'
    }
  }),
  authorDetails: stack({ dir: 'col' }),
  authorPicture: css({
    position: 'relative',
    height: 38,
    width: 38,
    boxShadow: '0 0px 0px 2px rgb($rgb$bg), 0 0 0px 4px rgb($rgb$brand)',
    borderRadius: '$full',
    marginRight: '1rem',
    display: 'inherit',
    overflow: 'hidden',
    '@lg': { width: 48, height: 48 }
  })(),
  authorName: text({
    weight: 'medium',
    leading: 'none',
    size: {
      '@initial': 'sm',
      '@lg': 'base'
    }
  }),
  socials: stack({
    css: {
      ml: '-$1',
      mb: '-$2',
      a: {
        display: 'inline-block',
        padding: '$1',
        xColor: '$fg3',
        '&.twitter:hover': { color: 'rgb(29, 155, 240)' },
        '&.github:hover': {
          [`.${themes.dark} &`]: { color: 'rgb(255, 255, 255)' },
          [`.${themes.light} &`]: { color: 'rgb(0, 0, 0)' }
        }
      },
      svg: {
        width: 16,
        height: 16
      },
      '@lg': {
        mt: '$1'
      }
    }
  }),
  publishedDate: text({
    leading: 'none',
    weight: 'medium',
    size: {
      '@initial': 'xs',
      '@lg': 'sm'
    },
    css: {
      xColor: '$fg1',
      xColorOpacity: 0.5,
      gridArea: 'date'
    }
  }),
  cover: css({
    gridArea: 'cover',
    position: 'relative',
    pointerEvents: 'none',
    margin: '$10 auto 0',
    width: 280,
    height: 280,
    maxWidth: '88vw',
    maxHeight: '88vw',
    zIndex: 1,
    '@sm': {
      mt: '$0',
      mr: '-$20',
      width: 300,
      height: 300
    },
    '@md': {
      width: 340,
      height: 340,
      maxWidth: '40vw',
      maxHeight: '40vw',
      margin: 0
    },
    '@lg': {
      width: 420,
      height: 420
    }
  })(),
  imgOuter: css({
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '3.75%',
    overflow: 'hidden'
  })(),
  img: css({
    transitionDuration: '0.5s',
    transitionTimingFunction: 'ease-in-out'
  })(),
  imgBlur: css({
    willChange: 'transform, filter, opacity',
    transform: 'scale(1.05)',
    filter: 'blur(8px) saturate(0) !important',
    opacity: 0.1
  })(),
  gradientBackground: css({
    width: '240%',
    position: 'absolute',
    right: '-50%',
    bottom: '-55%'
  })()
}

const Hero = ({ title, summary, publishedAt, cover }: PostWithCover) => {
  const { width, height, ...img } = cover

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.publishedDate}>
          {format(parseISO(publishedAt), 'LLLL d, yyyy')}
        </div>
        <div className={styles.postDetails}>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postSnippet}>{summary}</p>
        </div>
        <div className={styles.postAuthor}>
          <div className={styles.authorPicture}>
            <BlurImage {...config.avatar} width={48} height={48} />
          </div>
          <div className={styles.authorDetails}>
            <strong className={styles.authorName}>Bayu Kurnia</strong>
            <div className={styles.socials}>
              <a
                className="twitter"
                href="https://twitter.com/0x4b70"
                target="_blank"
                rel="noreferrer"
              >
                <VisuallyHidden>0x4b70&apos;s Twitter</VisuallyHidden>
                <TwitterLogo />
              </a>
              <a
                className="github"
                href="https://github.com/bwyx"
                target="_blank"
                rel="noreferrer"
              >
                <VisuallyHidden>bwyx&apos;s GitHub</VisuallyHidden>
                <GitHubLogo />
              </a>
            </div>
          </div>
        </div>
        <figure className={styles.cover}>
          <SquareGlass />
          <div className={styles.imgOuter}>
            <BlurImage
              {...img}
              className={styles.img}
              blurClassName={styles.imgBlur}
              alt={`${title} Cover Image`}
              layout="fill"
              sizes="50vw"
              priority={true}
            />
          </div>
        </figure>
      </div>
    </header>
  )
}

export default Hero
