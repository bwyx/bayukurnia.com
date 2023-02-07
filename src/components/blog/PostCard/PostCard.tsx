// import Link from 'next/link'
import { format, parseISO } from 'date-fns'

import type { PostProperties } from '~/types/blog.type'

import styles from './PostCard.css'

const PostCard = ({
  title,
  summary,
  publishedAt,
  path,
  slug
}: PostProperties) => {
  return (
    <a href={`/${path}/${slug}`} className={styles.outer}>
      <time className={styles.publishedAt} dateTime={publishedAt}>
        {format(parseISO(publishedAt), 'LLLL d, yyyy')}
      </time>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.summary}>{summary}</p>
    </a>
  )
}

export default PostCard
