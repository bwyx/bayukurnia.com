import Image from 'next/image'
import { useState } from 'react'

import { css } from '~/styles'

import type { ImageProps } from 'next/image'

const styles = {
  img: css({
    transitionDuration: '0.5s',
    transitionTimingFunction: 'ease-in-out'
  })(),
  imgBlur: css({
    willChange: 'transform',
    transform: 'scale(1.05)'
  })()
}

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
