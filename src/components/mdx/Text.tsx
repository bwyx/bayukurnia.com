import React from 'react'
import text from '~/styles/sprinkles/text.css'

type TextProps = Parameters<typeof text>[0]

interface Props extends TextProps {
  children: React.ReactNode
  as: React.ElementType
  style: React.CSSProperties
}

const Text = ({ children, as, style, ...textStyles }: Props) => {
  const Component = as || 'span'
  return (
    <Component className={text({ ...textStyles })} style={style}>
      {children}
    </Component>
  )
}

export default Text
