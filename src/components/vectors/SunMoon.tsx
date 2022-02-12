import { css } from '~/styles'
import themes from '~/styles/themes'

const styles = css({
  width: 20,
  height: 20,
  '.theme-toggle:is(:active) &': {
    transform: 'scale(0.95)'
  },
  ':is(.moon, .sun, .sun-beams)': {
    transformOrigin: 'center center'
  },
  ':is(.moon, .sun)': {
    fill: '#e6bf13',
    '.theme-toggle:is(:hover, :focus-visible) &': {
      fill: '#ffc120'
    }
  },
  '.sun-beams': {
    stroke: '#e6bf13',
    strokeWidth: '2px',

    '.theme-toggle:is(:hover, :focus-visible) &': {
      stroke: '#ffc120'
    }
  },
  [`.${themes.dark} &`]: {
    '.sun': {
      transform: 'scale(1.75)'
    },
    '.sun-beams': {
      opacity: 0
    },
    '.moon > circle': {
      transform: 'translateX(-7px)',
      '@supports (cx:1)': {
        transform: 'translateX(0)',
        cx: 17
      }
    }
  },
  '@motionOK': {
    transition: 'transform .15s cubic-bezier(.5,1.25,.75,1.25)',
    '.sun': {
      transition: 'transform .5s cubic-bezier(.5,1.25,.75,1.25)'
    },
    '.sun-beams': {
      transition: `transform .5s cubic-bezier(.5,1.5,.75,1.25),
        opacity .5s cubic-bezier(.25,0,.3,1)`
    },
    '.moon > circle': {
      transition: 'transform .5s cubic-bezier(0,0,0,1)',

      '@supports (cx: 1)': {
        transition: 'cx .25s var(--ease-out-5)'
      }
    },
    [`.${themes.dark} &`]: {
      '.sun': {
        transform: 'scale(1.75)',
        transitionTimingFunction: 'var(--ease-3)',
        transitionDuration: '.25s'
      },
      '.sun-beams': {
        transform: 'rotateZ(-25deg)',
        transitionDuration: '.15s'
      },
      '.moon > circle': {
        transitionDelay: '.25s',
        transitionDuration: '.5s'
      }
    }
  }
})()

const SunMoon = () => {
  return (
    <svg className={styles} aria-hidden="true" viewBox="0 0 24 24">
      <mask className="moon" id="moon-mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle cx="24" cy="10" r="6" fill="black" />
      </mask>
      <circle
        className="sun"
        cx="12"
        cy="12"
        r="6"
        mask="url(#moon-mask)"
        fill="currentColor"
      />
      <g className="sun-beams" stroke="currentColor">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    </svg>
  )
}

export default SunMoon
