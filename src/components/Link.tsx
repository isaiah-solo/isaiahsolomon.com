import React from "react";
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
  styles?: Object,
  href: string,
};

export default function Link({
  children,
  styles: stylesFromProps,
  href,
}: Props): React.ReactElement {
  return (
    <a
      className={css(styles.root, stylesFromProps)}
      href={href !== '' ? href : '#'}
      rel="noreferrer"
      target="_blank">
      {children}
    </a>
  );
};
