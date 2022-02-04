import { attachMainLayout } from '~/layouts/Main.layout'
import { SEO, Hero, Article } from '~/components'
import { Content } from '~/components/blocks'

import container from '~/styles/container.style'

import { getAllPosts, getPostBySlug, getBlocksByPostId } from '~/lib/notion'

import type { GetStaticProps } from 'next'
import type { PostPropertiesWithBlocks } from '~/types'

const Post = ({ blocks, ...post }: PostPropertiesWithBlocks) => {
  return (
    <>
      <SEO title={post.title} />
      <Hero {...post} />
      <div className={container({ size: 'small' })}>
        <Article>
          {Array.isArray(blocks) && blocks.length
            ? blocks.map((block) => <Content key={block.id} block={block} />)
            : null}
        </Article>
      </div>
    </>
  )
}
Post.layout = attachMainLayout

export const getStaticProps: GetStaticProps<PostPropertiesWithBlocks> = async (
  req: any
) => {
  // Retrieve the post from the slug
  const { rawId, ...post } = await getPostBySlug(req.params.slug)
  const blocks = await getBlocksByPostId(rawId)

  return {
    props: { ...post, blocks },
    revalidate: 300
  }
}

export const getStaticPaths = async () => {
  const posts = await getAllPosts()

  const slugs = posts.results.map((post: any) => post.properties['Slug'].url)

  return {
    paths: slugs.map((s: string) => '/blog/' + s),
    fallback: true
  }
}

export default Post
