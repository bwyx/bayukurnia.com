import Pre from './Pre'
import Callout from './Callout'

const customComponents = {
  Callout
}

const MDXComponents = {
  pre: Pre,
  ...customComponents
}

export default MDXComponents
