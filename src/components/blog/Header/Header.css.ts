import { style } from '@vanilla-extract/css'

import { text } from '~/styles/sprinkles'
import { rgb, space } from '~/styles/variables.css'

const styles = {
  title: text({
    lineHeight: 'tight',
    fontWeight: 'extrabold',
    fontSize: '2xl'
  }),
  description: style([
    {
      color: `rgb(${rgb.fg3})`
    },
    text({
      fontWeight: 'medium',
      fontSize: 'base'
    })
  ])
}

export default styles
