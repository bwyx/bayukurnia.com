import { css } from '~/styles'
import stack from '~/styles/stack.style'

const styles = {
  footer: stack({
    x: 'center',
    dir: 'col',
    css: {
      overflow: 'hidden'
    }
  }),
  credit: css({
    padding: '$4',
    fontSize: '0.8rem',
    xColor: '$fg3'
  })()
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.credit}>© Bayu Kurnia 2021</p>
    </footer>
  )
}

export default Footer
