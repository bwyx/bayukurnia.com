import React from 'react'
import { css } from '~/styles'

import type { RichText } from '~/types/notion.type'

const token = css({
  wordBreak: 'break-word',
  variants: {
    color: {
      default: {},
      black: { xColor: '$black' },
      gray: { xColor: '$gray' },
      brown: { xColor: '$brown' },
      orange: { xColor: '$orange' },
      yellow: { xColor: '$yellow' },
      green: { xColor: '$green' },
      blue: { xColor: '$blue' },
      purple: { xColor: '$purple' },
      pink: { xColor: '$pink' },
      red: { xColor: '$red' },
      default_background: {},
      black_background: { xBackgroundColor: '$black' },
      gray_background: { xBackgroundColor: '$gray' },
      brown_background: { xBackgroundColor: '$brown' },
      orange_background: { xBackgroundColor: '$orange' },
      yellow_background: { xBackgroundColor: '$yellow' },
      green_background: { xBackgroundColor: '$green' },
      blue_background: { xBackgroundColor: '$blue' },
      purple_background: { xBackgroundColor: '$purple' },
      pink_background: { xBackgroundColor: '$pink' },
      red_background: { xBackgroundColor: '$red' }
    },
    bold: { true: { fontWeight: 'bolder' } },
    italic: { true: { fontStyle: 'italic' } },
    underline: { true: { textDecoration: 'underline' } },
    strikethrough: { true: { textDecoration: 'line-through' } },
    code: {
      true: {
        xColor: '$brand',
        xBackground: '$brand',
        xBackgroundOpacity: 0.1,
        fontFamily: '$mono',
        fontSize: '$sm',
        fontWeight: 600,
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
