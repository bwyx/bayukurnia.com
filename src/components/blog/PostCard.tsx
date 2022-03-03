import Link from 'next/link'
import { format, parseISO } from 'date-fns'

import stack from '~/styles/stack.style'
import text from '~/styles/text.style'

import type { PostProperties } from '~/types/blog.type'

const styles = {
  outer: stack({
    dir: 'col',
    css: {
      mt: '$2',
      padding: '$4',
      borderRadius: '$xl',
      border: '1px solid transparent',
      '&:first-child': {
        mt: 0
      },
      '&:hover': {
        xBackground: '$brand',
        xBackgroundOpacity: 0.05,
        borderColor: 'rgb($rgb$brand / 0.1)',
        h2: {
          xColor: '$brand'
        }
      },
      '@sm': {
        padding: '$6'
      }
    }
  }),
  title: text({
    weight: 'bold',
    leading: 'snug',
    size: {
      '@initial': 'xl',
      '@sm': '2xl'
    },
    css: { xColor: '$fg1' }
  }),
  summary: text({
    size: 'base',
    leading: 'relaxed',
    css: { xColor: '$fg2' }
  }),
  publishedAt: text({
    weight: 'medium',
    size: {
      '@initial': 'xs',
      '@sm': 'sm'
    },
    css: { mb: '$2', xColor: '$fg3' }
  })
}

const PostCard = ({
  title,
  summary,
  publishedAt,
  path,
  slug
}: PostProperties) => {
  return (
    <Link href={`/${path}/${slug}`}>
      <a className={styles.outer}>
        <time className={styles.publishedAt} dateTime={publishedAt}>
          {format(parseISO(publishedAt), 'LLLL d, yyyy')}
        </time>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.summary}>{summary}</p>
      </a>
    </Link>
  )
}

export default PostCard
