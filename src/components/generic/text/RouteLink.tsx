import {css, StyleSheet} from 'aphrodite';
import {Link as GatsbyLink} from 'gatsby';
import React from 'react';

const styles = StyleSheet.create({
  root: {
    color: '#1976d2',
    display: 'block',
    textDecoration: 'none',
  },
});

type Props = Readonly<{
  children: React.ReactElement | string;
  to: string;
}>;

export default function RouteLink({children, to}: Props): React.ReactElement {
  return (
    <GatsbyLink className={css(styles.root)} to={to}>
      {children}
    </GatsbyLink>
  );
}
