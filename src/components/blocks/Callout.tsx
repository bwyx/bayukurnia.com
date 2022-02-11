import { Text } from '~/components/blocks'

import { css } from '~/styles'

import type { CalloutBlock } from '~/types/notion.type'

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

const Callout = ({ callout }: CalloutBlock) => (
  <div className={styles}>
    <Text as="p">{callout.text}</Text>
  </div>
)

export default Callout
