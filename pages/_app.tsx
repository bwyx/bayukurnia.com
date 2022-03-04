import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

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
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
