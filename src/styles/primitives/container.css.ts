import { recipe } from '@vanilla-extract/recipes'
import { media } from '~/styles/variables.css'

const container = recipe({
  base: {
    position: 'relative',
    width: '100%',
    paddingRight: '6vw',
    paddingLeft: '6vw',
    margin: '0 auto',
    '@media': {
      [media.md]: {
        paddingRight: '4vw',
        paddingLeft: '4vw'
      },
      [media.lg]: {
        paddingRight: '2rem',
        paddingLeft: '2rem'
      }
    }
  },
  variants: {
    size: {
      small: {
        maxWidth: '48rem'
      },
      medium: {
        maxWidth: '60rem'
      },
      large: {
        maxWidth: '72rem'
      }
    }
  },
  defaultVariants: {
    size: 'medium'
  }
})

export default container
