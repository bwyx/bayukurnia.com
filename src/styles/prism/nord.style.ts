const prismNord = {
  'code[class*="language-"],\n pre[class*="language-"]': {
    color: '#f8f8f2',
    background: 'none',
    fontFamily:
      "'Iosevka Term Curly', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: 1.5,
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: 4,
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none'
  },
  'pre[class*="language-"]': {
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto',
    borderRadius: '0.3em'
  },
  ':not(pre) > code[class*="language-"],\n pre[class*="language-"]': {
    background: '#2E3440'
  },
  ':not(pre) > code[class*="language-"]': {
    padding: '.1em',
    borderRadius: '.3em',
    whiteSpace: 'normal'
  },
  '.token.comment,\n .token.prolog,\n .token.doctype,\n .token.cdata': {
    color: '#636f88'
  },
  '.token.punctuation': { color: '#81A1C1' },
  '.namespace': { opacity: 0.7 },
  '.token.property,\n .token.tag,\n .token.constant,\n .token.symbol,\n .token.deleted':
    {
      color: '#81A1C1'
    },
  '.token.number': { color: '#B48EAD' },
  '.token.boolean': { color: '#81A1C1' },
  '.token.selector,\n .token.attr-name,\n .token.string,\n .token.char,\n .token.builtin,\n .token.inserted':
    {
      color: '#A3BE8C'
    },
  '.token.operator,\n .token.entity,\n .token.url,\n .language-css .token.string,\n .style .token.string,\n .token.variable':
    {
      color: '#81A1C1'
    },
  '.token.atrule,\n .token.attr-value,\n .token.function,\n .token.class-name':
    {
      color: '#88C0D0'
    },
  '.token.keyword': { color: '#81A1C1' },
  '.token.regex,\n .token.important': { color: '#EBCB8B' },
  '.token.important,\n .token.bold': { fontWeight: 'bold' },
  '.token.italic': { fontStyle: 'italic' },
  '.token.entity': { cursor: 'help' }
}

export default prismNord
