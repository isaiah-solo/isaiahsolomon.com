import {css, StyleDeclarationValue, StyleSheet} from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
  root: {
    border: 'none',
    boxSizing: 'border-box',
    background: 'none',
    cursor: 'pointer',
    padding: 0,
  },
});

type Props = Readonly<{
  children?: React.ReactElement | string;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  styleOverride?: StyleDeclarationValue;
}>;

const HoverButton = (
  {children, onClick, onMouseEnter, onMouseLeave, styleOverride}: Props,
  ref,
): React.ReactElement => {
  return (
    <button
      className={css(styles.root, styleOverride)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}>
      {children}
    </button>
  );
};

export default React.forwardRef(HoverButton);
