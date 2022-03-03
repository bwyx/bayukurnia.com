import Pre from './Pre'
import Blockquote from './Blockquote'
import Callout from './Callout'
import Text from './Text'
import Tab from './Tab'

const customComponents = {
  Text,
  Callout,
  Tab
}

const MDXComponents = {
  pre: Pre,
  blockquote: Blockquote,
  ...customComponents
}

export default MDXComponents
