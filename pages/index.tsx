import { attachMainLayout } from '~/layouts/Main.layout'
import container from '~/styles/container.style'

import { Page } from '~/types/page.type'

const Home: Page = () => {
  return (
    <div className={container({ size: 'small' })}>
      Ngga ada apa-apa di sini.
    </div>
  )
}

Home.layout = attachMainLayout

export default Home
