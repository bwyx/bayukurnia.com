import { style } from '@vanilla-extract/css'
import { box, text } from '~/styles/sprinkles'
import { media, rgb, space } from '~/styles/variables.css'

export const postCard = style({
  paddingTop: space[2],
  paddingBottom: space[2]
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
  ])
}

export default styles
