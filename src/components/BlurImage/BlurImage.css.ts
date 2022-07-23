import { style } from '@vanilla-extract/css'

const styles = {
  img: style({
    transitionDuration: '0.5s',
    transitionTimingFunction: 'ease-in-out'
  }),
  imgBlur: style({
    willChange: 'transform',
    transform: 'scale(1.05)'
  })
}

export default styles
