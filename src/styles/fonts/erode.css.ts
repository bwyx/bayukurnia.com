import { globalFontFace } from '@vanilla-extract/css'

const fontName = 'Erode var'

/**
* This is a variable font
* You can controll variable axes as shown below:
* font-variation-settings: 'wght' 300.0;
*
* available axes:

* 'wght' (range from 300.0 to 700.0)

*/

globalFontFace(fontName, {
  src: "url('/fonts/Erode-Variable.woff2') format('woff2'), url('/fonts/Erode-Variable.woff') format('woff'), url('/fonts/Erode-Variable.ttf') format('truetype')",
  fontWeight: '300 700',
  fontDisplay: 'swap',
  fontStyle: 'normal'
})

/**
  * This is a variable font
  * You can controll variable axes as shown below:
  * font-variation-settings: 'wght' 300.0;
  *
  * available axes:
  
  * 'wght' (range from 300.0 to 700.0)
  
  */

globalFontFace(fontName, {
  src: "url('/fonts/Erode-VariableItalic.woff2') format('woff2'), url('/fonts/Erode-VariableItalic.woff') format('woff'), url('/fonts/Erode-VariableItalic.ttf') format('truetype')",
  fontWeight: '300 700',
  fontDisplay: 'swap',
  fontStyle: 'italic'
})

export default fontName
