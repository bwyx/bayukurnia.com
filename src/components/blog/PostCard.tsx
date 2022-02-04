import Link from 'next/link'
import { Text } from '~/components/blocks'

import { css } from '~/styles'

import type { PostProperties } from '~/types'

const styles = {
  outer: css({
    display: 'flex',
    flexDirection: 'column',
    mt: '$4',
    '&:first-child': {
      mt: 0
    }
  })(),
  postTitle: css({
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
  postDescription: css({
    xColor: '$fg3'
  })()
}

const PostCard = (props: PostProperties) => {
  return (
    <article className={styles.outer}>
      <Link href={`/blog/${props.slug}`}>
        <a className={styles.postTitle}>
          <h2>{props.title}</h2>
        </a>
      </Link>
      {props.richDescription.length ? (
        <p className={styles.postDescription}>
          <Text>{props.richDescription}</Text>
        </p>
      ) : null}
    </article>
  )
}

export default PostCard
