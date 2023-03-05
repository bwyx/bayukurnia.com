import { style } from '@vanilla-extract/css'
import { rgb, space } from '~/styles/variables.css'

const styles = {
  ul: style({
    marginLeft: space[4]
  }),
  item: style({}),
  link: style({
    fontWeight: 450,
    color: `rgb(${rgb.fg3})`,
    ':hover': {
      color: `rgb(${rgb.fg1})`
    }
  })
}

export default styles
