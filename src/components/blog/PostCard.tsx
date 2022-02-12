import Link from 'next/link'
import { format, parseISO } from 'date-fns'

import { css } from '~/styles'

import type { PostProperties } from '~/types/blog.type'

const styles = {
  outer: css({
    display: 'flex',
    flexDirection: 'column',
    mt: '$4',
    '&:first-child': {
      mt: 0
    }
  })(),
  title: css({
    xColor: '$fg1',
    fontSize: '$2xl',
    fontWeight: '$bold',
    '&:hover': {
      xColor: '$brand'
    },
    '@sm': {
      fontSize: '$3xl'
    }
  })(),
  summary: css({
    xColor: '$fg3'
  })(),
  publishedAt: css({
    xColor: '$fg3',
    fontSize: '$sm',
    fontWeight: '$medium'
  })()
}

const PostCard = ({
  title,
  summary,
  publishedAt,
  path,
  slug
}: PostProperties) => {
  return (
    <article className={styles.outer}>
      <time className={styles.publishedAt} dateTime={publishedAt}>
        {format(parseISO(publishedAt), 'LLLL d, yyyy')}
      </time>
      <Link href={`/${path}/${slug}`}>
        <a>
          <h2 className={styles.title}>{title}</h2>
        </a>
      </Link>
      <p className={styles.summary}>{summary}</p>
    </article>
  )
}

export default PostCard
