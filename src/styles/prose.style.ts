import { css, RGBColor } from '~/styles'
import themes from '~/styles/themes'

// modified from `@tailwindcss/typography`
const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px: number) => `${round(px / 16)}rem`
const em = (px: number, base: number) => `${round(px / base)}em`

const color = (color: RGBColor) => `rgb($rgb$${color})`

const vars = {
  [`.${themes.dark} &`]: {
    '$$prose-body': color('text-300'),
    '$$prose-headings': '#fff',
    '$$prose-lead': color('text-400'),
    '$$prose-links': '#fff',
    '$$prose-bold': '#fff',
    '$$prose-counters': color('text-400'),
    '$$prose-bullets': color('text-600'),
    '$$prose-hr': color('text-700'),
    '$$prose-quotes': color('text-100'),
    '$$prose-quote-borders': color('text-700'),
    '$$prose-captions': color('text-400'),
    '$$prose-code': '#fff',
    '$$prose-pre-code': color('text-300'),
    '$$prose-pre-bg': 'rgb(0 0 0 / 50%)',
    '$$prose-th-borders': color('text-600'),
    '$$prose-td-borders': color('text-700')
  },

  // Light
  [`.${themes.light} &`]: {
    '$$prose-body': color('text-700'),
    '$$prose-headings': color('text-900'),
    '$$prose-lead': color('text-600'),
    '$$prose-links': color('text-900'),
    '$$prose-bold': color('text-900'),
    '$$prose-counters': color('text-500'),
    '$$prose-bullets': color('text-300'),
    '$$prose-hr': color('text-200'),
    '$$prose-quotes': color('text-900'),
    '$$prose-quote-borders': color('text-200'),
    '$$prose-captions': color('text-500'),
    '$$prose-code': color('text-900'),
    '$$prose-pre-code': color('text-200'),
    '$$prose-pre-bg': color('text-800'),
    '$$prose-th-borders': color('text-300'),
    '$$prose-td-borders': color('text-200')
  }
}

