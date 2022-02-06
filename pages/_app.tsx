import SEO from '~/components/SEO'
import { globalStyles } from '~/styles/global.style'

import type { AppProps } from 'next/app'
import type { Page } from '~/types/page.type'

type AppLayout = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps }: AppLayout) {
  globalStyles()
  const attachLayout = Component.layout ?? ((page: React.ReactNode) => page)

  return attachLayout(
    <>
      <SEO />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
