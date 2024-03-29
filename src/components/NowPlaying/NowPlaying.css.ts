import { style, keyframes } from '@vanilla-extract/css'
import { box, text } from '~/styles/sprinkles'
import { fonts, rgb, space } from '~/styles/variables.css'

const bounceBar = keyframes({
  '0%': { transform: 'scaleY(0.5)' },
  '50%': { transform: 'scaleY(0.3)' },
  '80%': { transform: 'scaleY(0.8)' },
  '100%': { transform: 'scaleY(0.5)' }
})

export const nowPlaying = style({
  position: 'relative',
  display: 'block',
  width: 'fit-content',
  fontFamily: fonts.sans
})

const styles = {
  nowPlaying,
  inner: style([
    {
      inset: 0,
      paddingLeft: space[3],
      paddingRight: space[4]
    },
    box({
      display: 'flex',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'space-between'
    })
  ]),
  player: style([
    { gap: space[2] },
    box({
      display: 'flex',
      alignItems: 'center'
    })
  ]),
  cover: style([
    {
      color: `rgb(${rgb.fg1} / 0.25)`,
      width: 42,
      height: 42,
      borderRadius: 6
    },
    box({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      flexShrink: 0
    })
  ]),
  details: box({
    display: 'flex',
    flexDirection: 'column'
  }),
  title: style([
    {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      maxWidth: '14ch'
    },
    box({ overflow: 'hidden' }),
    text({
      fontSize: 'sm',
      fontWeight: 'medium',
      lineHeight: 'snug'
    })
  ]),
  artists: style([
    {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      maxWidth: '16ch',
      color: `rgb(${rgb.fg3})`,
      marginTop: space[0.5],
      selectors: {
        [`&.play`]: { display: 'none', color: `rgb(${rgb.accent})` },
        [`${nowPlaying}:hover &.play`]: { display: 'block' },
        [`${nowPlaying}:hover &.artists`]: { display: 'none' }
      }
    },
    box({ overflow: 'hidden' }),
    text({
      fontSize: 'xs',
      lineHeight: 'snug'
    })
  ]),
  bars: style([
    { gap: 1, marginLeft: 5 },
    box({
      display: 'flex',
      alignItems: 'center'
    })
  ]),
  barItem: style({
    animation: bounceBar,
    animationIterationCount: 'infinite',
    background: `rgb(${rgb.brand})`,
    width: 2,
    selectors: {
      [`&:nth-child(1)`]: {
        height: 10,
        animationDelay: '.1s',
        animationTimingFunction: 'cubic-bezier(.77,.7,.14,1)',
        animationDuration: '.75s'
      },
      '&:nth-child(2)': {
        height: 16,
        animationDelay: '.15s',
        animationTimingFunction: 'cubic-bezier(.97,.04,.4,.66)',
        animationDuration: '.775s'
      },
      '&:nth-child(3)': {
        height: 12,
        animationDelay: '.05s',
        animationTimingFunction: 'cubic-bezier(.65,.18,.14,1)',
        animationDuration: '.7s'
      },
      '&:nth-child(4)': {
        height: 14,
        animationDelay: '.2s',
        animationTimingFunction: 'cubic-bezier(.37,.38,.14,1)',
        animationDuration: '.73s'
      }
    }
  })
}

export default styles
