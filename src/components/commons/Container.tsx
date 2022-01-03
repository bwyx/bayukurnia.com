import { styled } from '~/styles'
const Container = styled('div', {
  width: '100%',
  padding: '0 1rem',
  margin: '0 auto',
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
    size: 'small'
  }
})

export default Container
