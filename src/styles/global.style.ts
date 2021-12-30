import { globalCss } from '@stitches/react'

const globalStyles = globalCss({
  html: {
    fontFeatureSettings: "'cv02','cv03','cv04','cv11'"
  },
  body: {
    fontFamily: '$sans',
    color: '$text',
    lineHeight: '1.75'
  },
  '#__next': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
})

export default globalStyles
