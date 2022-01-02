import { globalCss } from '~/styles'

export const globalStyles = globalCss({
  // Fonts
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
    },
    {
      fontFamily: "'Iosevka'",
      fontDisplay: 'swap',
      fontWeight: 400,
      fontStretch: 'normal',
      fontStyle: 'normal',
      src: "url('/fonts/iosevka-regular.woff2') format('woff2')"
    },
    {
      fontFamily: "'Iosevka'",
      fontDisplay: 'swap',
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      src: "url('/fonts/iosevka-semibold.woff2') format('woff2')"
    }
  ],

  // Preflight
  '*, ::before, ::after': {
    boxSizing: 'border-box',
    borderWidth: '0',
    borderStyle: 'solid',
    borderColor: 'currentColor'
    // '--tw-border-opacity': '1',
    // borderColor: 'rgba(229, 231, 235, var(--tw-border-opacity))'
  },
  html: {
    MozTabSize: '4',
    tabSize: 4,
    lineHeight: 1.5,
    WebkitTextSizeAdjust: '100%',
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontFeatureSettings: "'cv02','cv03','cv04','cv11'"
  },
  body: {
    margin: 0,
    fontFamily: '$sans',
    fontSize: '$lg',
    color: '$fg',
    background: 'rgb($bg)',
    lineHeight: 1.75,
    width: '100vw',
    overflowX: 'hidden'
  },
  hr: { height: '0', color: 'inherit', borderTopWidth: '1px' },
  'abbr[title]': {
    WebkitTextDecoration: 'underline dotted',
    textDecoration: 'underline dotted'
  },
  'b, strong': { fontWeight: 'bolder' },
  'code, kbd, samp, pre': {
    fontFamily:
      "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
    fontSize: '1em'
  },
  small: { fontSize: '80%' },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline'
  },
  sub: { bottom: '-0.25em' },
  sup: { top: '-0.5em' },
  table: {
    textIndent: '0',
    borderColor: 'inherit',
    borderCollapse: 'collapse'
  },
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: 'inherit',
    margin: '0',
    padding: '0',
    color: 'inherit'
  },
  'button, select': { textTransform: 'none' },
  "button, [type='button'], [type='reset'], [type='submit']": {
    WebkitAppearance: 'button'
  },
  '::-moz-focus-inner': { borderStyle: 'none', padding: '0' },
  ':-moz-focusring': { outline: 'auto' },
  ':-moz-ui-invalid': { boxShadow: 'none' },
  legend: { padding: '0' },
  progress: { verticalAlign: 'baseline' },
  '::-webkit-inner-spin-button, ::-webkit-outer-spin-button': {
    height: 'auto'
  },
  "[type='search']": { WebkitAppearance: 'textfield', outlineOffset: '-2px' },
  '::-webkit-search-decoration': { WebkitAppearance: 'none' },
  '::-webkit-file-upload-button': {
    WebkitAppearance: 'button',
    font: 'inherit'
  },
  summary: { display: 'list-item' },
  'blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre': {
    margin: '0'
  },
  button: { backgroundColor: 'transparent', backgroundImage: 'none' },
  fieldset: { margin: '0', padding: '0' },
  'ol, ul': { listStyle: 'none', margin: '0', padding: '0' },
  img: { borderStyle: 'solid' },
  textarea: { resize: 'vertical' },
  'input::placeholder, textarea::placeholder': {
    opacity: 1,
    color: '#9ca3af'
  },
  'button, [role="button"]': { cursor: 'pointer' },
  'h1, h2, h3, h4, h5, h6': { fontSize: 'inherit', fontWeight: 'inherit' },
  a: { color: 'inherit', textDecoration: 'inherit' },
  'pre, code, kbd, samp': {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  'img, svg, video, canvas, audio, iframe, embed, object': {
    display: 'block',
    verticalAlign: 'middle'
  },
  'img, video': { maxWidth: '100%', height: 'auto' },
  '[hidden]': { display: 'none' },

  '#__next': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
})
