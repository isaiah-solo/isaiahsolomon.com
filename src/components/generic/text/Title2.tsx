import React from 'react';
import {StyleSheet, css} from 'aphrodite';

import textStyle from '../../../styles/textStyle';

const styles = StyleSheet.create({
  root: {
    margin: 0,
  },
});

type Props = Readonly<{
  children: React.ReactElement | string;
}>;

export default function Title2({children}: Props): React.ReactElement {
  return <h2 className={css(styles.root, textStyle.primary)}>{children}</h2>;
}
