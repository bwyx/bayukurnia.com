import { NowPlaying } from '~/components'

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
  nowPlaying: css({ pt: '$32', pb: '$6' })(),
  credit: css({
    padding: '$4',
    fontSize: '0.8rem',
    xColor: '$fg3'
  })()
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.nowPlaying}>
        <NowPlaying />
      </section>
      <p className={styles.credit}>© Bayu Kurnia 2021</p>
    </footer>
  )
}

export default Footer
