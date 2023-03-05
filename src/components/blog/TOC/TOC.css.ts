import { style } from '@vanilla-extract/css'
import { box, text } from '~/styles/sprinkles'
import { rgb, space } from '~/styles/variables.css'

const styles = {
  ul: box({ display: 'flex', flexDirection: 'column' }),
  li: box({ display: 'flex', flexDirection: 'column' }),
  link: style([
    {
      paddingTop: space[1.5],
      paddingBottom: space[1.5],
      paddingLeft: space[4],
      paddingRight: space[4],
      color: `rgb(${rgb.fg3})`,
      borderLeft: `2px solid transparent`,
      selectors: {
        "[data-depth='3'] &": { paddingLeft: space[8] },
        "[data-depth='4'] &": { paddingLeft: space[12] }
      },
      ':hover': {
        color: `rgb(${rgb.fg1})`,
        borderColor: `rgb(${rgb.brand})`,
        background: `rgb(${rgb.brand} / 0.15)`
      }
    },
    box({ display: 'inline-block' }),
    text({
      fontFamily: 'sans',
      fontWeight: 'medium',
      fontSize: {
        initial: 'xs',
        lg: 'sm'
      }
    })
  ])
}

export default styles
