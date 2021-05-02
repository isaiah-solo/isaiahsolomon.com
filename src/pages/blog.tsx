// Gatsby supports TypeScript natively!
import React from "react";
import {StyleSheet, css} from 'aphrodite';

import Footer from '../components/generic/Footer';
import Layout from "../components/generic/Layout";
import Section from "../components/generic/Section";

import Link from '../components/generic/text/Link';
import Paragraph from "../components/generic/text/Paragraph";
import Title1 from "../components/generic/text/Title1";

import BlogNav from '../components/blog/BlogNav';

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
      seo="Blog"
    >
      <Section>
        <div className={css(styles.text)}>
          <Title1>Welcome to my blog!</Title1>
          <Paragraph>
            Hey hey
          </Paragraph>
        </div>
      </Section>
    </Layout>
  );
}
