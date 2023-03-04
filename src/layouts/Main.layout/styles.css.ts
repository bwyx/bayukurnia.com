import { style } from '@vanilla-extract/css'
import { container } from '~/styles/primitives'
import { media, space } from '~/styles/variables.css'

const styles = {
  body: style([
    {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      '@media': {
        [media.lg]: {
          flexDirection: 'row',
          alignItems: 'start',
          paddingTop: space[32]
        }
      }
    },
    container({ size: 'large' })
  ]),
  main: style({
    '@media': {
      [media.lg]: {
        maxWidth: 'calc(100% - 150px)'
      }
    }
  })
}

export default styles
