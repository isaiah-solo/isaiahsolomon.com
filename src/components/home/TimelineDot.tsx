import {css, StyleSheet} from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#1d3557',
    borderRadius: '50%',
    boxSizing: 'border-box',
    height: 12,
    width: 12,
  },
});

export default function TimelineDot(): React.ReactElement {
  return <div className={css(styles.root)} />;
}
