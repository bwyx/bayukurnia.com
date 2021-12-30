import { styled } from '~/styles'

const StyledFooter = styled('footer', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  py: '1rem',
  '& p': {
    fontSize: '0.8rem',
    color: '$gray'
  }
})

const Footer = () => {
  return (
    <StyledFooter>
      <p>© Bayu Kurnia 2021</p>
    </StyledFooter>
  )
}

export default Footer
