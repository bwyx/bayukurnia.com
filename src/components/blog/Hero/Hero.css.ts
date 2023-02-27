import { style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'

import { container } from '~/styles/primitives'
import { box, text } from '~/styles/sprinkles'
import { media, rgb, space } from '~/styles/variables.css'

const styles = {
  header: style({
    paddingTop: space[8],
    '@media': {
      [media.md]: { paddingBottom: space[6] },
      [media.lg]: { paddingBottom: space[8], paddingTop: space[12] }
    }
  }),
  container: style([
    container({ size: 'large' }),
    {
      '@media': {
        [media.sm]: {
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
      }
    }
  ]),
  postDetails: style({
    gridArea: 'details',
    marginTop: space[6],
    marginBottom: space[6],
    '@media': {
      [media.sm]: { marginRight: space[4] }
    }
  }),
  postTitle: style([
    { maxWidth: '15ch' },
    text({
      lineHeight: 'tight',
      fontWeight: 'extrabold',
      fontSize: {
        initial: '3xl',
        md: '4xl',
        lg: '5xl'
      }
    })
  ]),
  postSnippet: style([
    {
      marginTop: space[2],
      color: `rgb(${rgb.fg3})`,
      maxWidth: '35ch'
    },
    text({
      fontSize: {
        initial: 'base',
        md: 'lg',
        lg: 'xl'
      }
    })
  ]),
  postAuthor: style([
    { gridArea: 'author' },
    box({
      display: 'flex',
      alignItems: 'center'
    })
  ]),
  authorDetails: box({
    display: 'flex',
    flexDirection: 'column'
  }),
  authorPicture: style([
    {
      display: 'inherit',
      height: 38,
      width: 38,
      marginRight: space[4],
      boxShadow: `0 0px 0px 2px rgb(${rgb.bg}), 0 0 0px 4px rgb(${rgb.brand})`,
      '@media': {
        [media.lg]: {
          width: 48,
          height: 48
        }
      }
    },
    box({
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'full'
    })
  ]),
  authorName: text({
    fontWeight: 'medium',
    lineHeight: 'none',
    fontSize: {
      initial: 'sm',
      lg: 'base'
    }
  }),
  socials: style([
    {
      marginLeft: calc.multiply(space[1], -1),
      marginBottom: calc.multiply(space[2], -1),
      '@media': {
        [media.lg]: {
          marginTop: space[1]
        }
      }
    },
    box({ display: 'flex' })
  ]),
  socialsLink: style([
    {
      padding: space[1],
      color: `rgb(${rgb.fg3})`,
      selectors: {
        [`&.twitter:hover`]: { color: 'rgb(29, 155, 240)' },
        [`.dark &.github:hover`]: { color: 'rgb(255,255,255)' },
        [`.light &.github:hover`]: { color: 'rgb(0, 0, 0)' }
      }
    },
    box({ display: 'inline-block' })
  ]),
  socialsIcon: style({ width: 16, height: 16 }),
  publishedDate: style([
    {
      color: `rgb(${rgb.fg3})`,
      gridArea: 'date'
    },
    text({
      lineHeight: 'none',
      fontWeight: 'medium',
      fontSize: {
        initial: 'xs',
        lg: 'sm'
      }
    })
  ]),
  cover: style({
    gridArea: 'cover',
    position: 'relative',
    pointerEvents: 'none',
    margin: `${space[10]} auto 0`,
    width: 280,
    height: 280,
    maxWidth: '88vw',
    maxHeight: '88vw',
    zIndex: 1,
    '@media': {
      [media.sm]: {
        marginTop: 0,
        marginRight: calc.multiply(space[20], -1),
        width: 300,
        height: 300
      },
      [media.md]: {
        width: 340,
        height: 340,
        maxWidth: '40vw',
        maxHeight: '40vw',
        margin: 0
      },
      [media.lg]: {
        width: 420,
        height: 420
      }
    }
  }),
  imgOuter: style({
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '3.75%',
    overflow: 'hidden'
  }),
  img: style({
    transitionDuration: '0.5s',
    transitionTimingFunction: 'ease-in-out'
  }),
  imgBlur: style({
    willChange: 'transform, filter, opacity',
    transform: 'scale(1.05)',
    filter: 'blur(8px) saturate(0) !important',
    opacity: 0.1
  }),
  gradientBackground: style({
    width: '240%',
    position: 'absolute',
    right: '-50%',
    bottom: '-55%'
  })
}

export default styles