const prose = css({
  ...vars,
  color: '$$prose-body',
  maxWidth: '65ch',
  '[class~="lead"]': {
    color: '$$prose-lead'
  },

  // Texts
  a: {
    color: '$$prose-links',
    textDecoration: 'underline',
    fontWeight: '500'
  },
  strong: {
    color: '$$prose-bold',
    fontWeight: '600'
  },

  // Lists
  ol: {
    listStyleType: 'decimal'
  },
  'ol[type="A"]': {
    listStyleType: 'upper-alpha'
  },
  'ol[type="a"]': {
    listStyleType: 'lower-alpha'
  },
  'ol[type="A" s]': {
    listStyleType: 'upper-alpha'
  },
  'ol[type="a" s]': {
    listStyleType: 'lower-alpha'
  },
  'ol[type="I"]': {
    listStyleType: 'upper-roman'
  },
  'ol[type="i"]': {
    listStyleType: 'lower-roman'
  },
  'ol[type="I" s]': {
    listStyleType: 'upper-roman'
  },
  'ol[type="i" s]': {
    listStyleType: 'lower-roman'
  },
  'ol[type="1"]': {
    listStyleType: 'decimal'
  },
  ul: {
    listStyleType: 'disc'
  },
  'ol > li::marker': {
    fontWeight: '400',
    color: '$$prose-counters'
  },
  'ul > li::marker': {
    color: '$$prose-bullets'
  },

  // Miscs
  hr: {
    borderColor: '$$prose-hr',
    borderTopWidth: 1
  },
  blockquote: {
    fontWeight: '500',
    fontStyle: 'italic',
    color: '$$prose-quotes',
    borderLeftWidth: '0.25rem',
    borderLeftColor: '$$prose-quote-borders',
    quotes: '"\\201C""\\201D""\\2018""\\2019"'
  },
  'blockquote p:first-of-type::before': {
    content: 'open-quote'
  },
  'blockquote p:last-of-type::after': {
    content: 'close-quote'
  },

  // Headings
  h1: {
    color: '$$prose-headings',
    fontWeight: '800'
  },
  'h1 strong': {
    fontWeight: '900'
  },
  h2: {
    color: '$$prose-headings',
    fontWeight: '700'
  },
  'h2 strong': {
    fontWeight: '800'
  },
  h3: {
    color: '$$prose-headings',
    fontWeight: '600'
  },
  'h3 strong': {
    fontWeight: '700'
  },
  h4: {
    color: '$$prose-headings',
    fontWeight: '600'
  },
  'h4 strong': {
    fontWeight: '700'
  },
  // TODO: Figure out how to not need this, it's a merging issue
  'figure > *': {},
  figcaption: {
    color: '$$prose-captions'
  },
  ':not(pre) > code': {
    xColor: '$brand',
    xBackground: '$brand',
    xBackgroundOpacity: 0.1,
    fontFamily: '$mono',
    letterSpacing: '$tight',
    padding: '0.3em 0.35em',
    borderRadius: '0.3em'
  },
  'a code': {
    color: '$$prose-links'
  },
  // already styled by prism
  // pre: {
  //   color: '$$prose-pre-code',
  //   backgroundColor: '$$prose-pre-bg',
  //   overflowX: 'auto',
  //   fontWeight: '400'
  // },
  // 'pre code': {
  //   backgroundColor: 'transparent',
  //   borderWidth: '0',
  //   borderRadius: '0',
  //   padding: '0',
  //   fontWeight: 'inherit',
  //   color: 'inherit',
  //   fontSize: 'inherit',
  //   fontFamily: 'inherit',
  //   lineHeight: 'inherit'
  // },
  // 'pre code::before': {
  //   content: 'none'
  // },
  // 'pre code::after': {
  //   content: 'none'
  // },

  // Table
  table: {
    width: '100%',
    tableLayout: 'auto',
    textAlign: 'left',
    mt: em(32, 16),
    mb: em(32, 16)
  },
  thead: {
    borderBottomWidth: '1px',
    borderBottomColor: '$$prose-th-borders'
  },
  'thead th': {
    color: '$$prose-headings',
    fontWeight: '600',
    verticalAlign: 'bottom'
  },
  'tbody tr': {
    borderBottomWidth: '1px',
    borderBottomColor: '$$prose-td-borders'
  },
  'tbody tr:last-child': {
    borderBottomWidth: '0'
  },
  'tbody td': {
    verticalAlign: 'baseline'
  },

  '> :first-child': {
    mt: '0'
  },
  '> :last-child': {
    mb: '0'
  },
  '&:before': {
    padding: '2rem 0',
    margin: '0 auto',
    textAlign: 'center',
    content: '• • •',
    fontSize: '$sm',
    display: 'block',
    '@sm': { padding: '3rem 0' }
  },
  variants: {
    size: {
      sm: {
        fontSize: rem(14),
        lineHeight: round(24 / 14),
        '& p': {
          mt: em(16, 14),
          mb: em(16, 14)
        },
        '[class~="lead"]': {
          fontSize: em(18, 14),
          lineHeight: round(28 / 18),
          mt: em(16, 18),
          mb: em(16, 18)
        },
        blockquote: {
          mt: em(24, 18),
          mb: em(24, 18),
          pl: em(20, 18)
        },
        h1: {
          fontSize: em(30, 14),
          mt: '0',
          mb: em(24, 30),
          lineHeight: round(36 / 30)
        },
        h2: {
          fontSize: em(20, 14),
          mt: em(32, 20),
          mb: em(16, 20),
          lineHeight: round(28 / 20)
        },
        h3: {
          fontSize: em(18, 14),
          mt: em(28, 18),
          mb: em(8, 18),
          lineHeight: round(28 / 18)
        },
        h4: {
          mt: em(20, 14),
          mb: em(8, 14),
          lineHeight: round(20 / 14)
        },
        img: {
          mt: em(24, 14),
          mb: em(24, 14)
        },
        video: {
          mt: em(24, 14),
          mb: em(24, 14)
        },
        figure: {
          mt: em(24, 14),
          mb: em(24, 14)
        },
        'figure > *': {
          mt: '0',
          mb: '0'
        },
        figcaption: {
          fontSize: em(12, 14),
          lineHeight: round(16 / 12),
          mt: em(8, 12)
        },
        code: {
          fontSize: em(12, 14)
        },
        'h2 code': {
          fontSize: em(18, 20)
        },
        'h3 code': {
          fontSize: em(16, 18)
        },
        pre: {
          mt: em(20, 12),
          mb: em(20, 12),
          borderRadius: rem(4),
          pt: em(8, 12),
          pr: em(12, 12),
          pb: em(8, 12),
          pl: em(12, 12)
        },
        ol: {
          mt: em(16, 14),
          mb: em(16, 14),
          pl: em(22, 14)
        },
        ul: {
          mt: em(16, 14),
          mb: em(16, 14),
          pl: em(22, 14)
        },
        li: {
          mt: em(4, 14),
          mb: em(4, 14)
        },
        'ol > li': {
          pl: em(6, 14)
        },
        'ul > li': {
          pl: em(6, 14)
        },
        '> ul > li p': {
          mt: em(8, 14),
          mb: em(8, 14)
        },
        '> ul > li > *:first-child': {
          mt: em(16, 14)
        },
        '> ul > li > *:last-child': {
          mb: em(16, 14)
        },
        '> ol > li > *:first-child': {
          mt: em(16, 14)
        },
        '> ol > li > *:last-child': {
          mb: em(16, 14)
        },
        'ul ul, ul ol, ol ul, ol ol': {
          mt: em(8, 14),
          mb: em(8, 14)
        },
        hr: {
          mt: em(40, 14),
          mb: em(40, 14)
        },
        'hr + *': {
          mt: '0'
        },
        'h2 + *': {
          mt: '0'
        },
        'h3 + *': {
          mt: '0'
        },
        'h4 + *': {
          mt: '0'
        },
        table: {
          fontSize: em(12, 14),
          lineHeight: round(18 / 12)
        },
        'thead th': {
          pr: em(12, 12),
          pb: em(8, 12),
          pl: em(12, 12)
        },
        'thead th:first-child': {
          pl: '0'
        },
        'thead th:last-child': {
          pr: '0'
        },
        'tbody td': {
          pt: em(8, 12),
          pr: em(12, 12),
          pb: em(8, 12),
          pl: em(12, 12)
        },
        'tbody td:first-child': {
          pl: '0'
        },
        'tbody td:last-child': {
          pr: '0'
        }
      },
      base: {
        fontSize: rem(16),
        lineHeight: round(28 / 16),
        '& p': {
          mt: em(20, 16),
          mb: em(20, 16)
        },
        '[class~="lead"]': {
          fontSize: em(20, 16),
          lineHeight: round(32 / 20),
          mt: em(24, 20),
          mb: em(24, 20)
        },
        blockquote: {
          mt: em(32, 20),
          mb: em(32, 20),
          pl: em(20, 20)
        },
        h1: {
          fontSize: em(36, 16),
          mt: '0',
          mb: em(32, 36),
          lineHeight: round(40 / 36)
        },
        h2: {
          fontSize: em(24, 16),
          mt: em(48, 24),
          mb: em(24, 24),
          lineHeight: round(32 / 24)
        },
        h3: {
          fontSize: em(20, 16),
          mt: em(32, 20),
          mb: em(12, 20),
          lineHeight: round(32 / 20)
        },
        h4: {
          mt: em(24, 16),
          mb: em(8, 16),
          lineHeight: round(24 / 16)
        },
        img: {
          mt: em(32, 16),
          mb: em(32, 16)
        },
        video: {
          mt: em(32, 16),
          mb: em(32, 16)
        },
        figure: {
          mt: em(32, 16),
          mb: em(32, 16)
        },
        'figure > *': {
          mt: '0',
          mb: '0'
        },
        figcaption: {
          fontSize: em(14, 16),
          lineHeight: round(20 / 14),
          mt: em(12, 14)
        },
        code: {
          fontSize: em(13.6, 16)
        },
        'h2 code': {
          fontSize: em(21, 24)
        },
        'h3 code': {
          fontSize: em(18, 20)
        },
        pre: {
          mt: em(24, 14),
          mb: em(24, 14),
          borderRadius: rem(6),
          pt: em(12, 14),
          pr: em(16, 14),
          pb: em(12, 14),
          pl: em(16, 14)
        },
        ol: {
          mt: em(20, 16),
          mb: em(20, 16),
          pl: em(26, 16)
        },
        ul: {
          mt: em(20, 16),
          mb: em(20, 16),
          pl: em(26, 16)
        },
        li: {
          mt: em(8, 16),
          mb: em(8, 16)
        },
        'ol > li': {
          pl: em(6, 16)
        },
        'ul > li': {
          pl: em(6, 16)
        },
        '> ul > li p': {
          mt: em(12, 16),
          mb: em(12, 16)
        },
        '> ul > li > *:first-child': {
          mt: em(20, 16)
        },
        '> ul > li > *:last-child': {
          mb: em(20, 16)
        },
        '> ol > li > *:first-child': {
          mt: em(20, 16)
        },
        '> ol > li > *:last-child': {
          mb: em(20, 16)
        },
        'ul ul, ul ol, ol ul, ol ol': {
          mt: em(12, 16),
          mb: em(12, 16)
        },
        hr: {
          mt: em(48, 16),
          mb: em(48, 16)
        },
        'hr + *': {
          mt: '0'
        },
        'h2 + *': {
          mt: '0'
        },
        'h3 + *': {
          mt: '0'
        },
        'h4 + *': {
          mt: '0'
        },
        table: {
          fontSize: em(14, 16),
          lineHeight: round(24 / 14)
        },
        'thead th': {
          pr: em(8, 14),
          pb: em(8, 14),
          pl: em(8, 14)
        },
        'thead th:first-child': {
          pl: '0'
        },
        'thead th:last-child': {
          pr: '0'
        },
        'tbody td': {
          pt: em(8, 14),
          pr: em(8, 14),
          pb: em(8, 14),
          pl: em(8, 14)
        },
        'tbody td:first-child': {
          pl: '0'
        },
        'tbody td:last-child': {
          pr: '0'
        }
      },
      lg: {
        fontSize: rem(18),
        lineHeight: round(32 / 18),
        '& p': {
          mt: em(24, 18),
          mb: em(24, 18)
        },
        '[class~="lead"]': {
          fontSize: em(22, 18),
          lineHeight: round(32 / 22),
          mt: em(24, 22),
          mb: em(24, 22)
        },
        blockquote: {
          mt: em(40, 24),
          mb: em(40, 24),
          pl: em(24, 24)
        },
        h1: {
          fontSize: em(48, 18),
          mt: '0',
          mb: em(40, 48),
          lineHeight: round(48 / 48)
        },
        h2: {
          fontSize: em(30, 18),
          mt: em(56, 30),
          mb: em(32, 30),
          lineHeight: round(40 / 30)
        },
        h3: {
          fontSize: em(24, 18),
          mt: em(40, 24),
          mb: em(16, 24),
          lineHeight: round(36 / 24)
        },
        h4: {
          mt: em(32, 18),
          mb: em(8, 18),
          lineHeight: round(28 / 18)
        },
        img: {
          mt: em(32, 18),
          mb: em(32, 18)
        },
        video: {
          mt: em(32, 18),
          mb: em(32, 18)
        },
        figure: {
          mt: em(32, 18),
          mb: em(32, 18)
        },
        'figure > *': {
          mt: '0',
          mb: '0'
        },
        figcaption: {
          fontSize: em(16, 18),
          lineHeight: round(24 / 16),
          mt: em(16, 16)
        },
        code: {
          fontSize: em(15, 18)
        },
        'h2 code': {
          fontSize: em(26, 30)
        },
        'h3 code': {
          fontSize: em(21, 24)
        },
        pre: {
          mt: em(32, 16),
          mb: em(32, 16),
          borderRadius: rem(6),
          pt: em(16, 16),
          pr: em(24, 16),
          pb: em(16, 16),
          pl: em(24, 16)
        },
        ol: {
          mt: em(24, 18),
          mb: em(24, 18),
          pl: em(28, 18)
        },
        ul: {
          mt: em(24, 18),
          mb: em(24, 18),
          pl: em(28, 18)
        },
        li: {
          mt: em(12, 18),
          mb: em(12, 18)
        },
        'ol > li': {
          pl: em(8, 18)
        },
        'ul > li': {
          pl: em(8, 18)
        },
        '> ul > li p': {
          mt: em(16, 18),
          mb: em(16, 18)
        },
        '> ul > li > *:first-child': {
          mt: em(24, 18)
        },
        '> ul > li > *:last-child': {
          mb: em(24, 18)
        },
        '> ol > li > *:first-child': {
          mt: em(24, 18)
        },
        '> ol > li > *:last-child': {
          mb: em(24, 18)
        },
        'ul ul, ul ol, ol ul, ol ol': {
          mt: em(16, 18),
          mb: em(16, 18)
        },
        hr: {
          mt: em(56, 18),
          mb: em(56, 18)
        },
        'hr + *': {
          mt: '0'
        },
        'h2 + *': {
          mt: '0'
        },
        'h3 + *': {
          mt: '0'
        },
        'h4 + *': {
          mt: '0'
        },
        table: {
          fontSize: em(16, 18),
          lineHeight: round(24 / 16)
        },
        'thead th': {
          pr: em(12, 16),
          pb: em(12, 16),
          pl: em(12, 16)
        },
        'thead th:first-child': {
          pl: '0'
        },
        'thead th:last-child': {
          pr: '0'
        },
        'tbody td': {
          pt: em(12, 16),
          pr: em(12, 16),
          pb: em(12, 16),
          pl: em(12, 16)
        },
        'tbody td:first-child': {
          pl: '0'
        },
        'tbody td:last-child': {
          pr: '0'
        }
      },
      xl: {
        fontSize: rem(20),
        lineHeight: round(36 / 20),
        '& p': {
          mt: em(24, 20),
          mb: em(24, 20)
        },
        '[class~="lead"]': {
          fontSize: em(24, 20),
          lineHeight: round(36 / 24),
          mt: em(24, 24),
          mb: em(24, 24)
        },
        blockquote: {
          mt: em(48, 30),
          mb: em(48, 30),
          pl: em(32, 30)
        },
        h1: {
          fontSize: em(56, 20),
          mt: '0',
          mb: em(48, 56),
          lineHeight: round(56 / 56)
        },
        h2: {
          fontSize: em(36, 20),
          mt: em(56, 36),
          mb: em(32, 36),
          lineHeight: round(40 / 36)
        },
        h3: {
          fontSize: em(30, 20),
          mt: em(48, 30),
          mb: em(20, 30),
          lineHeight: round(40 / 30)
        },
        h4: {
          mt: em(36, 20),
          mb: em(12, 20),
          lineHeight: round(32 / 20)
        },
        img: {
          mt: em(40, 20),
          mb: em(40, 20)
        },
        video: {
          mt: em(40, 20),
          mb: em(40, 20)
        },
        figure: {
          mt: em(40, 20),
          mb: em(40, 20)
        },
        'figure > *': {
          mt: '0',
          mb: '0'
        },
        figcaption: {
          fontSize: em(18, 20),
          lineHeight: round(28 / 18),
          mt: em(18, 18)
        },
        code: {
          fontSize: em(16.4, 20)
        },
        'h2 code': {
          fontSize: em(31, 36)
        },
        'h3 code': {
          fontSize: em(27, 30)
        },
        pre: {
          mt: em(36, 18),
          mb: em(36, 18),
          borderRadius: rem(8),
          pt: em(20, 18),
          pr: em(24, 18),
          pb: em(20, 18),
          pl: em(24, 18)
        },
        ol: {
          mt: em(24, 20),
          mb: em(24, 20),
          pl: em(32, 20)
        },
        ul: {
          mt: em(24, 20),
          mb: em(24, 20),
          pl: em(32, 20)
        },
        li: {
          mt: em(12, 20),
          mb: em(12, 20)
        },
        'ol > li': {
          pl: em(8, 20)
        },
        'ul > li': {
          pl: em(8, 20)
        },
        '> ul > li p': {
          mt: em(16, 20),
          mb: em(16, 20)
        },
        '> ul > li > *:first-child': {
          mt: em(24, 20)
        },
        '> ul > li > *:last-child': {
          mb: em(24, 20)
        },
        '> ol > li > *:first-child': {
          mt: em(24, 20)
        },
        '> ol > li > *:last-child': {
          mb: em(24, 20)
        },
        'ul ul, ul ol, ol ul, ol ol': {
          mt: em(16, 20),
          mb: em(16, 20)
        },
        hr: {
          mt: em(56, 20),
          mb: em(56, 20)
        },
        'hr + *': {
          mt: '0'
        },
        'h2 + *': {
          mt: '0'
        },
        'h3 + *': {
          mt: '0'
        },
        'h4 + *': {
          mt: '0'
        },
        table: {
          fontSize: em(18, 20),
          lineHeight: round(28 / 18)
        },
        'thead th': {
          pr: em(12, 18),
          pb: em(16, 18),
          pl: em(12, 18)
        },
        'thead th:first-child': {
          pl: '0'
        },
        'thead th:last-child': {
          pr: '0'
        },
        'tbody td': {
          pt: em(16, 18),
          pr: em(12, 18),
          pb: em(16, 18),
          pl: em(12, 18)
        },
        'tbody td:first-child': {
          pl: '0'
        },
        'tbody td:last-child': {
          pr: '0'
        }
      },
      '2xl': {
        fontSize: rem(24),
        lineHeight: round(40 / 24),
        '& p': {
          mt: em(32, 24),
          mb: em(32, 24)
        },
        '[class~="lead"]': {
          fontSize: em(30, 24),
          lineHeight: round(44 / 30),
          mt: em(32, 30),
          mb: em(32, 30)
        },
        blockquote: {
          mt: em(64, 36),
          mb: em(64, 36),
          pl: em(40, 36)
        },
        h1: {
          fontSize: em(64, 24),
          mt: '0',
          mb: em(56, 64),
          lineHeight: round(64 / 64)
        },
        h2: {
          fontSize: em(48, 24),
          mt: em(72, 48),
          mb: em(40, 48),
          lineHeight: round(52 / 48)
        },
        h3: {
          fontSize: em(36, 24),
          mt: em(56, 36),
          mb: em(24, 36),
          lineHeight: round(44 / 36)
        },
        h4: {
          mt: em(40, 24),
          mb: em(16, 24),
          lineHeight: round(36 / 24)
        },
        img: {
          mt: em(48, 24),
          mb: em(48, 24)
        },
        video: {
          mt: em(48, 24),
          mb: em(48, 24)
        },
        figure: {
          mt: em(48, 24),
          mb: em(48, 24)
        },
        'figure > *': {
          mt: '0',
          mb: '0'
        },
        figcaption: {
          fontSize: em(20, 24),
          lineHeight: round(32 / 20),
          mt: em(20, 20)
        },
        code: {
          fontSize: em(20, 24)
        },
        'h2 code': {
          fontSize: em(42, 48)
        },
        'h3 code': {
          fontSize: em(32, 36)
        },
        pre: {
          mt: em(40, 20),
          mb: em(40, 20),
          borderRadius: rem(8),
          pt: em(24, 20),
          pr: em(32, 20),
          pb: em(24, 20),
          pl: em(32, 20)
        },
        ol: {
          mt: em(32, 24),
          mb: em(32, 24),
          pl: em(38, 24)
        },
        ul: {
          mt: em(32, 24),
          mb: em(32, 24),
          pl: em(38, 24)
        },
        li: {
          mt: em(12, 24),
          mb: em(12, 24)
        },
        'ol > li': {
          pl: em(10, 24)
        },
        'ul > li': {
          pl: em(10, 24)
        },
        '> ul > li p': {
          mt: em(20, 24),
          mb: em(20, 24)
        },
        '> ul > li > *:first-child': {
          mt: em(32, 24)
        },
        '> ul > li > *:last-child': {
          mb: em(32, 24)
        },
        '> ol > li > *:first-child': {
          mt: em(32, 24)
        },
        '> ol > li > *:last-child': {
          mb: em(32, 24)
        },
        'ul ul, ul ol, ol ul, ol ol': {
          mt: em(16, 24),
          mb: em(16, 24)
        },
        hr: {
          mt: em(72, 24),
          mb: em(72, 24)
        },
        'hr + *': {
          mt: '0'
        },
        'h2 + *': {
          mt: '0'
        },
        'h3 + *': {
          mt: '0'
        },
        'h4 + *': {
          mt: '0'
        },
        table: {
          fontSize: em(20, 24),
          lineHeight: round(28 / 20)
        },
        'thead th': {
          pr: em(12, 20),
          pb: em(16, 20),
          pl: em(12, 20)
        },
        'thead th:first-child': {
          pl: '0'
        },
        'thead th:last-child': {
          pr: '0'
        },
        'tbody td': {
          pt: em(16, 20),
          pr: em(12, 20),
          pb: em(16, 20),
          pl: em(12, 20)
        },
        'tbody td:first-child': {
          pl: '0'
        },
        'tbody td:last-child': {
          pr: '0'
        }
      }
    }
  },
  defaultVariants: {
    size: 'base'
  }
})

export default prose
