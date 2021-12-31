import { styled } from '~/styles'
const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
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
    size: 'medium'
  }
})

export default Container
