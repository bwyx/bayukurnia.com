import { highlight, languages } from 'prismjs'

interface Props {
  children: string
  language?: string
}

const Code = ({ children, language }: Props) => {
  // if no language is specified, dont highlight
  if (!language) {
    return (
      <pre>
        <code>{children}</code>
      </pre>
    )
  }

  // check if language is supported by prismjs
  // if not, use plain text
  const availableLanguages = Object.keys(languages)
  if (language === 'plain text' || !availableLanguages.includes(language)) {
    return (
      <pre className="language-plaintext">
        <code className="language-plaintext">{children}</code>
      </pre>
    )
  }

  // get highlighted code tree directly (better performance)
  const highlighted = highlight(children, languages[language], language)
  return (
    <pre className={`language-${language}`}>
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></code>
    </pre>
  )
}

export default Code
