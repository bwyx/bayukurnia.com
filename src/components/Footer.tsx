import Link from 'next/link'

import { NowPlaying } from '~/components'

import { css } from '~/styles'
import { container, stack, text } from '~/styles/primitives'

const styles = {
  footer: css({
    pt: '$32',
    pb: '$12',
    overflow: 'hidden'
  })(),
  links: css({
    li: {
      mt: '$6',
      xColor: '$fg3',
      xColorOpacity: 0.6,
      lineHeight: '$none',
      '&:hover': {
        xColorOpacity: 0.4
      },
      '&:first-child': {
        mt: '$0'
      }
    }
  })(),
  credit: text({
    size: 'xs',
    css: {
      mt: '$8',
      xColor: '$fg3',
      xColorOpacity: '0.4'
    }
  })
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={container({ size: 'small' })}>
        <section className={stack({ y: 'top', density: 'spaceBetween' })}>
          <ul className={styles.links}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
          <ul className={styles.links}>
            <li>
              <a
                className="github"
                href="https://github.com/bwyx"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="twitter"
                href="https://twitter.com/0x4b70"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
          <NowPlaying />
        </section>
        <p className={styles.credit}>👻 © Bayu Kurnia</p>
      </div>
    </footer>
  )
}

export default Footer
