import Image from 'next/image'
import { BlurImage } from '~/components'
import { Text } from '~/components/blocks'

import styles from '~/styles/components/Hero.style'

import type { PostProperties } from '~/types'
import SquareGlass from './vectors/SquareGlass'

const Hero = ({ title, richDescription, date, cover }: PostProperties) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.postDetails}>
          <h1 className={styles.postTitle}>{title}</h1>
          <p className={styles.postSnippet}>
            <Text>{richDescription}</Text>
          </p>
        </div>
        <div className={styles.postAuthor}>
          <div className={styles.authorPicture}>
            <Image
              src="/bayukurnia.png"
              alt="Bayu Kurnia's Avatar"
              width={48}
              height={48}
            />
          </div>
          <div className={styles.authorDetails}>
            <strong className={styles.authorName}>Bayu Kurnia</strong>
            <span className={styles.publishedDate}>{date}</span>
          </div>
        </div>
        <figure className={styles.cover}>
          <SquareGlass />
          {cover ? (
            <div className={styles.imgOuter}>
              <BlurImage
                {...cover}
                className={styles.img}
                blurClassName={styles.imgBlur}
                alt={`${title} Cover Image`}
                layout="fill"
                sizes="50vw"
                priority={true}
              />
            </div>
          ) : null}
        </figure>
      </div>
    </header>
  )
}

export default Hero
