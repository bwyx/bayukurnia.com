import { attachMainLayout } from '~/layouts/Main.layout'
import { SEO, Hero, Article } from '~/components'
import { Container } from '~/components/commons'
import { Content } from '~/components/blocks'
import { getAllPosts, getPostBySlug, getBlocksByPostId } from '~/lib/notion'

import type { HeroProps } from '~/components/Hero'
import type { GetStaticProps } from 'next'
import type { PickedBlock } from '~/types'

interface Props extends HeroProps {
  blocks: PickedBlock[]
}

const Post = ({ title, richSnippet, publishedDate, cover, blocks }: Props) => {
  return (
    <>
      <SEO title={title} />
      <Hero
        title={title}
        cover={cover}
        richSnippet={richSnippet}
        publishedDate={publishedDate}
      />
      <Container size="small">
        <Article>
          {Array.isArray(blocks) && blocks.length
            ? blocks.map((block) => <Content key={block.id} block={block} />)
            : null}
        </Article>
      </Container>
    </>
  )
}
Post.layout = attachMainLayout

export const getStaticProps: GetStaticProps<Props> = async (req: any) => {
  // Retrieve the post from the slug
  const post = await getPostBySlug(req.params.slug)
  const blocks = await getBlocksByPostId(post.id)

  return {
    props: { ...post, blocks },
    revalidate: 300
  }
}

export const getStaticPaths = async () => {
  const posts = await getAllPosts()

  const slug = posts.results.map((post: any) => post.properties['Slug'].url)

  return {
    paths: slug.map((s: string) => '/blog/' + s),
    fallback: true
  }
}

export default Post
