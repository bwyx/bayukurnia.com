import { style } from '@vanilla-extract/css'
import { container } from '~/styles/primitives'
import { box } from '~/styles/sprinkles'
import { media, space } from '~/styles/variables.css'

const styles = {
  body: style([
    {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      '@media': {
        [media.md]: {
          flexDirection: 'row',
          alignItems: 'start',
          paddingTop: space[32]
        }
      }
    },
    container({ size: 'medium' })
  ]),
  main: style([
    box({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexGrow: 1
    })
  ])
}

export default styles
