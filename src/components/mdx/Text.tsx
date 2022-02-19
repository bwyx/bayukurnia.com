import React from 'react'
import text, { TextProps } from '~/styles/text.style'

interface Props extends TextProps {
  children: React.ReactNode
  as: React.ElementType
}

const Text = ({ children, as, ...styles }: Props) => {
  const Component = as || 'span'
  return <Component className={text({ ...styles })}>{children}</Component>
}

export default Text
