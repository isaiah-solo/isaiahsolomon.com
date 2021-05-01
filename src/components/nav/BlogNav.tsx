import React from "react";
import {StyleSheet, css} from 'aphrodite';

import Nav from "../generic/Nav";
import SmallTitle from "../generic/SmallTitle";
import RouteLink from "../generic/RouteLink";

type BoxSizing = 'border-box';

const styles = StyleSheet.create({
  row: {
    boxSizing: 'border-box' as BoxSizing,
    display: 'grid',
    height: 22,
    gridAutoFlow: 'column',
    gridGap: 12,
  },
});

export default function BlogNav(): React.ReactElement {
  return (
    <Nav
      leftContent={
        <div className={css(styles.row)}>
          <RouteLink to="/">
            <SmallTitle>Home</SmallTitle>
          </RouteLink>
          <RouteLink to="/blog">
            <SmallTitle>Blog</SmallTitle>
          </RouteLink>
        </div>
      }
    />
  );
};
