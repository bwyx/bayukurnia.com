import Highlight, { Prism } from 'prism-react-renderer'

import type { Language } from 'prism-react-renderer'

interface Props {
  children: string
  language?: string
}

const CodeBlock = ({ children, language }: Props) => {
  // if no language is specified, dont highlight
  if (!language) {
    return (
      <pre>
        <code>{children}</code>
      </pre>
    )
  }

  if (language === 'plain text') {
    return (
      <pre className="language-plaintext">
        <code className="language-plaintext">{children}</code>
      </pre>
    )
  }

  return (
    <Highlight Prism={Prism} code={children} language={language as Language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          <code className={className}>
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  // eslint-disable-next-line react/jsx-key
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
