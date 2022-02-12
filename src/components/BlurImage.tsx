import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

import styles from '~/styles/components/BlurImage.style'

interface Props {
  blurClassName?: string
}

const BlurImage = ({
  className = styles.img,
  blurClassName = styles.imgBlur,
  ...imgProps
}: ImageProps & Props) => {
  const [loading, setLoading] = useState(true)

  return (
    <Image
      {...imgProps}
      alt={imgProps.alt}
      className={`${className} ${loading ? blurClassName : null}`}
      onLoadingComplete={() => setLoading(false)}
      placeholder="blur"
    />
  )
}

export default BlurImage
