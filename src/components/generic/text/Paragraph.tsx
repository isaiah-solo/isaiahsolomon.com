import React from "react";
import {StyleSheet, css, StyleDeclarationValue} from 'aphrodite';

import textStyle from "../../../styles/textStyle";

type Props = {
  children: React.ReactNodeArray | React.ReactElement | string,
  styleOverride?: StyleDeclarationValue,
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 0,
  },
});

export default function Paragraph({
  children,
  styleOverride,
}: Props): React.ReactElement {
  return (
    <p className={css(
      styles.root,
      textStyle.secondary,
      styleOverride,
    )}>
      {children}
    </p>
  );
};
