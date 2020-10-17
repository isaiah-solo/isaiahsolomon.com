import React from "react";
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  content: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: 'calc(100vh - 78px)',
    margin: 'auto',
    maxWidth: 960,
    padding: 20,
  },
  main: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    width: '100%',
  },
});

type Props = {
  children: React.ReactNodeArray,
  footer?: React.ReactElement,
  nav?: React.ReactElement,
};

export default function Layout({
  children,
  footer,
  nav,
}: Props): React.ReactElement {
  return (
    <div>
      {nav}
      <div className={css(styles.content)}>
        <main className={css(styles.main)}>{children}</main>
        {footer}
      </div>
    </div>
  );
};
