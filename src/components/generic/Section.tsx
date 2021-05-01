import React from "react";
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  root: {
    boxSizing: 'border-box',
    width: '100%',
  },
  content: {
    boxSizing: 'border-box',
    margin: 'auto',
    maxWidth: 920,
  },
});

type Props = {
  children: React.ReactNodeArray | React.ReactElement,
};

export default function Section({
  children,
}: Props): React.ReactElement {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.content)}>
        {children}
      </div>
    </div>
  );
};
