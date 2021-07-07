import {StyleSheet} from 'aphrodite';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Layout from '../layout/Layout';
import Nav from '../layout/Nav';
import Section from '../layout/Section';

const styles = StyleSheet.create({
  body: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
  },
});

export default function PageSkeleton(): React.ReactElement {
  return (
    <Layout
      nav={
        <Nav
          leftContent={<Skeleton height={22} width={100} />}
          rightContent={<Skeleton height={22} width={200} />}
        />
      }
      seo="Loading">
      <Section styleOverride={styles.body}>
        <Skeleton height={42} />
        <Skeleton height={22} />
        <Skeleton height={150} />
      </Section>
    </Layout>
  );
}
