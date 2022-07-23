import QuotationMark from '~/components/vectors/QuotationMark'

import styles from './Blockquote.css'

const Blockquote = ({ children }: { children: React.ReactNode }) => {
  return (
    <blockquote className={styles.blockquote}>
      <QuotationMark className={styles.quotation} />
      {children}
    </blockquote>
  )
}

export default Blockquote
