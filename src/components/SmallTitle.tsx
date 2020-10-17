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
  styles?: Object,
};

export default function SmallTitle({
  children,
  styles: stylesFromProps,
}: Props): React.ReactElement {
  const textStyle = useTextStyles('primary');

  return (
    <p className={css(styles.root, textStyle, stylesFromProps)}>
      {children}
    </p>
  );
};
