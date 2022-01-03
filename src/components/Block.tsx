import Text from '~/components/blocks/Text'
import CodeBlock from './CodeBlock'

const Block = ({ block }: any) => {
  const { type } = block
  const value = block[type]

  switch (type) {
    case 'heading_1':
      return (
        <h1>
          <Text text={value.text} />
        </h1>
      )
    case 'heading_2':
      return (
        <h2>
          <Text text={value.text} />
        </h2>
      )
    case 'heading_3':
      return (
        <h3>
          <Text text={value.text} />
        </h3>
      )
    case 'paragraph':
      return (
        <p>
          <Text text={value.text} />
        </p>
      )
    case 'code':
      const { text, language } = value
      const code = text.map((t: any) => t.plain_text).join('')

      return <CodeBlock language={language}>{code}</CodeBlock>
    default:
      return (
        <code style={{ color: 'red', display: 'block' }}>..redacted..</code>
      )
    // return <pre>{JSON.stringify(block, null, 2)}</pre>
  }
}

export default Block
