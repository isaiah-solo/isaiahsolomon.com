import React from "react";
import {StyleSheet, css} from 'aphrodite';

import Nav from "../generic/layout/Nav";

import RouteLink from "../generic/text/RouteLink";
import SubTitle from "../generic/text/SubTitle";

const styles = StyleSheet.create({
  row: {
    boxSizing: 'border-box',
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
            <SubTitle>Home</SubTitle>
          </RouteLink>
          <RouteLink to="/blog">
            <SubTitle>Blog</SubTitle>
          </RouteLink>
        </div>
      }
    />
  );
};
