import Text from '~/components/blocks/Text'

const Block = ({ block }: any) => {
  const { type } = block
  const value = block[type]

  switch (type) {
    case 'heading_1':
      return (
        <h2>
          <Text text={value.text} />
        </h2>
      )
    case 'heading_2':
      return (
        <h3>
          <Text text={value.text} />
        </h3>
      )
    case 'heading_3':
      return (
        <h4>
          <Text text={value.text} />
        </h4>
      )
    case 'paragraph':
      return (
        <p>
          <Text text={value.text} />
        </p>
      )
    case 'code':
      const { text, language } = value
      return (
        <pre>
          <code className={`language-${language}`}>
            <Text text={text} />
          </code>
        </pre>
      )
    default:
      return (
        <code style={{ color: 'red', display: 'block' }}>..redacted..</code>
      )
    // return <pre>{JSON.stringify(block, null, 2)}</pre>
  }
}

export default Block
