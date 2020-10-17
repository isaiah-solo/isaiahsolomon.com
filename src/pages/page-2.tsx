// Gatsby supports TypeScript natively!
import React from "react";
import {PageProps, Link} from "gatsby";

import Layout from "../components/generic/Layout";

import SEO from "../components/SEO";

export default function SecondPage(props: PageProps) {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2 ({props.path})</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}
