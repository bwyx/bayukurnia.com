import { attachMainLayout } from '~/layouts/Main.layout'

import { Page } from '~/types/page.type'

const Home: Page = () => {
  return <div>Ngga ada apa-apa di sini.</div>
}

Home.layout = attachMainLayout

export default Home
