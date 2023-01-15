import Giscus from '@giscus/react'
import config from '~/config'

import { useStore } from 'zustand'
import themeStore from '~/stores/themeStore'

const Comments = () => {
  const theme = useStore(themeStore, (s) => s.theme)

  return (
    <Giscus
      id="comments"
      {...config.giscus}
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme}
      lang="en"
      loading="lazy"
    />
  )
}

export default Comments
