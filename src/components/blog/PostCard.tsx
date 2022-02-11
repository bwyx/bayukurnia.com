import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'

import { css } from '~/styles'

import type { Blog } from 'contentlayer/generated'

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

const PostCard = ({ title, summary, publishedAt, slug, _raw }: Blog) => {
  return (
    <article className={styles.outer}>
      <time className={styles.publishedAt} dateTime={publishedAt}>
        {format(parseISO(publishedAt), 'LLLL d, yyyy')}
      </time>
      <Link href={`/${_raw.sourceFileDir}/${slug}`}>
        <a className={styles.title}>
          <h2>{title}</h2>
        </a>
      </Link>
      <p className={styles.summary}>{summary}</p>
    </article>
  )
}

export default PostCard
