import {css, StyleSheet} from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
  root: {
    background: 'white',
    boxSizing: 'border-box',
  },
  content: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    height: 'fit-content',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: 960,
    padding: 20,
  },
});

type Props = Readonly<{
  leftContent?: React.ReactElement;
  rightContent?: React.ReactElement;
}>;

export default function Nav({
  leftContent,
  rightContent,
}: Props): React.ReactElement {
  return (
    <header className={css(styles.root)}>
      <div className={css(styles.content)}>
        {leftContent ?? <div />}
        {rightContent ?? <div />}
      </div>
    </header>
  );
}
