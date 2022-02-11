import { css } from '~/styles'

const styles = css({
  xBackground: '$brand',
  xBackgroundOpacity: 0.1,
  border: '1px solid rgb($rgb$brand / 0.15)',
  borderRadius: '$lg',
  p: '$4',
  '& p': {
    my: '0 !important'
  }
})()

interface Props {
  children: React.ReactNode
}

const Callout = ({ children }: Props) => (
  <div className={styles}>{children}</div>
)

export default Callout
