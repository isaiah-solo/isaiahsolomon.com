import React from "react";
import {StyleSheet, css} from 'aphrodite';

import Footer from '../components/generic/Footer';
import Layout from "../components/generic/Layout";
import Link from '../components/generic/Link';
import Paragraph from "../components/generic/Paragraph";
import ProfileImage from "../components/generic/ProfileImage";
import Title from "../components/generic/Title";

import HomeNav from '../components/nav/HomeNav';

import Section from "../components/generic/Section";

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
  titleSection: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    height: 'calc(100vh - 136px)',
    width: '100%',
  },
});

export default function HomePage(): React.ReactElement {
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
      nav={<HomeNav />}
      seo="Home"
    >
      <Section>
        <div className={css(styles.titleSection)}>
          <div className={css(styles.body)}>
            <div className={css(styles.text)}>
              <Title>Isaiah Solomon</Title>
              <Paragraph>
                Hey, my name is Isaiah. I am a software developer and I like to build cool things.
              </Paragraph>
            </div>
            <ProfileImage />
          </div>
        </div>
      </Section>
    </Layout>
  );
};
