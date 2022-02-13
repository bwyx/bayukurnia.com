import React from 'react'
import prism from '~/styles/prism.style'

const styles = prism({ theme: 'gruvbox' })

const Pre = ({ children }: { children: React.ReactNode }) => {
  return <pre className={styles}>{children}</pre>
}

export default Pre
