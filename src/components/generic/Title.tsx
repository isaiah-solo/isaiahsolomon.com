import React from "react";
import {StyleSheet, css} from 'aphrodite';

import textStyle from "../../styles/textStyle";

const styles = StyleSheet.create({
  root: {
    margin: 0,
  },
});

type Props = {
  children: React.ReactElement | string,
};

export default function Title({
  children,
}: Props): React.ReactElement {
  return (
    <h1 className={css(styles.root, textStyle.primary)}>
      {children}
    </h1>
  );
};
