import { createVar, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { box, text } from '~/styles/sprinkles'
import { container } from '../primitives'
import { media, rgb, space } from '../variables.css'

export const $ = {
  brown: createVar('colorBrown'),
  red: createVar('colorRed'),
  green: createVar('colorGreen'),
  yellow: createVar('colorYellow'),
  blue: createVar('colorBlue'),
  magenta: createVar('colorMagenta'),
  cyan: createVar('colorCyan'),
  messageColor: createVar('messageColor'),
  statusColor: createVar('statusColor')
}

const connectStatus = recipe({
  base: [
    {
      color: $.statusColor,
      padding: `${space[1]} ${space[4]}`,
      margin: `${space[4]} auto 0`,
      ':before': {
        content: '',
        display: 'inline-block',
        width: 8,
        height: 8,
        marginRight: 5,
        background: $.statusColor,
        borderRadius: '9999px'
      }
    },
    text({ fontSize: 'xs' }),
    box({ borderRadius: '2xl' })
  ],
  variants: {
    status: {
      Connecting: {
        vars: {
          [$.statusColor]: `rgb(${rgb.yellow})`
        },
        backgroundColor: `rgb(${rgb.yellow} / 0.2)`
      },
      Reconnecting: {
        vars: {
          [$.statusColor]: `rgb(${rgb.yellow})`
        },
        backgroundColor: `rgb(${rgb.yellow} / 0.2)`
      },
      Connected: {
        vars: {
          [$.statusColor]: `rgb(${rgb.green})`
        },
        backgroundColor: `rgb(${rgb.green} / 0.2)`
      },
      Disconnecting: {
        vars: {
          [$.statusColor]: `rgb(${rgb.yellow})`
        },
        backgroundColor: `rgb(${rgb.yellow} / 0.2)`
      },
      Disconnected: {
        vars: {
          [$.statusColor]: `rgb(${rgb.red})`
        },
        backgroundColor: `rgb(${rgb.red} / 0.2)`
      }
    }
  }
})

const styles = {
  connectStatus,
  main: style([
    {
      vars: {
        [$.brown]: '#a35e37',
        [$.red]: '#c14a4a',
        [$.green]: '#6c782e',
        [$.yellow]: '#b47109',
        [$.blue]: '#45707a',
        [$.magenta]: '#945e80',
        [$.cyan]: '#4c7a5d'
      }
    },
    box({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexGrow: 1
    })
  ]),
  container: style([
    box({
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    }),
    container({ size: 'small' })
  ]),
  stickyHeader: style([
    {
      top: 0,
      pointerEvents: 'none',
      zIndex: 9999,
      height: 50,
      '@media': {
        [media.lg]: { height: 60 }
      }
    },
    box({
      position: 'sticky',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    })
  ]),
  description: style([
    {
      marginLeft: space[4],
      marginRight: space[4],
      color: `rgb(${rgb.fg3})`
    },
    text({
      textAlign: 'center',
      lineHeight: 'snug',
      fontSize: {
        initial: 'sm',
        sm: 'base'
      }
    })
  ]),
  info: style([
    {
      marginTop: space[4],
      marginLeft: space[4],
      marginRight: space[4],
      color: `rgb(${rgb.fg1})`
    },
    text({
      lineHeight: 'snug',
      textAlign: 'center',
      fontSize: {
        initial: 'xs',
        sm: 'sm'
      }
    })
  ]),
  title: style([
    { marginRight: space[3] },
    text({
      fontWeight: 'bold',
      fontSize: {
        initial: 'sm',
        sm: 'base'
      }
    })
  ]),
  messages: box({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flexGrow: 1
  }),
  messageTime: style([
    {
      margin: `${space[12]} auto 0`,
      color: `rgb(${rgb.fg3} / 0.5)`
    },
    text({ fontSize: 'xs' })
  ]),
  chatInputContainer: style([
    {
      paddingTop: space[4],
      paddingBottom: space[4],
      bottom: 0,
      zIndex: 1
    },
    box({ position: 'sticky' }),
    container({ size: 'small' })
  ]),
  loading: style([
    { marginTop: space[12] },
    box({
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    })
  ])
}

export default styles
