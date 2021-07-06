import React from 'react';
import {StyleSheet} from 'aphrodite';
import {graphql} from 'gatsby';

import BlogNav from '../../components/blog/BlogNav';
import Footer from '../../components/generic/layout/Footer';
import Layout from '../../components/generic/layout/Layout';
import Section from '../../components/generic/layout/Section';
import Title1 from '../../components/generic/text/Title1';
import Markdown from '../../components/generic/text/Markdown';

export const query = graphql`
  query($id: String!) {
    blogArticles(id: {eq: $id}) {
      content
      title
    }
  }
`;

const styles = StyleSheet.create({
  content: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
  },
});

export default function BlogArticlePage({data}): React.ReactElement {
  const {content, title} = data.blogArticles;

  return (
    <Layout
      footer={<Footer />}
      nav={<BlogNav />}
      seo={title}>
      <Section
        styleOverride={styles.content}
        title={title}>
        <Markdown>{content}</Markdown>
      </Section>
    </Layout >
  );
}
