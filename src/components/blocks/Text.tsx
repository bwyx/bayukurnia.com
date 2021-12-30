import { styled } from '~/styles'

const StyledSpan = styled('span', {
  fontWeight: 'inherit',
  fontStyle: 'inherit',
  textDecoration: 'inherit',
  variants: {
    color: {
      default: { color: 'inherit' },
      black: { color: '$black' },
      gray: { color: '$gray' },
      brown: { color: '$brown' },
      orange: { color: '$orange' },
      yellow: { color: '$yellow' },
      green: { color: '$green' },
      blue: { color: '$blue' },
      purple: { color: '$purple' },
      pink: { color: '$pink' },
      red: { color: '$red' },
      default_background: { backgroundColor: 'inherit' },
      black_background: { backgroundColor: '$black' },
      gray_background: { backgroundColor: '$gray' },
      brown_background: { backgroundColor: '$brown' },
      orange_background: { backgroundColor: '$orange' },
      yellow_background: { backgroundColor: '$yellow' },
      green_background: { backgroundColor: '$green' },
      blue_background: { backgroundColor: '$blue' },
      purple_background: { backgroundColor: '$purple' },
      pink_background: { backgroundColor: '$pink' },
      red_background: { backgroundColor: '$red' }
    },
    bold: {
      true: { fontWeight: 'bolder' }
    },
    italic: {
      true: { fontStyle: 'italic' }
    },
    underline: {
      true: { textDecoration: 'underline' }
    },
    strikethrough: {
      true: { textDecoration: 'line-through' }
    },
    code: {
      true: {
        fontFamily: 'monospace',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        padding: '0.2rem 0.4rem',
        borderRadius: '0.3rem'
      }
    }
  },
  compoundVariants: [
    {
      strikethrough: true,
      underline: true,
      css: {
        textDecoration: 'line-through underline'
      }
    }
  ]
})

const Text = ({ text }: any) => {
  if (!text) {
    return null
  }
  return text.map((value: any, i: number) => {
    const { annotations, text } = value

    return (
      <StyledSpan key={i} {...annotations}>
        {text.link ? (
          <a style={{ textDecoration: 'underline' }} href={text.link.url}>
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </StyledSpan>
    )
  })
}

export default Text
