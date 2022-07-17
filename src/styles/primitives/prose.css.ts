// styles from `@tailwindcss/typography`
import { createVar, globalStyle } from '@vanilla-extract/css'

import { em } from '~/styles/utils.css'
import { light, dark } from '~/styles/themes.css'
import { rgb } from '~/styles/variables.css'

const prose = {
  body: createVar('proseBody'),
  headings: createVar('proseHeadings'),
  lead: createVar('proseLead'),
  links: createVar('proseLinks'),
  bold: createVar('proseBold'),
  counters: createVar('proseCounters'),
  bullets: createVar('proseBullets'),
  hr: createVar('proseHr'),
  quotes: createVar('proseQuotes'),
  quoteBorders: createVar('proseQuoteBorders'),
  captions: createVar('proseCaptions'),
  code: createVar('proseCode'),
  preCode: createVar('prosePreCode'),
  preBg: createVar('prosePreBg'),
  thBorders: createVar('proseThBorders'),
  tdBorders: createVar('proseTdBorders')
}

const color = (key: keyof typeof rgb) => `rgb(${rgb[key]})`

globalStyle(`${light} .prose`, {
  vars: {
    [prose.body]: color('text-600'),
    [prose.headings]: color('text-900'),
    [prose.lead]: color('text-600'),
    [prose.links]: color('text-900'),
    [prose.bold]: color('text-900'),
    [prose.counters]: color('text-500'),
    [prose.bullets]: color('text-300'),
    [prose.hr]: color('text-200'),
    [prose.quotes]: color('text-900'),
    [prose.quoteBorders]: color('text-200'),
    [prose.captions]: color('text-500'),
    [prose.code]: color('text-900'),
    [prose.preCode]: color('text-200'),
    [prose.preBg]: color('text-800'),
    [prose.thBorders]: color('text-300'),
    [prose.tdBorders]: color('text-200')
  }
})

globalStyle(`${dark} .prose`, {
  vars: {
    [prose.body]: color('text-400'),
    [prose.headings]: '#fff',
    [prose.lead]: color('text-400'),
    [prose.links]: '#fff',
    [prose.bold]: '#fff',
    [prose.counters]: color('text-400'),
    [prose.bullets]: color('text-600'),
    [prose.hr]: color('text-700'),
    [prose.quotes]: color('text-100'),
    [prose.quoteBorders]: color('text-700'),
    [prose.captions]: color('text-400'),
    [prose.code]: '#fff',
    [prose.preCode]: color('text-300'),
    [prose.preBg]: 'rgb(0 0 0 / 50%)',
    [prose.thBorders]: color('text-600'),
    [prose.tdBorders]: color('text-700')
  }
})

globalStyle('.prose', {
  color: prose.body,
  maxWidth: '65ch'
})

globalStyle('.prose [class~="lead"]', {
  color: prose.lead
})

globalStyle('.prose a', {
  color: prose.links,
  textDecoration: 'underline',
  fontWeight: '500'
})

globalStyle('.prose strong', {
  color: prose.bold,
  fontWeight: '600'
})

globalStyle('.prose a strong', {
  color: 'inherit'
})

globalStyle('.prose blockquote strong', {
  color: 'inherit'
})

globalStyle('.prose thead th strong', {
  color: 'inherit'
})

globalStyle('.prose ol', {
  listStyleType: 'decimal'
})

globalStyle('.prose ol[type="A"]', {
  listStyleType: 'upper-alpha'
})

globalStyle('.prose ol[type="a"]', {
  listStyleType: 'lower-alpha'
})

globalStyle('.prose ol[type="A" s]', {
  listStyleType: 'upper-alpha'
})

globalStyle('.prose ol[type="a" s]', {
  listStyleType: 'lower-alpha'
})

globalStyle('.prose ol[type="I"]', {
  listStyleType: 'upper-roman'
})

globalStyle('.prose ol[type="i"]', {
  listStyleType: 'lower-roman'
})

globalStyle('.prose ol[type="I" s]', {
  listStyleType: 'upper-roman'
})

globalStyle('.prose ol[type="i" s]', {
  listStyleType: 'lower-roman'
})

