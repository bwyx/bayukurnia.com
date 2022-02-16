import { css } from '~/styles'
import themes from '~/styles/themes'

const prism = css({
  overflowX: 'auto',
  lineHeight: 1,
  code: {
    background: 'none',
    fontFamily: '$mono',
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    lineHeight: 1.6,
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: 4,
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none'
  },

  variants: {
    theme: {
      gruvbox: {
        [`.${themes.dark} &`]: {
          '$$prism-fg': '#ebdbb2',
          '$$prism-bg': '#1d2021',

          '$$prism-fg-selection': '#fbf1c7',
          '$$prism-bg-selection': '#7c6f64',

          $$syntax1: '#a89984',
          $$syntax2: '#fb4934',
          $$syntax3: '#fabd2f',
          $$syntax4: '#d3869b',
          $$syntax5: '#b8bb26'
        },

        [`.${themes.light} &`]: {
          '$$prism-fg': '#3c3836',
          '$$prism-bg': 'rgb($rgb$brand / 0.05)',

          '$$prism-fg-selection': '#282828',
          '$$prism-bg-selection': '#a89984',

          $$syntax1: '#7c6f64',
          $$syntax2: '#9d0006',
          $$syntax3: '#b57614',
          $$syntax4: '#8f3f71',
          $$syntax5: '#797403'
        },

        color: '$$prism-fg',
        background: '$$prism-bg',

        // Selection; note: don't combine -moz prefix, it'll break the on non-Firefox browsers
        'code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection':
          {
            color: '$$prism-fg-selection',
            background: '$$prism-bg-selection'
          },
        'code[class*="language-"]::selection, code[class*="language-"] ::selection':
          {
            color: '$$prism-fg-selection',
            background: '$$prism-bg-selection'
          },

        // Tokens
        '.token.comment, .token.prolog, .token.cdata': { color: '$$syntax1' },
        '.token.delimiter, .token.boolean, .token.keyword, .token.selector, .token.important, .token.atrule':
          {
            color: '$$syntax2'
          },
        '.token.operator, .token.punctuation, .token.attr-name': {
          color: '$$syntax1'
        },
        '.token.tag, .token.tag .punctuation, .token.doctype, .token.builtin': {
          color: '$$syntax3'
        },
        '.token.entity, .token.number, .token.symbol': { color: '$$syntax4' },
        '.token.property, .token.constant, .token.variable': {
          color: '$$syntax2'
        },
        '.token.string, .token.char': { color: '$$syntax5' },
        '.token.attr-value, .token.attr-value .punctuation': {
          color: '$$syntax1'
        },
        '.token.url': { color: '$$syntax5', textDecoration: 'underline' },
        '.token.function': { color: '$$syntax3' },
        '.token.regex': { background: '$$syntax5' },
        '.token.bold': { fontWeight: 'bold' },
        '.token.italic': { fontStyle: 'italic' },
        '.token.inserted': { background: '$$syntax1' },
        '.token.deleted': { background: '$$syntax2' }
      }
    }
  }
})

export default prism
