import React from "react";
import {StyleSheet, css, StyleDeclarationValue} from 'aphrodite';

const styles = StyleSheet.create({
  root: {
    borderRadius: 4,
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxSizing: 'border-box',
    background: 'white',
  },
  hovered: {
    ':hover': {
      backgroundColor: '#f6f6f6',
      cursor: 'pointer',
    }
  }
});

type Props = Readonly<{
  children?: React.ReactNodeArray | React.ReactElement,
  href?: string | null,
  onClick?: (() => void) | null,
  styleOverride?: StyleDeclarationValue,
}>;

export default function Card({
  children,
  href = null,
  onClick = null,
  styleOverride,
}: Props): React.ReactElement {
  const content = (
    <div
      className={css(
        styles.root,
        (href !== null || onClick !== null) && styles.hovered,
        styleOverride,
      )}
      onClick={onClick}>
      {children}
    </div>
  );

  if (href === null) {
    return content;
  }

  return <a href={href}>{content}</a>;
};
