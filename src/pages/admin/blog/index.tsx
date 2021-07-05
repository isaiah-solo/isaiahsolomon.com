import React from "react";
import {StyleSheet} from "aphrodite";
import {graphql} from "gatsby";

import {useAdminSignInProvider} from "../../../contexts/AdminSignInContext";
import BlogPreviewCard, {BlogPreviewCardNode} from "../../../components/blog/BlogPreviewCard";
import Layout from "../../../components/generic/layout/Layout";
import Section from "../../../components/generic/layout/Section";
import AdminNav from "../../../components/admin/AdminNav";

export const query = graphql`
  query {
    allBlogArticles {
      nodes {
        blogArticlePath: gatsbyPath(filePath: "/admin/blog/{BlogArticles.id}")
        id
        ...BlogPreviewCard
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

type BlogArticle = Readonly<{
  blogArticlePath: string,
}>;

type Props = Readonly<{
  data: Readonly<{
    allBlogArticles: Readonly<{
      nodes: ReadonlyArray<BlogPreviewCardNode & BlogArticle>
    }>
  }>,
}>;

export default function AdminBlogPage({
  data
}: Props): React.ReactElement {
  const AdminSignInProvider = useAdminSignInProvider();
  
  const blogArticles = data.allBlogArticles.nodes;
  const blogArticleCards = blogArticles.map(blogArticle => (
    <BlogPreviewCard
      blogArticle={blogArticle}
      key={blogArticle.id}
      path={blogArticle.blogArticlePath}
    />
  ));

  return (
    <AdminSignInProvider>
      <Layout
        nav={<AdminNav />}
        seo={null}>
        <Section
          styleOverride={styles.cards}
          subtitle="Where I post my top-of-mind articles."
          title="Blog">
          {blogArticleCards}
        </Section>
      </Layout>
    </AdminSignInProvider>
  );
};
