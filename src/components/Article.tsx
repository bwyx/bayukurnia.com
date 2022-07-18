import prose from '~/styles/primitives/prose.css'

interface Props {}

const Article = (props: React.PropsWithChildren<Props>) => {
  return <article className={prose}>{props.children}</article>
}

export default Article
