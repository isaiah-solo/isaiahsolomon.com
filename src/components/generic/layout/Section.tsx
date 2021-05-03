import React from "react";
import {StyleSheet, css} from 'aphrodite';

import Title1 from "../text/Title1";
import Paragraph from "../text/Paragraph";

const styles = StyleSheet.create({
  root: {
    boxSizing: 'border-box',
    width: '100%',
  },
  content: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 20,
    margin: 'auto',
    maxWidth: 920,
  },
});

type Props = {
  children: React.ReactNodeArray | React.ReactElement,
  subtitle?: string | null,
  title?: string | null,
};

export default function Section({
  children,
  subtitle = null,
  title = null,
}: Props): React.ReactElement {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.content)}>
        <div>
          {title !== null && <Title1>{title}</Title1>}
          {subtitle !== null && <Paragraph>{subtitle}</Paragraph>}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};
