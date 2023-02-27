import { globalFontFace } from '@vanilla-extract/css'

const fontName = 'Plus Jakarta Sans var'

// Plus Jakarta Sans Normal

globalFontFace(fontName, {
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '200 800',
  src: "url('/fonts/plus-jakarta-sans-cyrillic-ext-variable-wghtOnly-normal.woff2') format('woff2')",
  unicodeRange:
    'U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F'
})

globalFontFace(fontName, {
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '200 800',
  src: "url('/fonts/plus-jakarta-sans-latin-variable-wghtOnly-normal.woff2') format('woff2')",
  unicodeRange:
    'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'
})

globalFontFace(fontName, {
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '200 800',
  src: "url('/fonts/plus-jakarta-sans-latin-ext-variable-wghtOnly-normal.woff2') format('woff2')",
  unicodeRange:
    'U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF'
})

globalFontFace(fontName, {
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '200 800',
  src: "url('/fonts/plus-jakarta-sans-vietnamese-variable-wghtOnly-normal.woff2') format('woff2')",
  unicodeRange:
    'U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB'
})

// Plus Jakarta Sans Italic

globalFontFace(fontName, {
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: '200 800',
  src: "url('/fonts/plus-jakarta-sans-cyrillic-ext-variable-wghtOnly-italic.woff2') format('woff2')",
  unicodeRange:
    'U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F'
})

globalFontFace(fontName, {
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: '200 800',
  src: "url('/fonts/plus-jakarta-sans-latin-variable-wghtOnly-italic.woff2') format('woff2')",
  unicodeRange:
    'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'
})

globalFontFace(fontName, {
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: '200 800',
  src: "url('/fonts/plus-jakarta-sans-latin-ext-variable-wghtOnly-italic.woff2') format('woff2')",
  unicodeRange:
    'U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF'
})

globalFontFace(fontName, {
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: '200 800',
  src: "url('/fonts/plus-jakarta-sans-vietnamese-variable-wghtOnly-italic.woff2') format('woff2')",
  unicodeRange:
    'U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB'
})

export default fontName
