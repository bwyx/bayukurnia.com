import React from 'react'
import prism from '~/styles/primitives/prism.css'

const Pre = ({ children }: { children: React.ReactNode }) => {
  return <pre className={prism}>{children}</pre>
}

export default Pre
