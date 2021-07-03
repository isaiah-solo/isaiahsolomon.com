import React from "react";
import {graphql} from "gatsby";

import BlogNav from '../../components/blog/BlogNav';
import Footer from '../../components/generic/layout/Footer';
import Layout from "../../components/generic/layout/Layout";
import Link from '../../components/generic/text/Link';
import Paragraph from "../../components/generic/text/Paragraph";
import Section from "../../components/generic/layout/Section";
import Title1 from "../../components/generic/text/Title1";

export const query = graphql`
  query($id: String!) {
    blogArticles(id: {eq: $id}) {
      content
      title
    }
  }
`;

export default function BlogArticlePage({data}): React.ReactElement {
  const {content, title} = data.blogArticles;

  return (
    <Layout
      footer={
        <Section>
          <Footer>
            © {new Date().getFullYear()} Powered by
            {' '}
            <Link href="https://www.gatsbyjs.org">
              Gatsby
            </Link>
          </Footer>
        </Section>
      }
      nav={<BlogNav />}
      seo={title}>
      <Section>
        <Title1>{title}</Title1>
        <Paragraph>{content}</Paragraph>
      </Section>
    </Layout>
  );
}
