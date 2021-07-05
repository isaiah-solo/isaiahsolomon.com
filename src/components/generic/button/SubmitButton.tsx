import React from 'react';
import {StyleSheet, css, StyleDeclarationValue} from 'aphrodite';

const styles = StyleSheet.create({
  root: {
    background: '#1976d2',
    border: 'none',
    borderRadius: 8,
    boxSizing: 'border-box',
    color: 'white',
    cursor: 'pointer',
    padding: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    margin: 0,
  },
});

type Props = Readonly<{
  children?: React.ReactElement | string,
  onClick?: () => void,
  styleOverride?: StyleDeclarationValue,
}>;

export default function SubmitButton({
  children,
  onClick,
  styleOverride,
}: Props): React.ReactElement {
  return (
    <button
      className={css(styles.root, styleOverride)}
      onClick={onClick}>
      <p className={css(styles.text)}>
        {children}
      </p>
    </button >
  );
};
