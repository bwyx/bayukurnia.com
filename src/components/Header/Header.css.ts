import { createVar, style } from '@vanilla-extract/css'
import { container } from '~/styles/primitives'
import { box } from '~/styles/sprinkles'
import { media, rgb, space } from '~/styles/variables.css'

const $ = {
  headerOpacity: createVar('headerOpacity')
}

const styles = {
  header: style([
    {
      vars: {
        [$.headerOpacity]: '1'
      },
      marginTop: space[4],
      background: `rgb(${rgb.bg} / ${$.headerOpacity})`,
      position: 'sticky',
      top: 0,
      zIndex: 50,
      height: 50,
      width: '100%',
      borderBottom: '1px solid transparent',
      borderImage: `linear-gradient(to right, rgb(${rgb.bg} / 5%), rgb(${rgb.bg} / 80%) 30%, rgb(${rgb.bg} / 20%) 80%, rgb(${rgb.bg} / 90%) 90%)`,
      '@supports': {
        '(backdrop-filter: saturate(180%) blur(1rem))': {
          vars: {
            [$.headerOpacity]: '0.6'
          },
          backdropFilter: 'saturate(180%) blur(1rem)'
        }
      },
      '@media': {
        [media.lg]: {
          height: 60
        }
      }
    },
    box({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    })
  ]),
  container: style([
    container({ size: 'large' }),
    box({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    })
  ]),
  link: style({
    color: `rgb(${rgb.brand})`,
    display: 'inherit',
    ':hover': {
      color: `rgb(${rgb.accent})`
    }
  }),
  logo: style({
    width: 'auto',
    height: 35,
    '@media': {
      [media.lg]: {
        height: 40
      }
    }
  })
}

export default styles
