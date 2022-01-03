import { highlight, languages } from 'prismjs'
import prismNord from '~/styles/prism/nord.style'
import { styled } from '~/styles'

interface Props {
  children: string
  language?: string
}

const Pre = styled('pre', {
  // TODO: add dark theme variant
  ...prismNord
})

const CodeBlock = ({ children, language }: Props) => {
  // if no language is specified, dont highlight
  if (!language) {
    return (
      <Pre>
        <code>{children}</code>
      </Pre>
    )
  }

  // check if language is supported by prismjs
  // if not, use plain text
  const availableLanguages = Object.keys(languages)
  if (!availableLanguages.includes(language) || language === 'plain text') {
    return (
      <Pre className="language-plaintext">
        <code className="language-plaintext">{children}</code>
      </Pre>
    )
  }

  // get highlighted code tree directly (better performance)
  const highlighted = highlight(children, languages[language], language)
  return (
    <Pre className={`language-${language}`}>
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></code>
    </Pre>
  )
}

export default CodeBlock
