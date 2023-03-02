import { style } from '@vanilla-extract/css'
import { rgb } from '~/styles/variables.css'

const bayuKurnia = style({ position: 'relative' })

const logo = style({
  width: 'auto',
  height: 40,
  color: `rgb(${rgb.brand})`
})

const strokeBg = style({
  width: 'auto',
  height: 40,
  inset: 0,
  opacity: 0.25,
  position: 'absolute',
  pointerEvents: 'none',
  color: `rgb(${rgb.fg3})`
})

const styles = { logo, strokeBg, bayuKurnia }
export default styles
