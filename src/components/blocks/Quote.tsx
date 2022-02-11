import { Text } from '~/components/blocks'

import type { QuoteBlock } from '~/types/notion.type'

const Quote = ({ quote }: QuoteBlock) => {
  return (
    <blockquote>
      <Text as="p">{quote.text}</Text>
    </blockquote>
  )
}

export default Quote
