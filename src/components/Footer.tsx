import { css } from '~/styles'

const footer = css({
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
    <footer className={footer()}>
      <p>© Bayu Kurnia 2021</p>
    </footer>
  )
}

export default Footer
