import { style } from '@vanilla-extract/css'
import { box } from '~/styles/sprinkles'
import { media, space } from '~/styles/variables.css'

const styles = {
  post: style([
    {
      display: 'flex',
      justifyContent: 'space-between',
      flexGrow: 1,
      flexDirection: 'column-reverse',
      margin: '0 auto',
      '@media': {
        [media.md]: {
          flexDirection: 'row'
        }
      }
    }
  ]),
  article: style({
    '@media': {
      [media.md]: {
        marginRight: space[8],
        maxWidth: 'min(100% - 200px, 65ch)'
      },
      [media.lg]: { maxWidth: 'min(100% - 250px, 65ch)' }
    }
  }),
  aside: style([
    {
      '@media': {
        [media.md]: { width: 200 },
        [media.lg]: { width: 250 }
      }
    },
    box({ flexShrink: 0 })
  ])
}

export default styles
