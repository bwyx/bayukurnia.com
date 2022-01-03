import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
}

const SEO = ({ title, description }: SEOProps) => {
  const siteUrl = 'https://bayukurnia.com'
  const siteTitle = 'Bayu Kurnia'
  const siteDescription =
    'Bayu Kurnia is a software engineer based in Indonesia. He is a self-taught developer with a passion for building web applications.'

  const titleTemplate = `%s | ${siteTitle}`

  return (
    <Head>
      <title>{title ? titleTemplate.replace('%s', title) : siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
    </Head>
  )
}

export default SEO
