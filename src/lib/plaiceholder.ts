import { getPlaiceholder } from 'plaiceholder'

import type { Cover } from '~/types/blog.type'

export const generateCoverPlaceholder = async (url: string) => {
  const { base64, img } = await getPlaiceholder(url)

  return <Cover>{ blurDataURL: base64, ...img }
}
