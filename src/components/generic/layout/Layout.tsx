import React from "react";
import {StyleSheet, css} from 'aphrodite';

import SEO from "./SEO";

const styles = StyleSheet.create({
  content: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: 20,
  },
  main: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
  },
});

type Props = {
  children: React.ReactNodeArray | React.ReactElement,
  footer?: React.ReactElement,
  nav?: React.ReactElement,
  seo: string,
};

export default function Layout({
  children,
  footer,
  nav,
  seo,
}: Props): React.ReactElement {
  return (
    <div>
      {nav}
      <div className={css(styles.content)}>
        <SEO title={seo} />
        <main className={css(styles.main)}>{children}</main>
        {footer}
      </div>
    </div>
  );
};
