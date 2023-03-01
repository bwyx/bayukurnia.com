import { style } from '@vanilla-extract/css'

import { space } from '~/styles/variables.css'

const styles = {
  footer: style({
    paddingTop: space[20],
    paddingBottom: space[20],
    overflow: 'hidden'
  })
}

export default styles
