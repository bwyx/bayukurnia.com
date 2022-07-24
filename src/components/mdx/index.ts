import Image from 'next/image'
import Pre from './Pre/Pre'
import Blockquote from './Blockquote/Blockquote'
import Callout from './Callout/Callout'
import Text from './Text'
import Tab from './Tab/Tab'

const customComponents = {
  Image,
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
