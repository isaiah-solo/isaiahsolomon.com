import {css, StyleSheet} from 'aphrodite';
import React from 'react';
import {useSignOutCallback} from '../../contexts/AdminSignInContext';
import FlatButton from '../generic/button/FlatButton';
import Nav from '../generic/layout/Nav';
import RouteLink from '../generic/text/RouteLink';
import SubTitle from '../generic/text/SubTitle';

const styles = StyleSheet.create({
  row: {
    boxSizing: 'border-box',
    display: 'grid',
    gridAutoFlow: 'column',
    gridGap: 12,
  },
});

export default function AdminNav(): React.ReactElement {
  const signOut = useSignOutCallback();

  return (
    <Nav
      leftContent={
        <div className={css(styles.row)}>
          <RouteLink to="/admin">
            <SubTitle>Home</SubTitle>
          </RouteLink>
          <RouteLink to="/admin/blog">
            <SubTitle>Blog</SubTitle>
          </RouteLink>
        </div>
      }
      rightContent={
        <div className={css(styles.row)}>
          <RouteLink to="/">
            <FlatButton>Go to Public</FlatButton>
          </RouteLink>
          <FlatButton onClick={signOut}>Sign Out</FlatButton>
        </div>
      }
    />
  );
}
