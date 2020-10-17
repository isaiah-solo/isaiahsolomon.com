import React from "react";
import {StyleSheet, css} from 'aphrodite';

import useTextStyles from "../hooks/useTextStyles";

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
  const textStyle = useTextStyles('primary');

  return (
    <h1 className={css(styles.root, textStyle)}>
      {children}
    </h1>
  );
};
