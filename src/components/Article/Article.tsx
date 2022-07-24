import styles from './Article.css'

const Article = ({ children }: { children: React.ReactNode }) => {
  return <article className={styles.prose}>{children}</article>
}

export default Article
