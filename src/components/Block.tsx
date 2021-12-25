import Text from '~/components/blocks/Text'
import { H1, H2, H3 } from '~/components/Headings'

const Block = ({ block }: any) => {
  const { type } = block
  const value = block[type]

  switch (type) {
    case 'heading_1':
      return (
        <H1>
          <Text text={value.text} />
        </H1>
      )
    case 'heading_2':
      return (
        <H2>
          <Text text={value.text} />
        </H2>
      )
    case 'heading_3':
      return (
        <H3>
          <Text text={value.text} />
        </H3>
      )
    case 'paragraph':
      return (
        <p>
          <Text text={value.text} />
        </p>
      )
    case 'code':
      return (
        <pre style={{ fontSize: '0.8215em' }}>
          <code>
            <Text text={value.text} />
          </code>
        </pre>
      )
    default:
      return <code style={{ color: 'red' }}>..redacted..</code>
    // return <pre>{JSON.stringify(block, null, 2)}</pre>
  }
}

export default Block
