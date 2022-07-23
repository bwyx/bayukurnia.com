import { createVar, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'

import { box, text } from '~/styles/sprinkles'
import { media, rgb, space } from '~/styles/variables.css'

const $ = {
  linkColorOpacity: createVar()
}

const styles = {
  footer: style({
    paddingTop: space[32],
    paddingBottom: space[8],
    overflow: 'hidden'
  }),
  section: style({
    display: 'flex',
    flexDirection: 'column-reverse',
    '@media': {
      [media.sm]: {
        alignItems: 'flex-start',
        flexDirection: 'row'
      }
    }
  }),
  links: style([
    {
      marginTop: space[16],
      '@media': {
        [media.sm]: { marginTop: 0 }
      }
    },
    box({
      display: 'flex',
      flexGrow: 1
    })
  ]),
  linksList: style({ flexBasis: '50%' }),
  linksItem: style({
    marginTop: space[4],
    ':first-child': {
      marginTop: 0
    },
    '@media': {
      [media.sm]: {
        marginTop: space[6]
      }
    }
  }),
  linksItemLink: style([
    {
      vars: {
        [$.linkColorOpacity]: '0.7'
      },
      paddingTop: space[5],
      paddingBottom: space[5],
      paddingLeft: space[4],
      paddingRight: space[4],
      marginLeft: calc.multiply(space[4], -1),
      marginRight: calc.multiply(space[4], -1),
      color: `rgb(${rgb.fg3} / ${$.linkColorOpacity})`,
      ':hover': {
        vars: {
          [$.linkColorOpacity]: '0.4'
        }
      }
    },
    text({
      fontSize: {
        initial: 'sm',
        sm: 'base'
      }
    })
  ]),
  credit: style([
    {
      marginTop: space[4],
      color: `rgb(${rgb.fg3} / 0.4)`,
      '@media': {
        [media.sm]: {
          marginTop: space[8]
        }
      }
    },
    text({ fontSize: 'xs' })
  ]),
  creditLink: style({
    paddingTop: space[5],
    paddingBottom: space[5],
    ':hover': {
      color: `rgb(${rgb.brand})`
    }
  })
}

export default styles
