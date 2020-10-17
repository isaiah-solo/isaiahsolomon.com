import React from "react";

import RouteLink from "../components/RouteLink";
import Title from "../components/Title";
import ProfileImage from "../components/ProfileImage";
import Paragraph from "../components/Paragraph";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

type BoxSizing = 'border-box';
type FlexDirection = 'column' | 'row';

const styles = {
  body: {
    alignItems: 'center',
    boxSizing: 'border-box' as BoxSizing,
    display: 'grid',
    flexGrow: 1,
    gridGap: 20,
    gridTemplateColumns: '1fr auto',
    width: '100%',
  },
  text: {
    display: 'flex',
    flexDirection: 'column' as FlexDirection,
    height: '100%',
  },
  image: {
    borderRadius: '50%',
    boxSizing: 'border-box' as BoxSizing,
    height: 300,
    width: 300,
  },
};

export default function HomePage(): React.ReactElement {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={styles.body}>
        <div style={styles.text}>
          <Title>Isaiah Solomon</Title>
          <Paragraph>Hey, my name is Isaiah. I am a software developer and I like to build cool things.</Paragraph>
          <RouteLink to="/page-2/">
            Go to page 2
          </RouteLink>
        </div>
        <div style={styles.image}>
          <ProfileImage />
        </div>
      </div>
    </Layout>
  );
};
