import React from "react";
import {css, StyleDeclarationValue, StyleSheet} from 'aphrodite';

import Title1 from "../generic/text/Title1";
import Paragraph from "../generic/text/Paragraph";

const styles = StyleSheet.create({
  root: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
  },
  content: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
  },
  header: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
  },
});

type Props = {
  children: React.ReactNodeArray | React.ReactElement,
  styleOverride?: StyleDeclarationValue,
  subtitle: string,
  title: string,
};

export default function TimelineSection({
  children,
  styleOverride,
  subtitle,
  title,
}: Props): React.ReactElement {
  return (
    <div className={css(styles.root, styleOverride)}>
      <div>
        {title !== null && <Title1>{title}</Title1>}
        {subtitle !== null && <Paragraph>{subtitle}</Paragraph>}
      </div>
      <div className={css(styles.content)}>
      {children}
      </div>
    </div>
  );
};