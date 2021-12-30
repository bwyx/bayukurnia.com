import { styled } from '~/styles'
const StyledContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  px: '1rem',
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

export default StyledContainer
