import { style } from '@vanilla-extract/css'
import { container } from '../primitives'
import { space } from '../variables.css'

const styles = {
  container: style([
    {
      marginTop: space[4],
      marginBottom: space[4]
    },
    container({ size: 'small' })
  ])
}

export default styles
