import React from "react";
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1d3557',
    boxSizing: 'border-box',
    height: '100%',
    margin: 'auto',
    width: 4,
  },
});

export default function TimelineLine(): React.ReactElement {
  return <div className={css(styles.root)} />;
};
