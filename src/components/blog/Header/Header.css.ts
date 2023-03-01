import { style } from '@vanilla-extract/css'

import { box, text } from '~/styles/sprinkles'
import { rgb, space } from '~/styles/variables.css'

const styles = {
  title: text({
    lineHeight: 'tight',
    fontWeight: 'extrabold',
    fontSize: '2xl'
  }),
  description: style([
    {
      marginTop: space[2],
      color: `rgb(${rgb.fg3})`
    },
    box({ display: 'inline-block' }),
    text({ fontWeight: 'medium', fontSize: 'base' })
  ])
}

export default styles
