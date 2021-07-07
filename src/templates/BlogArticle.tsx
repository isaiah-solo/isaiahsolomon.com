import {StyleSheet} from 'aphrodite';
import {graphql} from 'gatsby';
import React from 'react';
import BlogNav from '../components/blog/BlogNav';
import Footer from '../components/generic/layout/Footer';
import Layout from '../components/generic/layout/Layout';
import Section from '../components/generic/layout/Section';
import Markdown from '../components/generic/text/Markdown';

const styles = StyleSheet.create({
  content: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
  },
});

export default function BlogArticlePage({pageContext}): React.ReactElement {
  const {content, title} = pageContext;

  return (
    <Layout footer={<Footer />} nav={<BlogNav />} seo={title}>
      <Section styleOverride={styles.content} title={title}>
        <Markdown>{content}</Markdown>
      </Section>
    </Layout>
  );
}
