import { attachMainLayout } from '~/layouts/Main.layout'

import { Page } from '~/types/page.type'

const About: Page = () => {
  return <div>Di sini juga ngga ada apa-apa.</div>
}

About.layout = attachMainLayout

export default About
