import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { fonts, radii, rgb, space } from '~/styles/variables.css'
import { dark, light } from '../themes.css'

const prism = style({})
export default prism

const $ = {
  lineNumber: createVar('prismLineNumber'),
  lineInserted: createVar('prismLineInserted'),
  lineDeleted: createVar('prismLineDeleted'),
  prefixInserted: createVar('prismPrefixInserted'),
  prefixDeleted: createVar('prismPrefixDeleted'),

  foreground: createVar('prismForeground'),
  foregroundDimmed: createVar('prismForegroundDimmed'),
  background: createVar('prismBackground'),

  foregroundSelection: createVar('prismForegroundSelection'),
  backgroundSelection: createVar('prismBackgroundSelection'),

  syntax1: createVar('prismSyntax1'),
  syntax2: createVar('prismSyntax2'),
  syntax3: createVar('prismSyntax3'),
  syntax4: createVar('prismSyntax4'),
  syntax5: createVar('prismSyntax5')
}

globalStyle(prism, {
  overflowX: 'auto',
  lineHeight: 1,
  borderRadius: radii.lg,
  // Fallback variables
  vars: {
    [$.lineNumber]: '#888',
    [$.lineInserted]: 'rgba(16, 185, 129, 0.2)',
    [$.lineDeleted]: 'rgba(239, 68, 68, 0.2)',
    [$.prefixInserted]: 'rgba(16, 185, 129, 1)',
    [$.prefixDeleted]: 'rgba(239, 68, 68, 1)'
  }
})

globalStyle(`${prism} code`, {
  display: 'block',
  width: 'fit-content',
  minWidth: '100%',
  background: 'none',
  fontFamily: fonts.mono,
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
  hyphens: 'none',
  paddingTop: space[4],
  paddingBottom: space[4]
})

globalStyle(`${prism} .code-line`, {
  display: 'block',
  paddingLeft: space[4],
  paddingRight: space[6]
})

globalStyle(`${prism} .code-line.inserted`, {
  backgroundColor: $.lineInserted
})

globalStyle(`${prism} .code-line.deleted`, {
  backgroundColor: $.lineDeleted
})

globalStyle(`${prism} .line-number::before`, {
  paddingRight: space[4],
  color: $.lineNumber,
  display: 'inline-block',
  textAlign: 'right',
  content: 'attr(line)'
})

globalStyle(`${prism} .prefix`, {
  padding: '0 0.5rem'
})

globalStyle(`${prism} .prefix.inserted`, {
  color: $.prefixInserted
})

globalStyle(`${prism} .prefix.deleted`, {
  color: $.prefixDeleted
})

// Gruvbox
globalStyle(`${light} ${prism}`, {
  vars: {
    [$.foreground]: '#3c3836',
    [$.foregroundDimmed]: 'rgba(60, 56, 54, 0.5)',
    [$.background]: `rgb(${rgb.brand}/0.05)`,

    [$.foregroundSelection]: '#282828',
    [$.backgroundSelection]: '#a89984',

    [$.lineInserted]: 'rgba(121, 116, 3, 0.2)',
    [$.lineDeleted]: 'rgba(157, 0, 6, 0.2)',

    [$.prefixInserted]: 'rgba(121, 116, 3, 1)',
    [$.prefixDeleted]: 'rgba(157, 0, 6, 1)',

    [$.lineNumber]: 'rgba(124, 111, 100, 0.3)',

    [$.syntax1]: '#7c6f64',
    [$.syntax2]: '#9d0006',
    [$.syntax3]: '#b57614',
    [$.syntax4]: '#8f3f71',
    [$.syntax5]: '#797403'
  }
})

globalStyle(`${dark} ${prism}`, {
  vars: {
    [$.foreground]: '#ebdbb2',
    [$.foregroundDimmed]: 'rgba(235, 219, 178, 0.5)',
    [$.background]: '#1d2021',

    [$.foregroundSelection]: '#fbf1c7',
    [$.backgroundSelection]: '#7c6f64',

    [$.lineInserted]: 'rgba(184, 187, 38, 0.2)',
    [$.lineDeleted]: 'rgba(251, 73, 52, 0.2)',

    [$.prefixInserted]: 'rgba(184, 187, 38, 1)',
    [$.prefixDeleted]: 'rgba(251, 73, 52, 1)',

    [$.lineNumber]: 'rgba(168, 153, 132, 0.3)',

    [$.syntax1]: '#a89984',
    [$.syntax2]: '#fb4934',
    [$.syntax3]: '#fabd2f',
    [$.syntax4]: '#d3869b',
    [$.syntax5]: '#b8bb26'
  }
})

globalStyle(prism, {
  color: $.foregroundDimmed,
  background: $.background
})

globalStyle(
  `${prism} code[class*="language-"]::-moz-selection,
   ${prism} code[class*="language-"] ::-moz-selection`,
  {
    color: $.foregroundSelection,
    background: $.backgroundSelection
  }
)

globalStyle(
  `${prism} code[class*="language-"]::selection,
   ${prism} code[class*="language-"] ::selection`,
  {
    color: $.foregroundSelection,
    background: $.backgroundSelection
  }
)

// Gruvbox Colors
const highlight = `${prism} .highlight-line`

globalStyle(highlight, {
  color: $.foreground
})

globalStyle(
  `${highlight} .token.comment,
   ${highlight} .token.prolog,
   ${highlight} .token.cdata`,
  { color: $.syntax1 }
)

globalStyle(
  `${highlight} .token.delimiter, 
   ${highlight} .token.boolean, 
   ${highlight} .token.keyword, 
   ${highlight} .token.selector, 
   ${highlight} .token.important, 
   ${highlight} .token.atrule`,
  { color: $.syntax2 }
)

globalStyle(
  `${highlight} .token.operator, 
   ${highlight} .token.punctuation, 
   ${highlight} .token.attr-name`,
  { color: $.syntax1 }
)

globalStyle(
  `${highlight} .token.tag,
   ${highlight} .token.tag .punctuation,
   ${highlight} .token.doctype,
   ${highlight} .token.builtin`,
  { color: $.syntax3 }
)

globalStyle(
  `${highlight} .token.entity,
   ${highlight} .token.number,
   ${highlight} .token.symbol`,
  { color: $.syntax4 }
)

globalStyle(
  `${highlight} .token.property,
   ${highlight} .token.constant,
   ${highlight} .token.variable`,
  { color: $.syntax2 }
)

globalStyle(
  `${highlight} .token.string, 
   ${highlight} .token.char`,
  { color: $.syntax5 }
)

globalStyle(
  `${highlight} .token.attr-value,
   ${highlight} .token.attr-value .punctuation`,
  { color: $.syntax1 }
)

globalStyle(`${highlight} .token.url`, {
  color: $.syntax5,
  textDecoration: 'underline'
})

globalStyle(`${highlight} .token.function`, { color: $.syntax3 })
globalStyle(`${highlight} .token.regex`, { background: $.syntax5 })

globalStyle(`${highlight} .token.bold`, { fontWeight: 'bold' })
globalStyle(`${highlight} .token.italic`, { fontStyle: 'italic' })

globalStyle(
  `${highlight} .token.scheme,
   ${highlight} .token.authority-delimiter,
   ${highlight} .token.query-delimiter,
   ${highlight} .token.pair-delimiter`,
  { color: $.syntax1 }
)

globalStyle(`${highlight} .token.path`, { color: $.syntax3 })
globalStyle(`${highlight} .token.pair`, { color: $.syntax4 })
globalStyle(`${highlight} .token.value`, { color: $.syntax5 })
