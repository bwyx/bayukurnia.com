import { style } from '@vanilla-extract/css'
import { box } from '~/styles/sprinkles'

const styles = {
  visuallyHidden: style([
    {
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      wordWrap: 'normal'
    },
    box({
      position: 'absolute',
      overflow: 'hidden'
    })
  ])
}

export default styles
