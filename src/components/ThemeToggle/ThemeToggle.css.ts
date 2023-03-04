import { style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { media, space } from '~/styles/variables.css'

const styles = {
  button: style([
    {
      padding: space[3],
      margin: calc.multiply(space[3], -1),
      '@media': {
        [media.lg]: {
          bottom: 0,
          position: 'absolute'
        }
      }
    }
  ])
}

export default styles
