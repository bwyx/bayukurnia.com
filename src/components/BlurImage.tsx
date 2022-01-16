import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface Props {
  blurClassName?: string
}

const BlurImage = ({
  className,
  blurClassName,
  ...imgProps
}: ImageProps & Props) => {
  const [loading, setLoading] = useState(true)

  return (
    <Image
      {...imgProps}
      alt={imgProps.alt}
      className={`${className} ${loading ? blurClassName : null}`}
      onLoadingComplete={() => setLoading(false)}
    />
  )
}

export default BlurImage
