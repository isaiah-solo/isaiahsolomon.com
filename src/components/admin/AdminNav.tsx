import React from "react";
import {StyleSheet, css} from 'aphrodite';

import FlatButton from "../generic/button/FlatButton";
import Nav from "../generic/layout/Nav";
import SubTitle from "../generic/text/SubTitle";
import {useSignOutCallback} from "../../contexts/AdminSignInContext";
import RouteLink from "../generic/text/RouteLink";

const styles = StyleSheet.create({
  row: {
    boxSizing: 'border-box',
    display: 'grid',
    height: 22,
    gridAutoFlow: 'column',
    gridGap: 12,
  },
});

export default function AdminNav(): React.ReactElement {
  const signOut = useSignOutCallback();

  return (
    <Nav
      leftContent={(
        <div className={css(styles.row)}>
          <RouteLink to="/admin">
            <SubTitle>Home</SubTitle>
          </RouteLink>
          <RouteLink to="/admin/blog">
            <SubTitle>Blog</SubTitle>
          </RouteLink>
        </div>
      )}
      rightContent={(
        <FlatButton onClick={signOut}>
          Sign Out
        </FlatButton>
      )}
    />
  );
};
