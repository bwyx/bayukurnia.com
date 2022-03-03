import React from 'react'
import { text } from '~/styles/primitives'

import type { VariantProps } from '@stitches/core'

type TextProps = VariantProps<typeof text>

interface Props extends TextProps {
  children: React.ReactNode
  as: React.ElementType
}

const Text = ({ children, as, ...styles }: Props) => {
  const Component = as || 'span'
  return <Component className={text({ ...styles })}>{children}</Component>
}

export default Text
