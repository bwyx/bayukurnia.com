import Pre from './Pre'
import Callout from './Callout'
import Text from './Text'

const customComponents = {
  Text,
  Callout
}

const MDXComponents = {
  pre: Pre,
  ...customComponents
}

export default MDXComponents
