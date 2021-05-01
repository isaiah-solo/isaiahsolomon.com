// Gatsby supports TypeScript natively!
import React from "react";
import {StyleSheet, css} from 'aphrodite';

import Footer from '../components/generic/Footer';
import Layout from "../components/generic/Layout";
import Link from '../components/generic/Link';
import Paragraph from "../components/generic/Paragraph";
import ProfileImage from "../components/generic/ProfileImage";
import Title from "../components/generic/Title";

import BlogNav from '../components/nav/BlogNav';

import SEO from "../components/SEO";

const styles = StyleSheet.create({
  text: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
});

export default function BlogPage(): React.ReactElement {
  return (
    <Layout
      footer={
        <Footer>
          © {new Date().getFullYear()} Powered by
          {' '}
          <Link href="https://www.gatsbyjs.org">
            Gatsby
          </Link>
        </Footer>
      }
      nav={<BlogNav />}
    >
      <SEO title="Blog" />
      <div className={css(styles.text)}>
        <Title>Welcome to my blog!</Title>
        <Paragraph>
          Hey hey
        </Paragraph>
      </div>
    </Layout>
  );
}
