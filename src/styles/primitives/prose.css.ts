// styles from `@tailwindcss/typography`
import { globalStyle } from '@vanilla-extract/css'

import { em } from '~/styles/utils.css'

globalStyle('.prose', {
  color: 'var(--tw-prose-body)',
  maxWidth: '65ch'
})

globalStyle('.prose [class~="lead"]', {
  color: 'var(--tw-prose-lead)'
})

globalStyle('.prose a', {
  color: 'var(--tw-prose-links)',
  textDecoration: 'underline',
  fontWeight: '500'
})

globalStyle('.prose strong', {
  color: 'var(--tw-prose-bold)',
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
  color: 'var(--tw-prose-counters)'
})

globalStyle('.prose ul > li::marker', {
  color: 'var(--tw-prose-bullets)'
})

globalStyle('.prose hr', {
  borderColor: 'var(--tw-prose-hr)',
  borderTopWidth: 1
})

globalStyle('.prose blockquote', {
  fontWeight: '500',
  fontStyle: 'italic',
  color: 'var(--tw-prose-quotes)',
  borderLeftWidth: '0.25rem',
  borderLeftColor: 'var(--tw-prose-quote-borders)',
  quotes: '"\\201C""\\201D""\\2018""\\2019"'
})

globalStyle('.prose blockquote p:first-of-type::before', {
  content: 'open-quote'
})

globalStyle('.prose blockquote p:last-of-type::after', {
  content: 'close-quote'
})

globalStyle('.prose h1', {
  color: 'var(--tw-prose-headings)',
  fontWeight: '800'
})

globalStyle('.prose h1 strong', {
  fontWeight: '900',
  color: 'inherit'
})

globalStyle('.prose h2', {
  color: 'var(--tw-prose-headings)',
  fontWeight: '700'
})

globalStyle('.prose h2 strong', {
  fontWeight: '800',
  color: 'inherit'
})

globalStyle('.prose h3', {
  color: 'var(--tw-prose-headings)',
  fontWeight: '600'
})

globalStyle('.prose h3 strong', {
  fontWeight: '700',
  color: 'inherit'
})

globalStyle('.prose h4', {
  color: 'var(--tw-prose-headings)',
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
  color: 'var(--tw-prose-captions)'
})

globalStyle('.prose code', {
  color: 'var(--tw-prose-code)',
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
  color: 'var(--tw-prose-pre-code)',
  backgroundColor: 'var(--tw-prose-pre-bg)',
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
  borderBottomColor: 'var(--tw-prose-th-borders)'
})

globalStyle('.prose thead th', {
  color: 'var(--tw-prose-headings)',
  fontWeight: '600',
  verticalAlign: 'bottom'
})

globalStyle('.prose tbody tr', {
  borderBottomWidth: '1px',
  borderBottomColor: 'var(--tw-prose-td-borders)'
})

globalStyle('.prose tbody tr:last-child', {
  borderBottomWidth: '0'
})

globalStyle('.prose tbody td', {
  verticalAlign: 'baseline'
})

globalStyle('.prose tfoot', {
  borderTopWidth: '1px',
  borderTopColor: 'var(--tw-prose-th-borders)'
})

globalStyle('.prose tfoot td', {
  verticalAlign: 'top'
})
