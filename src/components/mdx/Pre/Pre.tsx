import React from 'react'
import styles from './Pre.css'

const Pre = ({ children }: { children: React.ReactNode }) => {
  return <pre className={styles.prism}>{children}</pre>
}

export default Pre
