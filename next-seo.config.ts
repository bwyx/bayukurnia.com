import type { DefaultSeoProps } from 'next-seo'

const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Bayu Kurnia',
  defaultTitle: 'Bayu Kurnia',
  description:
    'Bayu Kurnia is a software engineer based in Indonesia. He is a self-taught developer with a passion for building web applications.',
  canonical: 'https://bayukurnia.com',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://bayukurnia.com/',
    site_name: 'Bayu Kurnia'
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@0x4b70',
    handle: '@0x4b70'
  }
}

export default SEO
