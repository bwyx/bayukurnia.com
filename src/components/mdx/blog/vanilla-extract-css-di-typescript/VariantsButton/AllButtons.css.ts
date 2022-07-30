import { style } from '@vanilla-extract/css'
import { box } from '~/styles/sprinkles'
import { media, space } from '~/styles/variables.css'

const styles = {
  outer: style({
    display: 'flex',
    flexDirection: 'column',
    '@media': {
      [media.sm]: {
        gap: space[10],
        flexDirection: 'row'
      }
    }
  }),
  inner: style({
    display: 'flex',
    flexDirection: 'column'
  }),
  buttonContainer: style([
    {
      marginBottom: space[6],
      gap: space[6]
    },
    box({
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    })
  ])
}

export default styles
