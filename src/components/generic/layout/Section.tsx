import {css, StyleDeclarationValue, StyleSheet} from 'aphrodite';
import React from 'react';
import Paragraph from '../text/Paragraph';
import Title1 from '../text/Title1';

const styles = StyleSheet.create({
  root: {
    boxSizing: 'border-box',
    width: '100%',
  },
  content: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
    margin: 'auto',
    maxWidth: 920,
  },
  header: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
  },
});

type Props = Readonly<{
  children: React.ReactNodeArray | React.ReactElement;
  subtitle?: string | null;
  styleOverride?: StyleDeclarationValue;
  title?: string | null;
}>;

export default function Section({
  children,
  subtitle = null,
  styleOverride,
  title = null,
}: Props): React.ReactElement {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.content)}>
        <div className={css(styles.header)}>
          {title !== null && <Title1>{title}</Title1>}
          {subtitle !== null && <Paragraph>{subtitle}</Paragraph>}
        </div>
        <div className={css(styleOverride)}>{children}</div>
      </div>
    </div>
  );
}
