import React from "react";
import {StyleSheet, css} from 'aphrodite';

import Footer from '../components/generic/Footer';
import Layout from "../components/generic/Layout";
import Link from '../components/generic/Link';
import Paragraph from "../components/generic/Paragraph";
import ProfileImage from "../components/generic/ProfileImage";
import RouteLink from "../components/generic/RouteLink";
import Title from "../components/generic/Title";

import HomeNav from '../components/nav/HomeNav';

import SEO from "../components/SEO";

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'grid',
    flexGrow: 1,
    gridGap: 20,
    gridTemplateColumns: '1fr auto',
    width: '100%',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
});

export default function HomePage(): React.ReactElement {
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
      nav={<HomeNav />}
    >
      <SEO title="Home" />
      <div className={css(styles.body)}>
        <div className={css(styles.text)}>
          <Title>Isaiah Solomon</Title>
          <Paragraph>
            Hey, my name is Isaiah. I am a software developer and I like to build cool things.
          </Paragraph>
          <RouteLink to="/page-2/">
            Go to page 2
          </RouteLink>
        </div>
        <ProfileImage />
      </div>
    </Layout>
  );
};
