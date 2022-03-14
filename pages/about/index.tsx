import { NextSeo } from 'next-seo'
import { attachMainLayout } from '~/layouts/Main.layout'

import { container } from '~/styles/primitives'

import { Page } from '~/types/page.type'

const About: Page = () => {
  return (
    <div className={container({ size: 'small' })}>
      <NextSeo title="About" />
      Di sini juga ngga ada apa-apa.
    </div>
  )
}

About.layout = attachMainLayout()

export default About
