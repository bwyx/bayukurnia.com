import { attachMainLayout } from '~/layouts/Main.layout'
import { Container } from '~/components/commons'

import { Page } from '~/types/page.type'

const About: Page = () => {
  return <Container size="small">Di sini juga ngga ada apa-apa.</Container>
}

About.layout = attachMainLayout

export default About
