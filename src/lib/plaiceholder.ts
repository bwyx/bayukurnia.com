import { getPlaiceholder } from 'plaiceholder'

import type { BlurCover } from '~/types/blog.type'

export const withBlurPlaceholder = async (url: string) => {
  const { base64, img } = await getPlaiceholder(url)

  return <BlurCover>{ blurDataURL: base64, ...img }
}
