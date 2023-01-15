// styles from `@tailwindcss/typography`
import { createVar, globalStyle, style } from '@vanilla-extract/css'

import { fonts, media, rgb } from '~/styles/variables.css'
import { round, rem, em } from '~/styles/utils.css'

const prose = style({})

const $ = {
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

globalStyle(`.light ${prose}`, {
  vars: {
    [$.body]: color('text-600'),
    [$.headings]: color('text-900'),
    [$.lead]: color('text-600'),
    [$.links]: color('text-900'),
    [$.bold]: color('text-900'),
    [$.counters]: color('text-500'),
    [$.bullets]: color('text-300'),
    [$.hr]: color('text-200'),
    [$.quotes]: color('text-900'),
    [$.quoteBorders]: color('text-200'),
    [$.captions]: color('text-500'),
    [$.code]: color('text-900'),
    [$.preCode]: color('text-200'),
    [$.preBg]: color('text-800'),
    [$.thBorders]: color('text-300'),
    [$.tdBorders]: color('text-200')
  }
})

globalStyle(`.dark  ${prose}`, {
  vars: {
    [$.body]: color('text-400'),
    [$.headings]: '#fff',
    [$.lead]: color('text-400'),
    [$.links]: '#fff',
    [$.bold]: '#fff',
    [$.counters]: color('text-400'),
    [$.bullets]: color('text-600'),
    [$.hr]: color('text-700'),
    [$.quotes]: color('text-100'),
    [$.quoteBorders]: color('text-700'),
    [$.captions]: color('text-400'),
    [$.code]: '#fff',
    [$.preCode]: color('text-300'),
    [$.preBg]: 'rgb(0 0 0 / 50%)',
    [$.thBorders]: color('text-600'),
    [$.tdBorders]: color('text-700')
  }
})

globalStyle(prose, {
  color: $.body,
  maxWidth: '65ch',
  margin: '0 auto'
})

globalStyle(`${prose} #comments`, {
  display: 'block'
})

globalStyle(`${prose}:before, ${prose} #comments:before`, {
  padding: '2rem 0',
  margin: '0 auto',
  textAlign: 'center',
  content: '• • •',
  color: `rgb(${rgb.fg3}/0.5)`,
  fontSize: '0.875rem',
  display: 'block',
  '@media': {
    [media.sm]: {
      padding: '3rem 0'
    }
  }
})

globalStyle(`${prose} [class~="lead"]`, {
  color: $.lead
})

globalStyle(`${prose} a`, {
  color: $.links,
  textDecoration: 'underline',
  fontWeight: '500'
})

globalStyle(`${prose} strong`, {
  color: $.bold,
  fontWeight: '600'
})

globalStyle(`${prose} a strong`, {
  color: 'inherit'
})

// globalStyle(`${prose} blockquote strong`, {
//   color: 'inherit'
// })

globalStyle(`${prose} thead th strong`, {
  color: 'inherit'
})

globalStyle(`${prose} ol`, {
  listStyleType: 'decimal'
})

globalStyle(`${prose} ol[type="A"]`, {
  listStyleType: 'upper-alpha'
})

globalStyle(`${prose} ol[type="a"]`, {
  listStyleType: 'lower-alpha'
})

globalStyle(`${prose} ol[type="A" s]`, {
  listStyleType: 'upper-alpha'
})

globalStyle(`${prose} ol[type="a" s]`, {
  listStyleType: 'lower-alpha'
})

globalStyle(`${prose} ol[type="I"]`, {
  listStyleType: 'upper-roman'
})

globalStyle(`${prose} ol[type="i"]`, {
  listStyleType: 'lower-roman'
})

globalStyle(`${prose} ol[type="I" s]`, {
  listStyleType: 'upper-roman'
})

globalStyle(`${prose} ol[type="i" s]`, {
  listStyleType: 'lower-roman'
})

globalStyle(`${prose} ol[type="1"]`, {
  listStyleType: 'decimal'
})

globalStyle(`${prose} ul`, {
  listStyleType: 'disc'
})

globalStyle(`${prose} ol > li::marker`, {
  fontWeight: '400',
  color: $.counters
})

globalStyle(`${prose} ul > li::marker`, {
  color: $.bullets
})

globalStyle(`${prose} hr`, {
  borderColor: $.hr,
  borderTopWidth: 1
})

// globalStyle(`${prose} blockquote`, {
//   fontWeight: '500',
//   fontStyle: 'italic',
//   color: $.quotes,
//   borderLeftWidth: '0.25rem',
//   borderLeftColor: $.quoteBorders,
//   quotes: '"\\201C""\\201D""\\2018""\\2019"'
// })

// globalStyle(`${prose} blockquote p:first-of-type::before`, {
//   content: 'open-quote'
// })

// globalStyle(`${prose} blockquote p:last-of-type::after`, {
//   content: 'close-quote'
// })

globalStyle(`${prose} h1`, {
  color: $.headings,
  fontWeight: '800'
})

globalStyle(`${prose} h1 strong`, {
  fontWeight: '900',
  color: 'inherit'
})

globalStyle(`${prose} h2`, {
  color: $.headings,
  fontWeight: '700'
})

globalStyle(`${prose} h2 strong`, {
  fontWeight: '800',
  color: 'inherit'
})

globalStyle(`${prose} h3`, {
  color: $.headings,
  fontWeight: '600'
})

globalStyle(`${prose} h3 strong`, {
  fontWeight: '700',
  color: 'inherit'
})

globalStyle(`${prose} h4`, {
  color: $.headings,
  fontWeight: '600'
})

globalStyle(`${prose} h4 strong`, {
  fontWeight: '700',
  color: 'inherit'
})

// TODO: Figure out how to not need these, it's a merging issue
globalStyle(`${prose} img`, {})

globalStyle(`${prose} figure > *`, {})

globalStyle(`${prose} figcaption`, {
  color: $.captions
})

// globalStyle(`${prose} code`, {
//   color: $.code,
//   fontWeight: '600'
// })

// globalStyle(`${prose} code::before`, {
//   content: '"`"'
// })

// globalStyle(`${prose} code::after`, {
//   content: '"`"'
// })

// globalStyle(`${prose} a code`, {
//   color: 'inherit'
// })

// globalStyle(`${prose} h1 code`, {
//   color: 'inherit'
// })

// globalStyle(`${prose} h2 code`, {
//   color: 'inherit'
// })

// globalStyle(`${prose} h3 code`, {
//   color: 'inherit'
// })

// globalStyle(`${prose} h4 code`, {
//   color: 'inherit'
// })

// globalStyle(`${prose} blockquote code`, {
//   color: 'inherit'
// })

// globalStyle(`${prose} thead th code`, {
//   color: 'inherit'
// })

// globalStyle(`${prose} pre`, {
//   color: $.preCode,
//   backgroundColor: $.preBg,
//   overflowX: 'auto',
//   fontWeight: '400'
// })

// globalStyle(`${prose} pre code`, {
//   backgroundColor: 'transparent',
//   borderWidth: 0,
//   borderRadius: 0,
//   padding: 0,
//   fontWeight: 'inherit',
//   color: 'inherit',
//   fontSize: 'inherit',
//   fontFamily: 'inherit',
//   lineHeight: 'inherit'
// })

// globalStyle(`${prose} pre code::before`, {
//   content: 'none'
// })

// globalStyle(`${prose} pre code::after`, {
//   content: 'none'
// })

globalStyle(`${prose} table`, {
  width: '100%',
  tableLayout: 'auto',
  textAlign: 'left',
  marginTop: em(32, 16),
  marginBottom: em(32, 16)
})

globalStyle(`${prose} thead`, {
  borderBottomWidth: '1px',
  borderBottomColor: $.thBorders
})

globalStyle(`${prose} thead th`, {
  color: $.headings,
  fontWeight: '600',
  verticalAlign: 'bottom'
})

globalStyle(`${prose} tbody tr`, {
  borderBottomWidth: '1px',
  borderBottomColor: $.tdBorders
})

globalStyle(`${prose} tbody tr:last-child`, {
  borderBottomWidth: 0
})

globalStyle(`${prose} tbody td`, {
  verticalAlign: 'baseline'
})

globalStyle(`${prose} tfoot`, {
  borderTopWidth: '1px',
  borderTopColor: $.thBorders
})

globalStyle(`${prose} tfoot td`, {
  verticalAlign: 'top'
})

/*
 * Sizes & Spacing
 */
globalStyle(prose, {
  fontSize: rem(16),
  lineHeight: round(28 / 16),
  '@media': {
    [media.lg]: {
      fontSize: rem(18),
      lineHeight: round(32 / 18)
    }
  }
})

globalStyle(`${prose} p`, {
  marginTop: em(20, 16),
  marginBottom: em(20, 16),
  '@media': {
    [media.lg]: {
      marginTop: em(24, 18),
      marginBottom: em(24, 18)
    }
  }
})

globalStyle(`${prose} [class~="lead"]`, {
  fontSize: em(20, 16),
  lineHeight: round(32 / 20),
  marginTop: em(24, 20),
  marginBottom: em(24, 20),
  '@media': {
    [media.lg]: {
      fontSize: em(22, 18),
      lineHeight: round(32 / 22),
      marginTop: em(24, 22),
      marginBottom: em(24, 22)
    }
  }
})

globalStyle(`${prose} blockquote`, {
  marginTop: em(32, 20),
  marginBottom: em(32, 20),
  // paddingLeft: em(20, 20),
  '@media': {
    [media.lg]: {
      marginTop: em(40, 24),
      marginBottom: em(40, 24)
      // paddingLeft: em(24, 24)
    }
  }
})

globalStyle(`${prose} h1`, {
  fontSize: em(36, 16),
  marginTop: 0,
  marginBottom: em(32, 36),
  lineHeight: round(40 / 36),
  '@media': {
    [media.lg]: {
      fontSize: em(48, 18),
      marginTop: 0,
      marginBottom: em(40, 48),
      lineHeight: round(48 / 48)
    }
  }
})

globalStyle(`${prose} h2`, {
  fontSize: em(24, 16),
  marginTop: em(48, 24),
  marginBottom: em(24, 24),
  lineHeight: round(32 / 24),
  '@media': {
    [media.lg]: {
      fontSize: em(30, 18),
      marginTop: em(56, 30),
      marginBottom: em(32, 30),
      lineHeight: round(40 / 30)
    }
  }
})

globalStyle(`${prose} h3`, {
  fontSize: em(20, 16),
  marginTop: em(32, 20),
  marginBottom: em(12, 20),
  lineHeight: round(32 / 20),
  '@media': {
    [media.lg]: {
      fontSize: em(24, 18),
      marginTop: em(40, 24),
      marginBottom: em(16, 24),
      lineHeight: round(36 / 24)
    }
  }
})

globalStyle(`${prose} h4`, {
  marginTop: em(24, 16),
  marginBottom: em(8, 16),
  lineHeight: round(24 / 16),
  '@media': {
    [media.lg]: {
      marginTop: em(32, 18),
      marginBottom: em(8, 18),
      lineHeight: round(28 / 18)
    }
  }
})

globalStyle(`${prose} img`, {
  marginTop: em(32, 16),
  marginBottom: em(32, 16),
  '@media': {
    [media.lg]: {
      marginTop: em(32, 18),
      marginBottom: em(32, 18)
    }
  }
})

globalStyle(`${prose} video`, {
  marginTop: em(32, 16),
  marginBottom: em(32, 16),
  '@media': {
    [media.lg]: {
      marginTop: em(32, 18),
      marginBottom: em(32, 18)
    }
  }
})

globalStyle(`${prose} figure`, {
  marginTop: em(32, 16),
  marginBottom: em(32, 16),
  '@media': {
    [media.lg]: {
      marginTop: em(32, 18),
      marginBottom: em(32, 18)
    }
  }
})

globalStyle(`${prose} figure > *`, {
  marginTop: 0,
  marginBottom: 0
})

globalStyle(`${prose} figcaption`, {
  fontSize: em(14, 16),
  lineHeight: round(20 / 14),
  marginTop: em(12, 14),
  '@media': {
    [media.lg]: {
      fontSize: em(16, 18),
      lineHeight: round(24 / 16),
      marginTop: em(16, 16)
    }
  }
})

globalStyle(`${prose} code`, {
  fontSize: em(14, 16),
  '@media': {
    [media.lg]: {
      fontSize: em(16, 18)
    }
  }
})

globalStyle(`${prose} h2 code`, {
  fontSize: em(21, 24),
  '@media': {
    [media.lg]: {
      fontSize: em(26, 30)
    }
  }
})

globalStyle(`${prose} h3 code`, {
  fontSize: em(18, 20),
  '@media': {
    [media.lg]: {
      fontSize: em(21, 24)
    }
  }
})

// globalStyle(`${prose} pre`, {
//   fontSize: em(14, 16),
//   lineHeight: round(24 / 14),
//   marginTop: em(24, 14),
//   marginBottom: em(24, 14),
//   borderRadius: rem(6),
//   paddingTop: em(12, 14),
//   paddingRight: em(16, 14),
//   paddingBottom: em(12, 14),
//   paddingLeft: em(16, 14),
//   '@media': {
//     [media.lg]: {
//       fontSize: em(16, 18),
//       lineHeight: round(28 / 16),
//       marginTop: em(32, 16),
//       marginBottom: em(32, 16),
//       borderRadius: rem(6),
//       paddingTop: em(16, 16),
//       paddingRight: em(24, 16),
//       paddingBottom: em(16, 16),
//       paddingLeft: em(24, 16)
//     }
//   }
// })

globalStyle(`${prose} ol`, {
  marginTop: em(20, 16),
  marginBottom: em(20, 16),
  paddingLeft: em(26, 16),
  '@media': {
    [media.lg]: {
      marginTop: em(24, 18),
      marginBottom: em(24, 18),
      paddingLeft: em(28, 18)
    }
  }
})

globalStyle(`${prose} ul`, {
  marginTop: em(20, 16),
  marginBottom: em(20, 16),
  paddingLeft: em(26, 16),
  '@media': {
    [media.lg]: {
      marginTop: em(24, 18),
      marginBottom: em(24, 18),
      paddingLeft: em(28, 18)
    }
  }
})

globalStyle(`${prose} li`, {
  marginTop: em(8, 16),
  marginBottom: em(8, 16),
  '@media': {
    [media.lg]: {
      marginTop: em(12, 18),
      marginBottom: em(12, 18)
    }
  }
})

globalStyle(`${prose} ol > li`, {
  paddingLeft: em(6, 16),
  '@media': {
    [media.lg]: {
      paddingLeft: em(8, 18)
    }
  }
})

globalStyle(`${prose} ul > li`, {
  paddingLeft: em(6, 16),
  '@media': {
    [media.lg]: {
      paddingLeft: em(8, 18)
    }
  }
})

globalStyle(`${prose} > ul > li p`, {
  marginTop: em(12, 16),
  marginBottom: em(12, 16),
  '@media': {
    [media.lg]: {
      marginTop: em(16, 18),
      marginBottom: em(16, 18)
    }
  }
})

globalStyle(`${prose} > ul > li > *:first-child`, {
  marginTop: em(20, 16),
  '@media': {
    [media.lg]: {
      marginTop: em(24, 18)
    }
  }
})

globalStyle(`${prose} > ul > li > *:last-child`, {
  marginBottom: em(20, 16),
  '@media': {
    [media.lg]: {
      marginBottom: em(24, 18)
    }
  }
})

globalStyle(`${prose} > ol > li > *:first-child`, {
  marginTop: em(20, 16),
  '@media': {
    [media.lg]: {
      marginTop: em(24, 18)
    }
  }
})

globalStyle(`${prose} > ol > li > *:last-child`, {
  marginBottom: em(20, 16),
  '@media': {
    [media.lg]: {
      marginBottom: em(24, 18)
    }
  }
})

globalStyle(`${prose} ul ul, ul ol, ol ul, ol ol`, {
  marginTop: em(12, 16),
  marginBottom: em(12, 16),
  '@media': {
    [media.lg]: {
      marginTop: em(16, 18),
      marginBottom: em(16, 18)
    }
  }
})

globalStyle(`${prose} hr`, {
  marginTop: em(48, 16),
  marginBottom: em(48, 16),
  '@media': {
    [media.lg]: {
      marginTop: em(56, 18),
      marginBottom: em(56, 18)
    }
  }
})

globalStyle(`${prose} hr + *`, {
  marginTop: 0
})

globalStyle(`${prose} h2 + *`, {
  marginTop: 0
})

globalStyle(`${prose} h3 + *`, {
  marginTop: 0
})

globalStyle(`${prose} h4 + *`, {
  marginTop: 0
})

globalStyle(`${prose} table`, {
  fontSize: em(14, 16),
  lineHeight: round(24 / 14),
  '@media': {
    [media.lg]: {
      fontSize: em(16, 18),
      lineHeight: round(24 / 16)
    }
  }
})

globalStyle(`${prose} thead th`, {
  paddingRight: em(8, 14),
  paddingBottom: em(8, 14),
  paddingLeft: em(8, 14),
  '@media': {
    [media.lg]: {
      paddingRight: em(12, 16),
      paddingBottom: em(12, 16),
      paddingLeft: em(12, 16)
    }
  }
})

globalStyle(`${prose} thead th:first-child`, {
  paddingLeft: 0
})

globalStyle(`${prose} thead th:last-child`, {
  paddingRight: 0
})

globalStyle(`${prose} tbody td, tfoot td`, {
  paddingTop: em(8, 14),
  paddingRight: em(8, 14),
  paddingBottom: em(8, 14),
  paddingLeft: em(8, 14),
  '@media': {
    [media.lg]: {
      paddingTop: em(12, 16),
      paddingRight: em(12, 16),
      paddingBottom: em(12, 16),
      paddingLeft: em(12, 16)
    }
  }
})

globalStyle(`${prose} tbody td:first-child, tfoot td:first-child`, {
  paddingLeft: 0
})

globalStyle(`${prose} tbody td:last-child, tfoot td:last-child`, {
  paddingRight: 0
})

globalStyle(`${prose} > :first-child`, {
  marginTop: 0
})

globalStyle(`${prose} > :last-child`, {
  marginBottom: 0
})

// Custom
globalStyle(`${prose} :not(pre) > code`, {
  color: `rgb(${rgb.brand})`,
  background: `rgb(${rgb.brand}/0.1)`,
  fontFamily: fonts.mono,
  letterSpacing: '-0.025em',
  padding: '0.3em 0.35em',
  borderRadius: '0.3em'
})

globalStyle(`${prose} code`, {
  fontSize: em(13.6, 16),
  '@media': {
    [media.lg]: {
      fontSize: em(15, 18)
    }
  }
})

const styles = { prose }
export default styles
