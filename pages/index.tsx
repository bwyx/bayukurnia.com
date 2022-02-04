import { getPlaiceholder } from 'plaiceholder'

import { attachMainLayout } from '~/layouts/Main.layout'
import { BlurImage } from '~/components'
import { PostCard } from '~/components/blog'
import GitHubLogo from '~/components/vectors/GitHubLogo'
import TwitterLogo from '~/components/vectors/TwitterLogo'

import { css } from '~/styles'
import container from '~/styles/container.style'
import stack from '~/styles/stack.style'

import { getAllPosts } from '~/lib/notion'
import { getPostData } from '~/lib/post'

import type { GetStaticProps } from 'next'
import type { PostProperties } from '~/types'
import type { PostResult } from '~/types/notion.type'

interface PageProps {
  posts: PostProperties[]
  authorImage: {
    blurDataURL: string
    src: string
  }
}

const styles = {
  about: stack({
    dir: {
      '@initial': 'col',
      '@sm': 'row'
    },
    y: 'center',
    css: {
      xBackground: '$brand',
      xBackgroundOpacity: 0.1,
      p: '$8',
      margin: '$8 auto',
      borderRadius: '$3xl',
      gap: '$6'
    }
  }),
  aboutImage: css({
    boxShadow: '0 0px 0px 2px rgb($rgb$bg), 0 0 0px 4px rgb($rgb$brand)',
    borderRadius: '$full',
    display: 'inherit',
    overflow: 'hidden',
    margin: '0 auto'
  })(),
  aboutText: stack({
    x: 'center',
    y: 'center',
    density: 'spaceBetween',
    grow: true,
    css: {
      lineHeight: '$tight'
    }
  }),
  greet: stack({
    dir: 'col',
    css: {
      xColor: '$fg2',
      fontSize: '$sm',
      '@sm': {
        ml: '$6',
        fontSize: '$base'
      },
      '& strong': {
        xColor: '$fg1',
        fontSize: '$xl',
        '@sm': {
          fontSize: '$2xl'
        },
        '@md': {
          fontSize: '$3xl'
        }
      }
    }
  }),
  socials: stack({
    css: {
      gap: '$4',
      mt: '$1',
      '& a:hover': {
        xColor: '$brand'
      },
      '& svg': {
        width: 18,
        height: 18,
        '@md': {
          width: 24,
          height: 24
        }
      }
    }
  }),
  posts: stack({
    dir: 'col',
    css: {
      my: '$16'
    }
  })
}

const Home = ({ posts, authorImage }: PageProps) => {
  return (
    <div className={container({ size: 'small' })}>
      <div className={styles.about}>
        <div className={styles.aboutImage}>
          <BlurImage
            {...authorImage}
            width={88}
            height={88}
            alt="Bayu Kurnia's Picture"
          />
        </div>
        <div className={styles.aboutText}>
          <p className={styles.greet}>
            <span>Halo,</span>
            <strong>Bayu Kurnia</strong>
            <span>disini.</span>
          </p>
          <ul className={styles.socials}>
            <li>
              <a
                href="https://twitter.com/0x4b70"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterLogo />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/bwyx"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubLogo />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.posts}>
        {posts.map((props) => (
          <PostCard key={props.id} {...props} />
        ))}
      </div>
    </div>
  )
}

Home.layout = attachMainLayout

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const { results } = await getAllPosts()

  const posts = await Promise.all(
    results.map((post) => getPostData(post as PostResult))
  )

  const { base64, img } = await getPlaiceholder('/bayukurnia.png')
  const authorImage = {
    blurDataURL: base64,
    ...img
  }

  return {
    props: { posts, authorImage },
    revalidate: process.env.ENV === 'local' ? 1 : 300
  }
}

export default Home
