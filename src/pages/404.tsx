import React from 'react'

import Layout from '../components/generic/layout/Layout'
import SEO from '../components/generic/layout/SEO'

export default function NotFoundPage(): React.ReactElement {
  return (
    <Layout seo="404 Not Found">
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}
