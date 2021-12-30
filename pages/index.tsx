import { attachMainLayout } from '~/layouts/Main.layout'

import { Page } from '~/types/page.type'

const Home: Page = () => {
  return <div>Hi there! </div>
}

Home.layout = attachMainLayout

export default Home
