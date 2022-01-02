import { styled } from '~/styles'
import ToggleTheme from './ToggleTheme'

const StyledFooter = styled('footer', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem 0',
  '& p': {
    fontSize: '0.8rem',
    color: '$gray'
  }
})

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        <ToggleTheme /> © Bayu Kurnia 2021
      </p>
    </StyledFooter>
  )
}

export default Footer
