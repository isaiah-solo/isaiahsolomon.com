import React from "react";
import {StyleSheet, css, StyleDeclarationValue} from 'aphrodite';

const styles = StyleSheet.create({
  root: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
    padding: 16,
  },
});

type Props = {
  children?: React.ReactNodeArray | React.ReactElement,
  styleOverride?: StyleDeclarationValue,
};

export default function CardContent({
  children,
  styleOverride,
}: Props): React.ReactElement {
  return (
    <div className={css(styles.root,styleOverride)}>
      {children}
    </div>
  );
};
