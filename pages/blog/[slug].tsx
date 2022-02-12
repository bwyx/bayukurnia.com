import { useMDXComponent } from 'next-contentlayer/hooks'

import { attachMainLayout } from '~/layouts/Main.layout'
import { SEO, Article, MDXComponents } from '~/components'
import { Hero } from '~/components/blog'
import container from '~/styles/container.style'

import { pick } from 'contentlayer/client'
import { allBlogs } from 'contentlayer/generated'
import { withBlurPlaceholder } from '~/lib/plaiceholder'

import type { GetStaticProps } from 'next'
import type { PostWithCoverAndBody } from '~/types/blog.type'

const BlogItem = ({ body, ...post }: PostWithCoverAndBody) => {
  const MDXContent = useMDXComponent(body.code)

  return (
    <>
      <SEO title={post.title} />
      <Hero {...post} />
      <div className={container({ size: 'small' })}>
        <Article>
          <MDXContent components={MDXComponents} />
        </Article>
      </div>
    </>
  )
}

BlogItem.layout = attachMainLayout

export const getStaticPaths = () => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<PostWithCoverAndBody> = async ({
  params
}) => {
  const post = allBlogs.find((p) => p.slug === params?.slug)!
  const { path, slug, cover: image } = post

  const cover = await withBlurPlaceholder(`/images/${path}/${slug}/${image}`)

  return {
    props: {
      ...pick(post, [
        'title',
        'summary',
        'publishedAt',
        'path',
        'slug',
        'body'
      ]),
      cover
    }
  }
}

export default BlogItem
