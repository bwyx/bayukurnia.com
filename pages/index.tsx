import { attachMainLayout } from '~/layouts/Main.layout'
import { Container } from '~/components/commons'

import { Page } from '~/types/page.type'

const Home: Page = () => {
  return <Container size="small">Ngga ada apa-apa di sini.</Container>
}

Home.layout = attachMainLayout

export default Home
