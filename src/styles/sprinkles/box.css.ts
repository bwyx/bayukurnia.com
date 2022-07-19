import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { borderWidths, radii } from '~/styles/variables.css'

const box = defineProperties({
  properties: {
    display: ['none', 'block', 'inline-block', 'flex', 'inline-flex'],
    position: ['relative', 'absolute', 'fixed', 'sticky'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    flexGrow: [0, 1, 2, 3, 4, 5],
    flexShrink: [0],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-between'
    ],
    overflow: ['hidden'],
    visibility: ['visible', 'hidden'],
    borderRadius: radii,
    borderWidth: borderWidths
  }
})

export default createSprinkles(box)
