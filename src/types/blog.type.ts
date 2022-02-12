import type { Blog } from 'contentlayer/generated'
import type { IGetImageReturn } from 'plaiceholder/dist/get-image'

type ImgReturn = Pick<IGetImageReturn, 'img'>

export type BlurCover = {
  [key in keyof ImgReturn['img']]: ImgReturn['img'][key]
} & {
  blurDataURL: string
}

export type PostProperties = Pick<
  Blog,
  'title' | 'summary' | 'publishedAt' | 'path' | 'slug'
>

export type PostWithBody = PostProperties & Pick<Blog, 'body'>

export type PostWithCover = PostProperties & {
  cover: BlurCover
}

export type PostWithCoverAndBody = PostWithCover & Pick<Blog, 'body'>
