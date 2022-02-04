import { css } from '~/styles'

const styles = {
  img: css({
    transitionDuration: '0.5s',
    transitionTimingFunction: 'ease-in-out'
  })(),
  imgBlur: css({
    willChange: 'transform',
    transform: 'scale(1.05)'
  })()
}

export default styles