globalStyle('.prose ol[type="1"]', {
  listStyleType: 'decimal'
})

globalStyle('.prose ul', {
  listStyleType: 'disc'
})

globalStyle('.prose ol > li::marker', {
  fontWeight: '400',
  color: prose.counters
})

globalStyle('.prose ul > li::marker', {
  color: prose.bullets
})

globalStyle('.prose hr', {
  borderColor: prose.hr,
  borderTopWidth: 1
})

globalStyle('.prose blockquote', {
  fontWeight: '500',
  fontStyle: 'italic',
  color: prose.quotes,
  borderLeftWidth: '0.25rem',
  borderLeftColor: prose.quoteBorders,
  quotes: '"\\201C""\\201D""\\2018""\\2019"'
})

globalStyle('.prose blockquote p:first-of-type::before', {
  content: 'open-quote'
})

globalStyle('.prose blockquote p:last-of-type::after', {
  content: 'close-quote'
})

globalStyle('.prose h1', {
  color: prose.headings,
  fontWeight: '800'
})

globalStyle('.prose h1 strong', {
  fontWeight: '900',
  color: 'inherit'
})

globalStyle('.prose h2', {
  color: prose.headings,
  fontWeight: '700'
})

globalStyle('.prose h2 strong', {
  fontWeight: '800',
  color: 'inherit'
})

globalStyle('.prose h3', {
  color: prose.headings,
  fontWeight: '600'
})

globalStyle('.prose h3 strong', {
  fontWeight: '700',
  color: 'inherit'
})

globalStyle('.prose h4', {
  color: prose.headings,
  fontWeight: '600'
})

globalStyle('.prose h4 strong', {
  fontWeight: '700',
  color: 'inherit'
})

// TODO: Figure out how to not need these, it's a merging issue
globalStyle('.prose img', {})

globalStyle('.prose figure > *', {})

globalStyle('.prose figcaption', {
  color: prose.captions
})

globalStyle('.prose code', {
  color: prose.code,
  fontWeight: '600'
})

globalStyle('.prose code::before', {
  content: '"`"'
})

globalStyle('.prose code::after', {
  content: '"`"'
})

globalStyle('.prose a code', {
  color: 'inherit'
})

globalStyle('.prose h1 code', {
  color: 'inherit'
})

globalStyle('.prose h2 code', {
  color: 'inherit'
})

globalStyle('.prose h3 code', {
  color: 'inherit'
})

globalStyle('.prose h4 code', {
  color: 'inherit'
})

globalStyle('.prose blockquote code', {
  color: 'inherit'
})

globalStyle('.prose thead th code', {
  color: 'inherit'
})

globalStyle('.prose pre', {
  color: prose.preCode,
  backgroundColor: prose.preBg,
  overflowX: 'auto',
  fontWeight: '400'
})

globalStyle('.prose pre code', {
  backgroundColor: 'transparent',
  borderWidth: '0',
  borderRadius: '0',
  padding: '0',
  fontWeight: 'inherit',
  color: 'inherit',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  lineHeight: 'inherit'
})

globalStyle('.prose pre code::before', {
  content: 'none'
})

globalStyle('.prose pre code::after', {
  content: 'none'
})

globalStyle('.prose table', {
  width: '100%',
  tableLayout: 'auto',
  textAlign: 'left',
  marginTop: em(32, 16),
  marginBottom: em(32, 16)
})

globalStyle('.prose thead', {
  borderBottomWidth: '1px',
  borderBottomColor: prose.thBorders
})

globalStyle('.prose thead th', {
  color: prose.headings,
  fontWeight: '600',
  verticalAlign: 'bottom'
})

globalStyle('.prose tbody tr', {
  borderBottomWidth: '1px',
  borderBottomColor: prose.tdBorders
})

globalStyle('.prose tbody tr:last-child', {
  borderBottomWidth: '0'
})

globalStyle('.prose tbody td', {
  verticalAlign: 'baseline'
})

globalStyle('.prose tfoot', {
  borderTopWidth: '1px',
  borderTopColor: prose.thBorders
})

globalStyle('.prose tfoot td', {
  verticalAlign: 'top'
})
