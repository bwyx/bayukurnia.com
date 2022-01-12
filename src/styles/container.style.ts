import { css } from '~/styles'
const container = css({
  position: 'relative',
  width: '100%',
  paddingRight: '6vw',
  paddingLeft: '6vw',
  margin: '0 auto',
  '@md': {
    paddingRight: '4vw',
    paddingLeft: '4vw'
  },
  '@lg': {
    paddingRight: '2rem',
    paddingLeft: '2rem'
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
