import { createVar, globalStyle, style } from '@vanilla-extract/css'

import type { CSSProperties } from '@vanilla-extract/css'
import { media } from '~/styles/variables.css'

const $ = {
  fill: createVar('sunMoonFill'),
  fillHover: createVar('sunMoonFillHover')
}

const sunMoon = style({
  vars: {
    [$.fill]: '#e6bf13',
    [$.fillHover]: '#ffc120'
  },
  width: 20,
  height: 20
})

const moon = style({})
const sun = style({})
const sunBeams = style({})

globalStyle(`${sunMoon} > :is(${moon}, ${sun}, ${sunBeams})`, {
  transformOrigin: 'center center'
})

globalStyle(`${sunMoon} > :is(${moon}, ${sun})`, {
  fill: $.fill
})

globalStyle(`${sunMoon} > ${sunBeams}`, {
  stroke: $.fill,
  strokeWidth: 2
})

// Dark
globalStyle(`.dark ${sunMoon} > ${sun}`, {
  transform: 'scale(1.75)'
})

globalStyle(`.dark ${sunMoon} > ${sunBeams}`, {
  opacity: 0
})

globalStyle(`.dark ${sunMoon} > ${moon} > circle`, {
  transform: 'translate(-7px)',

  '@supports': {
    '(cx: 1)': {
      transform: 'translateX(0)',
      cx: 17
    } as CSSProperties
  }
})

// MotionSafe
globalStyle(`${sunMoon} > ${sun}`, {
  '@media': {
    [media.motionSafe]: {
      transition: 'transform 0.5s cubic-bezier(0.5, 1.25, 0.75, 1.25)'
    }
  }
})

globalStyle(`${sunMoon} > ${sunBeams}`, {
  '@media': {
    [media.motionSafe]: {
      transition:
        'transform 0.5s cubic-bezier(0.5, 1.5, 0.75, 1.25), opacity 0.5s cubic-bezier(0.25, 0, 0.3, 1)'
    }
  }
})

globalStyle(`${sunMoon} ${moon} > circle`, {
  '@media': {
    [media.motionSafe]: {
      '@supports': {
        '(cx: 1)': {
          transition: `cx 0.25s cubic-bezier(0, 0, 0, 1)`
        }
      }
    }
  }
})

// Dark MotionSafe
globalStyle(`.dark ${sunMoon} > ${sun}`, {
  '@media': {
    [media.motionSafe]: {
      transform: 'scale(1.75)',
      transitionTimingFunction: 'cubic-bezier(0.25, 0, 0.3, 1)',
      transitionDuration: '0.25s'
    }
  }
})

globalStyle(`.dark ${sunMoon} > ${sunBeams}`, {
  '@media': {
    [media.motionSafe]: {
      transform: 'rotateZ(-25deg)',
      transitionDuration: '0.15s'
    }
  }
})

globalStyle(`.dark ${sunMoon} > ${moon} > circle`, {
  '@media': {
    [media.motionSafe]: {
      transitionDelay: '0.25s',
      transitionDuration: '0.5s'
    }
  }
})

const styles = { sunMoon, moon, sun, sunBeams }
export default styles
