import {StyleSheet} from 'aphrodite';
import {graphql} from 'gatsby';
import React from 'react';
import BlogNav from '../../components/blog/BlogNav';
import BlogPreviewCard, {
  BlogPreviewCardNode,
} from '../../components/blog/BlogPreviewCard';
import Footer from '../../components/generic/layout/Footer';
import Layout from '../../components/generic/layout/Layout';
import Section from '../../components/generic/layout/Section';

export const query = graphql`
  query {
    allBlogArticles {
      nodes {
        id
        ...BlogPreviewCard
      }
    }
  }
`;

const styles = StyleSheet.create({
  cards: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
  },
});

type BlogArticle = Readonly<{
  blogArticlePath: string;
}>;

type Props = Readonly<{
  data: Readonly<{
    allBlogArticles: Readonly<{
      nodes: ReadonlyArray<BlogPreviewCardNode & BlogArticle>;
    }>;
  }>;
}>;

export default function BlogPage({data}: Props): React.ReactElement {
  const blogArticles = data.allBlogArticles.nodes;
  const blogArticleCards = blogArticles.map(blogArticle => (
    <BlogPreviewCard
      blogArticle={blogArticle}
      key={blogArticle.id}
      linkText="GO TO FULL ARTICLE"
      path={`/blog/${blogArticle.id}`}
    />
  ));

  return (
    <Layout footer={<Footer />} nav={<BlogNav />} seo="Blog">
      <Section
        styleOverride={styles.cards}
        subtitle="Where I post my top-of-mind articles."
        title="Blog">
        {blogArticleCards}
      </Section>
    </Layout>
  );
}
