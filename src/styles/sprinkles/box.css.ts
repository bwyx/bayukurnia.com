import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { borderWidths, radii, media } from '~/styles/variables.css'

const box = defineProperties({
  properties: {
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

const responsiveProperties = defineProperties({
  defaultCondition: 'initial',
  conditions: {
    initial: {},
    sm: { '@media': media.sm },
    md: { '@media': media.md },
    lg: { '@media': media.lg },
    xl: { '@media': media.xl },
    '2xl': { '@media': media['2xl'] }
  },
  properties: {
    display: ['none', 'block', 'inline-block', 'flex', 'inline-flex']
  }
})

export default createSprinkles(box, responsiveProperties)
