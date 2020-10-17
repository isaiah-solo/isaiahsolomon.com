import React from "react"

import Layout from "../components/generic/Layout"

import SEO from "../components/SEO"

export default function NotFoundPage(): React.ReactElement {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};
