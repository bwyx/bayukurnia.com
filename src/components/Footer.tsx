import { BlurImage, VisuallyHidden } from '~/components'
import GitHubLogo from '~/components/vectors/GitHubLogo'
import TwitterLogo from '~/components/vectors/TwitterLogo'
import SquareGlass from '~/components/vectors/SquareGlass'

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
  about: stack({
    y: 'bottom',
    x: 'center',
    dir: 'col',
    css: {
      p: '$4',
      margin: '$8 auto',
      borderRadius: '$3xl',
      gap: '$6',
      position: 'relative',
      pointerEvents: 'none',
      width: 240,
      height: 240,
      zIndex: 1
    }
  }),
  aboutImage: css({
    outline: '2px solid rgb($rgb$brand)',
    outlineOffset: '2px',
    borderRadius: '$full',
    display: 'inherit',
    overflow: 'hidden',
    margin: '0 auto'
  })(),
  aboutText: stack({
    x: 'center',
    y: 'center',
    density: 'spaceBetween',
    css: {
      position: 'relative',
      pointerEvents: 'auto',
      py: '$2',
      width: '100%',
      lineHeight: '$tight',
      zIndex: 1
    }
  }),
  greet: stack({
    dir: 'col',
    css: {
      xColor: '$fg2',
      fontSize: '$xs',
      '& strong': {
        xColor: '$fg1',
        fontSize: '$xl'
      }
    }
  }),
  socials: stack({
    css: {
      xColor: '$fg2',
      gap: '$4',
      mt: '$1',
      '& a:hover': {
        xColor: '$brand'
      },
      '& svg': {
        width: 18,
        height: 18
      }
    }
  }),
  credit: css({
    p: '$4',
    fontSize: '0.8rem',
    xColor: '$fg3'
  })()
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <SquareGlass />
        <div className={styles.aboutImage}>
          <BlurImage
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVQImQE0AMv/AAUEDwEACSsrM7W1xACSk6L/+/neyshtbnwASUpW9uXmrpuYFxgfAEE/QjAqMQEAByMjKRJ7Evg6EQWIAAAAAElFTkSuQmCC"
            src="/bayukurnia.png"
            width={88}
            height={88}
            alt="Bayu Kurnia's Picture"
          />
        </div>
        <div className={styles.aboutText}>
          <p className={styles.greet}>
            <span>Halo,</span>
            <strong>Bayu Kurnia</strong>
            <span>disini.</span>
          </p>
          <ul className={styles.socials}>
            <li>
              <a
                href="https://twitter.com/0x4b70"
                target="_blank"
                rel="noreferrer"
              >
                <VisuallyHidden>0x4b70&apos;s Twitter</VisuallyHidden>
                <TwitterLogo />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/bwyx"
                target="_blank"
                rel="noreferrer"
              >
                <VisuallyHidden>bwyx&apos;s GitHub</VisuallyHidden>
                <GitHubLogo />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.credit}>© Bayu Kurnia 2021</p>
    </footer>
  )
}

export default Footer
