import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'

const properties = defineProperties({
  properties: {
    color: ['white']
  }
})

const interactiveProperties = defineProperties({
  defaultCondition: 'idle',
  conditions: {
    idle: {},
    hover: { selector: '&:hover' }
  },
  properties: {
    backgroundColor: ['rebeccapurple', 'blueviolet']
  }
})

export default createSprinkles(properties, interactiveProperties)
