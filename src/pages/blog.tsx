// Gatsby supports TypeScript natively!
import React from "react";
import {StyleSheet, css} from 'aphrodite';

import Footer from '../components/generic/Footer';
import Layout from "../components/generic/Layout";
import Link from '../components/generic/Link';
import Paragraph from "../components/generic/Paragraph";
import Title from "../components/generic/Title";

import BlogNav from '../components/nav/BlogNav';
import Section from "../components/generic/Section";

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
          <Title>Welcome to my blog!</Title>
          <Paragraph>
            Hey hey
          </Paragraph>
        </div>
      </Section>
    </Layout>
  );
}
