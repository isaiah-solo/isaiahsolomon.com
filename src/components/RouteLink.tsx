import React from "react";
import {Link as GatsbyLink} from "gatsby";
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  root: {
    color: '#457b9d',
    display: 'block',
    textDecoration: 'none',
  },
});

type Props = {
  children: React.ReactElement | string,
  to: string,
};

export default function RouteLink({
  children,
  to,
}: Props): React.ReactElement {
  return (
    <GatsbyLink
      className={css(styles.root)}
      to={to}>
      {children}
    </GatsbyLink>
  );
};
