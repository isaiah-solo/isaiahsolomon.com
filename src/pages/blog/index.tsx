import React from "react";
import {StyleSheet} from "aphrodite";
import {graphql} from "gatsby";

import BlogNav from '../../components/blog/BlogNav';
import BlogPreviewCard from "../../components/blog/BlogPreviewCard";
import Footer from '../../components/generic/layout/Footer';
import Layout from "../../components/generic/layout/Layout";
import Link from '../../components/generic/text/Link';
import Section from "../../components/generic/layout/Section";

export const query = graphql`
  query {
    allBlogArticles {
      nodes {
        blogArticlePath: gatsbyPath(filePath: "/blog/{BlogArticles.id}")
        content
        createdDate: created_date
        title
      }
    }
  }
`

const styles = StyleSheet.create({
  cards: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
  },
});

export default function BlogPage({
  data
}): React.ReactElement {
  const blogArticles = data.allBlogArticles.nodes;
  const blogArticleCards = blogArticles.map(({
    blogArticlePath,
    content,
    createdDate,
    title
  }) => (
    <BlogPreviewCard
      content={content}
      key={createdDate}
      path={blogArticlePath}
      title={title}
    />
  ));

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
      seo="Blog">
      <Section
        styleOverride={styles.cards}
        subtitle="Where I post my top-of-mind articles."
        title="Blog">
        {blogArticleCards}
      </Section>
    </Layout>
  );
}
