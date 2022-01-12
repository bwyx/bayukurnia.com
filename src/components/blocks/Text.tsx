import React from 'react'
import { css } from '~/styles'

import type { RichText } from '~/types/notion.type'

const token = css({
  wordBreak: 'break-word',
  variants: {
    color: {
      default: {},
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
      default_background: {},
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
    bold: { true: { fontWeight: 'bolder' } },
    italic: { true: { fontStyle: 'italic' } },
    underline: { true: { textDecoration: 'underline' } },
    strikethrough: { true: { textDecoration: 'line-through' } },
    code: {
      true: {
        fontFamily: '$mono',
        fontSize: '$sm',
        fontWeight: 600,
        color: 'rgb($brand)',
        backgroundColor: 'rgb($brand / 10%)',
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

interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  children: RichText[]
}

const Text = ({ as, children }: Props) => {
  const Component = as || React.Fragment

  if (!children) {
    return null
  }
  return (
    <Component>
      {children.map((child: RichText, i: number) => {
        if (child.type !== 'text') {
          return (
            <div>
              not yet supported:{' '}
              <span style={{ color: 'red' }}>RichText type {child.type}</span>
            </div>
          )
        }

        const { annotations, text } = child

        return (
          <span className={token({ ...annotations })} key={i}>
            {text.link ? (
              <a style={{ textDecoration: 'underline' }} href={text.link.url}>
                {text.content}
              </a>
            ) : (
              text.content
            )}
          </span>
        )
      })}
    </Component>
  )
}

export default Text
