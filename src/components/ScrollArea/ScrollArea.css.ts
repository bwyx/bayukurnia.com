import { style } from '@vanilla-extract/css'

import { box } from '~/styles/sprinkles'
import { rgb } from '~/styles/variables.css'

const SCROLLBAR_SIZE = 7

const styles = {
  root: box({
    borderRadius: 'xs',
    overflow: 'hidden'
  }),
  viewport: style({
    width: '100%',
    height: '100%'
  }),
  scrollbar: style([
    {
      // ensures no selection
      userSelect: 'none',
      // disable browser handling of all panning and zooming gestures on touch devices
      touchAction: 'none',
      padding: 2,
      selectors: {
        '&[data-orientation=vertical]': { width: SCROLLBAR_SIZE },
        '&[data-orientation=horizontal]': {
          flexDirection: 'column',
          height: SCROLLBAR_SIZE
        }
      }
    },
    box({ display: 'flex' })
  ]),
  thumb: style({
    flex: 1,
    backgroundColor: `rgb(${rgb.fg1} / 0.2)`,
    // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
    position: 'relative',
    ':before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      minWidth: 44,
      minHeight: 44
    }
  })
}

export default styles
