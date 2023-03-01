import { style } from '@vanilla-extract/css'
import { media, space } from '~/styles/variables.css'
import { box, text } from '~/styles/sprinkles'
import { calc } from '@vanilla-extract/css-utils'

const styles = {
  header: style({
    paddingTop: space[12],
    '@media': {
      [media.md]: {
        paddingTop: 0
      }
    }
  }),
  avatarOuter: style({
    marginTop: calc.multiply(space[4], -1),
    paddingBottom: space[4]
  }),
  avatar: box({ borderRadius: 'full' }),
  title: text({
    fontSize: '2xl',
    fontWeight: 'bold',
    letterSpacing: 'tight',
    lineHeight: 'tight'
  }),
  description: style([
    {
      marginTop: space[2]
    },
    text({
      fontSize: 'lg',
      fontFamily: 'serif'
    })
  ])
}

export default styles
