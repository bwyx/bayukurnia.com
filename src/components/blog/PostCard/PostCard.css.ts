import { style } from '@vanilla-extract/css'
import { box, text } from '~/styles/sprinkles'
import { media, rgb, space } from '~/styles/variables.css'

const styles = {
  outer: style([
    {
      marginTop: space[2],
      padding: space[4],
      border: '1px solid transparent',
      ':first-child': { marginTop: 0 },
      ':hover': {
        color: `rgb(${rgb.brand})`,
        backgroundColor: `rgb(${rgb.brand} / 0.05)`,
        borderColor: `rgb(${rgb.brand} / 0.1)`
      },
      '@media': {
        [media.sm]: {
          padding: space[6]
        }
      }
    },
    box({ display: 'flex', flexDirection: 'column', borderRadius: 'xl' })
  ]),
  title: text({
    fontWeight: 'bold',
    lineHeight: 'snug',
    fontSize: {
      initial: 'xl',
      sm: '2xl'
    }
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
      marginBottom: space[2],
      color: `rgb(${rgb.fg3})`
    },
    text({
      fontWeight: 'medium',
      fontSize: {
        initial: 'xs',
        sm: 'sm'
      }
    })
  ])
}

export default styles
