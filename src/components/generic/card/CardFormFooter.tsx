import {css, StyleSheet} from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
  root: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 8,
    gridTemplateColumns: '1fr auto auto',
    padding: 16,
  },
});

type Props = Readonly<{
  primaryCTA: React.ReactElement;
  secondaryCTA?: React.ReactElement | null;
}>;

export default function CardFormFooter({
  primaryCTA,
  secondaryCTA = null,
}: Props): React.ReactElement {
  return (
    <div className={css(styles.root)}>
      <div />
      {secondaryCTA !== null ? secondaryCTA : <div />}
      {primaryCTA}
    </div>
  );
}
