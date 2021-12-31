import { globalCss } from '~/styles'

export const globalStyles = globalCss({
  '@import': ['/css/preflight.css'],
  '@font-face': [
    {
      fontFamily: 'Inter var',
      fontWeight: '100 900',
      fontDisplay: 'swap',
      fontStyle: 'normal',
      src: "url(/fonts/Inter-roman-latin.var.woff2) format('woff2')"
    },
    {
      fontFamily: 'Inter var',
      fontWeight: '100 900',
      fontDisplay: 'swap',
      fontStyle: 'italic',
      src: "url(/fonts/Inter-italic-latin.var.woff2) format('woff2')"
    }
  ],
  html: {
    fontFeatureSettings: "'cv02','cv03','cv04','cv11'"
  },
  body: {
    fontFamily: '$sans',
    fontSize: '$lg',
    color: '$fg',
    lineHeight: '1.75',
    width: '100vw',
    overflowX: 'hidden'
  },
  '#__next': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
})
