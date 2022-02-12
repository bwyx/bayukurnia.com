import { format, parseISO } from 'date-fns'
import { BlurImage } from '~/components'
import SquareGlass from '~/components/vectors/SquareGlass'
import config from '~/config'

import styles from '~/styles/components/Hero.style'

import type { PostWithCover } from '~/types/blog.type'

const Hero = ({ title, summary, publishedAt, cover }: PostWithCover) => {
  const { width, height, ...img } = cover

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.postDetails}>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postSnippet}>{summary}</p>
        </div>
        <div className={styles.postAuthor}>
          <div className={styles.authorPicture}>
            <BlurImage {...config.avatar} width={48} height={48} />
          </div>
          <div className={styles.authorDetails}>
            <strong className={styles.authorName}>Bayu Kurnia</strong>
            <time className={styles.publishedDate} dateTime={publishedAt}>
              {format(parseISO(publishedAt), 'LLLL d, yyyy')}
            </time>
          </div>
        </div>
        <figure className={styles.cover}>
          <SquareGlass />
          <div className={styles.imgOuter}>
            <BlurImage
              {...img}
              className={styles.img}
              blurClassName={styles.imgBlur}
              alt={`${title} Cover Image`}
              layout="fill"
              sizes="50vw"
              priority={true}
            />
          </div>
        </figure>
      </div>
    </header>
  )
}

export default Hero
