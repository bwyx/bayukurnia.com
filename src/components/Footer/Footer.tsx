import { memo } from 'react'

import Link from 'next/link'

import { NowPlaying } from '~/components'

import { container } from '~/styles/primitives'
import styles from './Footer.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={container({ size: 'small' })}>
        <section className={styles.section}>
          <div className={styles.links}>
            <ul className={styles.linksList}>
              <li className={styles.linksItem}>
                <Link href="/">
                  <a className={styles.linksItemLink}>Home</a>
                </Link>
              </li>
              <li className={styles.linksItem}>
                <Link href="/guestchat">
                  <a className={styles.linksItemLink}>Guest Chat</a>
                </Link>
              </li>
            </ul>
            <ul className={styles.linksList}>
              <li className={styles.linksItem}>
                <a
                  className={styles.linksItemLink}
                  href="https://github.com/bwyx"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className={styles.linksItem}>
                <a
                  className={styles.linksItemLink}
                  href="https://twitter.com/0x4b70"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li className={styles.linksItem}>
                <a
                  className={styles.linksItemLink}
                  href="https://www.instagram.com/baayukurnia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <NowPlaying />
        </section>
        <p className={styles.credit}>
          <span>👻 © Bayu Kurnia • </span>
          <a
            className={styles.creditLink}
            href="https://github.com/bwyx/bayukurnia.com"
            target="_blank"
            rel="noreferrer"
          >
            View source code
          </a>
        </p>
      </div>
    </footer>
  )
}

export default memo(Footer)
