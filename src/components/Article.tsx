import prose from '~/styles/prose.style'

interface Props {}

const Article = (props: React.PropsWithChildren<Props>) => {
  return (
    <article
      className={prose({
        size: {
          '@initial': 'base',
          '@lg': 'lg'
        }
      })}
    >
      {props.children}
    </article>
  )
}

export default Article
