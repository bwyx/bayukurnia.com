import QuotationMark from '../vectors/QuotationMark'

import { css } from '~/styles'
import text from '~/styles/sprinkles/text.css'

const styles = `${text({
  fontWeight: 'light',
  lineHeight: 'relaxed',
  letterSpacing: 'tight',
  fontSize: {
    initial: 'lg',
    lg: '2xl'
  }
})} ${css({
  xColor: '$fg1',
  position: 'relative',
  cite: {
    letterSpacing: '$normal',
    fontSize: '$sm',
    '@lg': { fontSize: '$base' }
  },
  '.quotation': {
    opacity: 0.1,
    width: 80,
    height: 80,
    position: 'absolute',
    left: -15,
    top: -25,
    '@md': {
      left: -85,
      top: -15
    },
    '@lg': {
      top: 0
    }
  }
})()}`

const Blockquote = ({ children }: { children: React.ReactNode }) => {
  return (
    <blockquote className={styles}>
      <QuotationMark className="quotation" />
      {children}
    </blockquote>
  )
}

export default Blockquote
