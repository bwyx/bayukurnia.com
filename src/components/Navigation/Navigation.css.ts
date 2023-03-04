import { style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { box, text } from '~/styles/sprinkles'
import { media, rgb, space } from '~/styles/variables.css'

const styles = {
  aside: style([
    {
      marginTop: space[6],
      paddingBottom: 0,
      '@media': {
        [media.lg]: {
          marginTop: 0,
          top: space[32],
          paddingBottom: space[20]
        }
      }
    },
    box({
      position: 'sticky',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    })
  ]),
  logoAndThemeToggle: box({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }),
  home: style({
    padding: space[0.5],
    margin: calc.multiply(space[0.5], -1),
    color: `rgb(${rgb.brand})`,
    display: 'inherit',
    ':hover': {
      color: `rgb(${rgb.accent})`
    }
  }),
  nav: style([
    {
      display: 'flex',
      marginTop: space[4],
      marginBottom: space[4],
      minWidth: 150,
      '@media': {
        [media.lg]: {
          marginTop: space[8],
          flexDirection: 'column',
          paddingRight: space[12]
        }
      }
    },
    text({ fontWeight: 'medium' })
  ]),
  navItem: style([
    {
      paddingRight: space[2],
      paddingLeft: space[2],
      paddingTop: space[1],
      paddingBottom: space[1],
      color: `rgb(${rgb.fg3})`,
      ':first-child': {
        marginLeft: calc.multiply(space[2], -1)
      },
      ':hover': {
        color: `rgb(${rgb.fg1})`
      },
      '@media': {
        [media.lg]: {
          marginLeft: calc.multiply(space[2], -1),
          marginRight: calc.multiply(space[2], -1)
        }
      }
    },
    box({ position: 'relative' }),
    text({
      fontFamily: 'sans',
      fontWeight: 'semibold',
      letterSpacing: 'tight'
    })
  ]),
  navItemActive: style({
    color: `rgb(${rgb.fg1})`
  })
}

export default styles
