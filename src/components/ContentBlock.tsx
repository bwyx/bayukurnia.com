import Text from '~/components/blocks/Text'
import CodeBlock from './CodeBlock'

import type { Block } from '~/types/notion.type'

interface Props {
  block: Block
}

const ContentBlock = ({ block }: Props) => {
  const { type } = block

  switch (type) {
    case 'heading_1':
      return <Text as="h1">{block[type].text}</Text>
    case 'heading_2':
      return <Text as="h2">{block[type].text}</Text>
    case 'heading_3':
      return <Text as="h3">{block[type].text}</Text>
    case 'paragraph':
      return <Text as="p">{block[type].text}</Text>
    case 'code':
      const { text, language } = block[type]
      const code = text.map((t: any) => t.plain_text).join('')

      return <CodeBlock language={language}>{code}</CodeBlock>
    default:
      // return (
      //   <code style={{ color: 'red', display: 'block' }}>..redacted..</code>
      // )
      return <pre>{JSON.stringify(block, null, 2)}</pre>
  }
}

export default ContentBlock
