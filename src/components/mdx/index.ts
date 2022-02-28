import Pre from './Pre'
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
  ...customComponents
}

export default MDXComponents
