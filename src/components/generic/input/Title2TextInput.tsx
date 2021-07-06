import React from 'react';
import {css, StyleSheet} from 'aphrodite';

import Card from '../card/Card';
import CardContent from '../card/CardContent';
import SubTitle from '../text/SubTitle';

const styles = StyleSheet.create({
  root: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 8,
  },
  input: {
    border: 'none',
    boxSizing: 'border-box',
    fontSize: '1.5em',
    outline: 'none',
  },
});

type Props = Readonly<{
  label: string;
  setText?: (text: string) => void;
  text: string;
}>;

export default function Title2TextInput({
  label,
  setText,
  text,
}: Props): React.ReactElement {
  return (
    <div className={css(styles.root)}>
      <SubTitle>{label}</SubTitle>
      <Card>
        <CardContent>
          <input
            className={css(styles.input)}
            onChange={event => setText(event.target.value)}
            value={text}
          />
        </CardContent>
      </Card>
    </div>
  );
}
