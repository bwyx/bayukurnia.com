import { highlight, languages } from 'prismjs'

import prism from '~/styles/prism.style'

interface Props {
  children: string
  language?: string
}

const Code = ({ children, language }: Props) => {
  const className = prism({
    theme: 'gruvbox',
    size: {
      '@initial': 'small',
      '@md': 'base'
    }
  })

  // if no language is specified, dont highlight
  if (!language) {
    return (
      <pre className={className}>
        <code>{children}</code>
      </pre>
    )
  }

  // check if language is supported by prismjs
  // if not, use plain text
  const availableLanguages = Object.keys(languages)
  if (language === 'plain text' || !availableLanguages.includes(language)) {
    return (
      <pre className={className}>
        <code>{children}</code>
      </pre>
    )
  }

  // get highlighted code tree directly (better performance)
  const highlighted = highlight(children, languages[language], language)
  return (
    <pre className={className}>
      <code dangerouslySetInnerHTML={{ __html: highlighted }}></code>
    </pre>
  )
}

export default Code
