import { style } from '@vanilla-extract/css'
import { box, text } from '~/styles/sprinkles'
import { media, rgb, space } from '~/styles/variables.css'

export const postCard = style({
  paddingTop: space[2],
  paddingBottom: space[2],
  pointerEvents: 'auto'
})

export const coverHover = style({
  top: -180,
  left: 0,
  display: 'none',
  pointerEvents: 'none',
  transform: 'translate(var(--x), var(--y))',
  selectors: {
    [`${postCard}:hover &`]: {
      display: 'block'
    }
  }
})

const styles = {
  outer: style([postCard, box({ display: 'flex' })]),
  title: text({
    fontSize: {
      initial: 'base',
      md: 'lg'
    },
    fontWeight: 'bold',
    letterSpacing: 'tight',
    lineHeight: 'tight'
  }),
  summary: style([
    { color: `rgb(${rgb.fg2})` },
    text({
      fontSize: 'base',
      lineHeight: 'relaxed'
    })
  ]),
  publishedAt: style([
    {
      width: space[24],
      color: `rgb(${rgb.fg3})`,
      '@media': {
        [media.md]: { width: space[28] }
      }
    },
    box({ display: 'flex', alignItems: 'center', flexShrink: 0 }),
    text({
      fontWeight: 'medium',
      fontSize: {
        initial: 'sm',
        md: 'base'
      }
    })
  ]),
  coverHover: style([coverHover, box({ position: 'absolute' })])
}

export default styles
