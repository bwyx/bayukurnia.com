import { style } from '@vanilla-extract/css'
import sprinkles from './sprinkles.css'

const styles = {
  button: style([
    {
      padding: '0.5rem 1.5rem',
      fontWeight: '500',
      borderRadius: '999px'
    },
    sprinkles({
      color: 'white',
      backgroundColor: {
        idle: 'rebeccapurple',
        hover: 'blueviolet'
      }
    })
  ])
}

export default styles
