import { attachMainLayout } from '~/layouts/Main.layout'

import { Page } from '~/types/page.type'

const About: Page = () => {
  return <div>About Page</div>
}

About.layout = attachMainLayout

export default About
