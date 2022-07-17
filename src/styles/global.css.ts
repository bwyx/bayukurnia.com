import { globalStyle, globalFontFace } from '@vanilla-extract/css'
import { rgb } from '~/styles/variables.css'

globalStyle('html', {
  fontFeatureSettings: "'cv02','cv03','cv04','cv11'"
})

globalStyle('body', {
  color: `rgb(${rgb.fg1})`,
  background: `rgb(${rgb.bg})`
})

globalStyle('#__next', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
})

globalFontFace('Inter var', {
  fontWeight: '100 900',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  src: "url(/fonts/Inter-roman-latin.var.woff2) format('woff2')"
})

globalFontFace('Inter var', {
  fontWeight: '100 900',
  fontDisplay: 'swap',
  fontStyle: 'italic',
  src: "url(/fonts/Inter-italic-latin.var.woff2) format('woff2')"
})

globalFontFace('Iosevka', {
  fontDisplay: 'swap',
  fontWeight: 400,
  fontStretch: 'normal',
  fontStyle: 'normal',
  src: "url('/fonts/iosevka-regular.woff2') format('woff2')"
})
