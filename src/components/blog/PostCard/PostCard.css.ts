import { style } from '@vanilla-extract/css'
import { box, text } from '~/styles/sprinkles'
import { rgb, space } from '~/styles/variables.css'

export const postCard = style({
  paddingTop: space[1],
  paddingBottom: space[1]
})

const styles = {
  outer: style([
    postCard,
    box({
      display: 'flex'
    })
  ]),
  title: text({
    fontSize: 'lg',
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
      width: space[28],
      color: `rgb(${rgb.fg3})`
    },
    box({ display: 'flex', alignItems: 'center', flexShrink: 0 }),
    text({
      fontWeight: 'medium',
      fontSize: 'base'
    })
  ])
}

export default styles
