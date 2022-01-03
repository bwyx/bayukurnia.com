import { useEffect } from 'react'

import SEO from '~/components/SEO'
import { globalStyles } from '~/styles/global.style'
import themes from '~/styles/themes'

import type { AppProps } from 'next/app'
import type { Page } from '~/types/page.type'

type AppLayout = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps }: AppLayout) {
  globalStyles()
  const attachLayout = Component.layout ?? ((page: React.ReactNode) => page)

  useEffect(() => {
    for (const themeName in themes) {
      if (Object.prototype.hasOwnProperty.call(themes, themeName)) {
        const { className } = themes[themeName as keyof typeof themes]

        const classes = document.documentElement.classList
        const scheme = window.matchMedia(`(prefers-color-scheme: ${themeName})`)

        const applyScheme = (scheme: MediaQueryList) => {
          const action = scheme.matches ? 'add' : 'remove'
          classes[action](className)
        }

        applyScheme(scheme)
        scheme.addEventListener('change', () => applyScheme(scheme))
      }
    }
  }, [])

  return attachLayout(
    <>
      <SEO />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
