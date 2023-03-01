import { style } from '@vanilla-extract/css'

import { text } from '~/styles/sprinkles'
import { media, rgb, space } from '~/styles/variables.css'

const styles = {
  postTitle: text({
    lineHeight: 'tight',
    fontWeight: 'extrabold',
    fontSize: '2xl'
  }),
  publishedDate: style([
    {
      color: `rgb(${rgb.fg3})`,
      gridArea: 'date'
    },
    text({
      fontWeight: 'medium',
      fontSize: 'base'
    })
  ])
}

export default styles
