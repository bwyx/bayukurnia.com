import { styled } from '~/styles'
const StyledContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '72rem',
  px: '1rem',
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
  defaultVariant: {
    size: 'medium'
  }
})

export default StyledContainer
