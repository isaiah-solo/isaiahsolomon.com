import React from "react";
import {StyleSheet, css} from 'aphrodite';
import Link from "../text/Link";

const styles = StyleSheet.create({
  root: {
    boxSizing: 'border-box',
    width: '100%',
  },
});

export default function Footer(): React.ReactElement {
  return (
    <footer className={css(styles.root)}>
      © {new Date().getFullYear()} Powered by
      {' '}
      <Link href="https://www.gatsbyjs.org">
        Gatsby
      </Link>
    </footer>
  );
};
