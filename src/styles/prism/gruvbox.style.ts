const gruvboxPrism = {
  'code[class*="language-"], pre[class*="language-"]': {
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
  'pre[class*="language-"]': {
    padding: '1rem 6vw',
    overflow: 'auto',
    margin: '.5em -6vw',
    borderRadius: -0,
    '@sm': {
      margin: '.5em 0',
      padding: '1rem',
      borderRadius: '0.3em'
    }
  },
  // Gruvox Light
  '@media (prefers-color-scheme: light)': {
    'code[class*="language-"], pre[class*="language-"]': {
      color: '#3c3836'
    },
    'pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection, code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection':
      {
        color: '#282828',
        background: '#a89984'
      },
    'pre[class*="language-"]::selection, pre[class*="language-"] ::selection, code[class*="language-"]::selection, code[class*="language-"] ::selection':
      {
        color: '#282828',
        background: '#a89984'
      },
    ':not(pre) > code[class*="language-"], pre[class*="language-"]': {
      background: 'rgb($brand / 10%)'
    },
    ':not(pre) > code[class*="language-"]': {
      padding: '0.1em',
      borderRadius: '0.3em'
    },
    '.token.comment, .token.prolog, .token.cdata': { color: '#7c6f64' },
    '.token.delimiter, .token.boolean, .token.keyword, .token.selector, .token.important, .token.atrule':
      {
        color: '#9d0006'
      },
    '.token.operator, .token.punctuation, .token.attr-name': {
      color: '#7c6f64'
    },
    '.token.tag, .token.tag .punctuation, .token.doctype, .token.builtin': {
      color: '#b57614'
    },
    '.token.entity, .token.number, .token.symbol': { color: '#8f3f71' },
    '.token.property, .token.constant, .token.variable': { color: '#9d0006' },
    '.token.string, .token.char': { color: '#797403' },
    '.token.attr-value, .token.attr-value .punctuation': { color: '#7c6f64' },
    '.token.url': { color: '#797403', textDecoration: 'underline' },
    '.token.function': { color: '#b57614' },
    '.token.regex': { background: '#797403' },
    '.token.bold': { fontWeight: 'bold' },
    '.token.italic': { fontStyle: 'italic' },
    '.token.inserted': { background: '#7c6f64' },
    '.token.deleted': { background: '#9d0006' }
  },
  // Gruvbox Dark
  '@media (prefers-color-scheme: dark)': {
    'code[class*="language-"], pre[class*="language-"]': {
      color: '#ebdbb2'
    },
    'pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection, code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection':
      {
        color: '#fbf1c7',
        background: '#7c6f64'
      },
    'pre[class*="language-"]::selection, pre[class*="language-"] ::selection, code[class*="language-"]::selection, code[class*="language-"] ::selection':
      {
        color: '#fbf1c7',
        background: '#7c6f64'
      },
    ':not(pre) > code[class*="language-"], pre[class*="language-"]': {
      background: '#1d2021'
    },
    ':not(pre) > code[class*="language-"]': {
      padding: '0.1em',
      borderRadius: '0.3em'
    },
    '.token.comment, .token.prolog, .token.cdata': { color: '#a89984' },
    '.token.delimiter, .token.boolean, .token.keyword, .token.selector, .token.important, .token.atrule':
      {
        color: '#fb4934'
      },
    '.token.operator, .token.punctuation, .token.attr-name': {
      color: '#a89984'
    },
    '.token.tag, .token.tag .punctuation, .token.doctype, .token.builtin': {
      color: '#fabd2f'
    },
    '.token.entity, .token.number, .token.symbol': { color: '#d3869b' },
    '.token.property, .token.constant, .token.variable': { color: '#fb4934' },
    '.token.string, .token.char': { color: '#b8bb26' },
    '.token.attr-value, .token.attr-value .punctuation': { color: '#a89984' },
    '.token.url': { color: '#b8bb26', textDecoration: 'underline' },
    '.token.function': { color: '#fabd2f' },
    '.token.regex': { background: '#b8bb26' },
    '.token.bold': { fontWeight: 'bold' },
    '.token.italic': { fontStyle: 'italic' },
    '.token.inserted': { background: '#a89984' },
    '.token.deleted': { background: '#fb4934' }
  }
}

export default gruvboxPrism
