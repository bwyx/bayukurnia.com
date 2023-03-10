import { createVar, style, styleVariants } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { box, text } from '~/styles/sprinkles'
import { media, radii, rgb, space } from '~/styles/variables.css'

const baseLink = style([
  {
    paddingTop: space[2.5],
    paddingBottom: space[2.5],
    paddingLeft: calc.subtract(space[4], '2px'),
    paddingRight: space[4],
    color: `rgb(${rgb.fg3})`,
    borderLeft: `2px solid transparent`,
    selectors: {
      "[data-depth='3'] &": { paddingLeft: space[8] },
      "[data-depth='4'] &": { paddingLeft: space[12] },
      "[data-depth='5'] &": { paddingLeft: space[16] },
      "[data-depth='6'] &": { paddingLeft: space[20] }
    },
    ':hover': {
      color: `rgb(${rgb.fg1})`
    }
  },
  box({ display: 'inline-block' }),
  text({
    fontFamily: 'sans',
    fontWeight: 'medium',
    fontSize: {
      initial: 'xs',
      lg: 'sm'
    }
  })
])

const $ = {
  bgOpacity: createVar('bgOpacity')
}

const toc = style({
  overflowY: 'auto',
  transition:
    'max-height .3s cubic-bezier(0,.89,.44,1), padding .3s cubic-bezier(0,.89,.44,1)',
  '@media': {
    [media.md]: {
      maxHeight: 'none'
    }
  }
})

const icon = style({
  position: 'absolute',
  right: space[2],
  transition: '.15s cubic-bezier(0,.89,.44,1)',
  top: '50%'
})

const styles = {
  outer: style({
    vars: {
      [$.bgOpacity]: '1'
    },
    left: '50%',
    bottom: space[4],
    position: 'fixed',
    transform: 'translateX(-50%)',
    borderRadius: radii['2xl'],
    overflow: 'hidden',
    background: `rgb(${rgb.bg} / ${$.bgOpacity})`,
    border: `1px solid rgb(${rgb.fg1} / 0.1)`,
    width: 250,
    zIndex: 50,
    '@supports': {
      '(backdrop-filter: saturate(180%) blur(1rem))': {
        vars: {
          [$.bgOpacity]: '0.75'
        },
        backdropFilter: 'saturate(100%) blur(1rem)',
        '@media': {
          [media.md]: {
            backdropFilter: 'none'
          }
        }
      }
    },
    '@media': {
      [media.md]: {
        top: space[8],
        left: '50%',
        bottom: 'auto',
        position: 'sticky',
        display: 'flex',
        flexDirection: 'column-reverse',
        transform: 'none',
        padding: 0,
        borderRadius: 0,
        background: 'none',
        border: 0
      },
      [media.lg]: {
        top: space[32]
      }
    }
  }),
  toc: styleVariants({
    show: [toc, { maxHeight: 'min(450px, 50vh)', paddingTop: space[4] }],
    hide: [toc, { maxHeight: 0, paddingTop: 0 }]
  }),
  titleWrapper: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: space[1],
    paddingLeft: space[4],
    '@media': {
      [media.lg]: {
        marginBottom: space[2]
      }
    }
  }),
  currentHeading: style([
    {
      position: 'relative',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '16ch',
      padding: `${space[1.5]} ${space[3]}`,
      paddingRight: space[8],
      marginLeft: space[3],
      background: `rgb(${rgb.bg})`,
      borderRadius: radii.xl,
      '@media': {
        [media.md]: {
          display: 'none'
        }
      }
    },
    box({ overflow: 'hidden' }),
    text({
      fontSize: {
        initial: 'xs',
        lg: 'sm'
      },
      textAlign: 'left',
      fontFamily: 'sans',
      fontWeight: 'medium',
      letterSpacing: 'tight'
    })
  ]),
  currentHeadingIcon: styleVariants({
    rotate: [icon, { transform: 'translateY(-50%) scaleY(-1)' }],
    normal: [icon, { transform: 'translateY(-50%)' }]
  }),
  title: style([
    {
      whiteSpace: 'nowrap',
      marginTop: -2
    },
    text({
      fontSize: {
        initial: 'sm',
        lg: 'base'
      },
      fontFamily: 'sans',
      fontWeight: 'semibold',
      letterSpacing: 'tight'
    })
  ]),
  ul: box({ display: 'flex', flexDirection: 'column' }),
  li: box({ display: 'flex', flexDirection: 'column' }),
  a: styleVariants({
    active: [
      baseLink,
      {
        color: `rgb(${rgb.fg1})`,
        borderColor: `rgb(${rgb.brand})`,
        background: `rgb(${rgb.brand} / 0.1)`
      }
    ],
    inactive: [baseLink, {}]
  })
}

export default styles
