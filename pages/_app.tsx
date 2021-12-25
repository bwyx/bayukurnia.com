import '~/styles/global.reset.css'
import globalStyles from '~/styles/global.style'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />
}

export default MyApp
