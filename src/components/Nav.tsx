import React from "react";
import {StyleSheet, css} from 'aphrodite';

type BoxSizing = 'border-box';

const styles = StyleSheet.create({
  root: {
    background: 'white',
    boxSizing: 'border-box' as BoxSizing,
  },
  content: {
    boxSizing: 'border-box' as BoxSizing,
    display: 'flex',
    height: 'fit-content',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: 960,
    padding: 20,
  },
});

type Props = {
  leftContent?: React.ReactElement,
  rightContent?: React.ReactElement,
};

export default function Nav({
  leftContent,
  rightContent,
}: Props): React.ReactElement {
  return (
    <header className={css(styles.root)}>
      <div className={css(styles.content)}>
        {leftContent}
        {rightContent}
      </div>
    </header>
  );
};
