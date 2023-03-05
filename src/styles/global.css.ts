import { globalStyle, globalFontFace } from '@vanilla-extract/css'
import { rgb } from '~/styles/variables.css'

import '~/styles/preflight.css'
import '~/styles/themes.css'
import '~/styles/fonts/plusJakartaSans.css'
import '~/styles/fonts/erode.css'

globalStyle('html', {
  fontFeatureSettings: "'cv02','cv03','cv04','cv11'",
  scrollBehavior: 'smooth',
  scrollPaddingTop: 128
})

globalStyle('body', {
  color: `rgb(${rgb.fg1})`,
  background: `rgb(${rgb.bg})`,
  overflowX: 'hidden'
})

globalStyle('.turbo-progress-bar', {
  background: `rgb(${rgb.brand})`
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
