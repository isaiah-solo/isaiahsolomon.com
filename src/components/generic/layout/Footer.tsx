import React from "react";
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  root: {
    boxSizing: 'border-box',
    width: '100%',
  },
});

type Props = {
  children: React.ReactNodeArray,
};

export default function Footer({
  children,
}: Props): React.ReactElement {
  return (
    <footer className={css(styles.root)}>
      {children}
    </footer>
  );
};
