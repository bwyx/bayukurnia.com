import NextImage from 'next/image'
import { useState } from 'react'
import { ImageBlock } from '~/types/notion.type'

const Image = ({ image }: ImageBlock) => {
  const [ratio, setRatio] = useState(1)

  const { url } = image.type === 'file' ? image.file : image.external
  const alt = image.caption.map((c) => c.plain_text).join('')

  return (
    <NextImage
      src={url}
      alt={alt}
      width={420}
      height={420 / ratio}
      layout="responsive"
      onLoadingComplete={({ naturalWidth, naturalHeight }) =>
        setRatio(naturalWidth / naturalHeight)
      }
    />
  )
}

export default Image
