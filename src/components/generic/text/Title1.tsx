import {css, StyleSheet} from 'aphrodite';
import React from 'react';
import textStyle from '../../../styles/textStyle';

const styles = StyleSheet.create({
  root: {
    margin: 0,
  },
});

type Props = Readonly<{
  children: React.ReactElement | string;
}>;

export default function Title1({children}: Props): React.ReactElement {
  return <h1 className={css(styles.root, textStyle.primary)}>{children}</h1>;
}
