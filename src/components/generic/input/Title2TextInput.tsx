import React, {useState} from "react";
import {css, StyleSheet} from 'aphrodite';

import Card from "../card/Card";
import CardContent from "../card/CardContent";
import SubTitle from "../text/SubTitle";

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
  defaultText?: string | null,
  label: string,
  onTextChange?: (newText: string) => void,
}>;

export default function Title2TextInput({
  defaultText,
  label,
  onTextChange,
}: Props): React.ReactElement {
  const [text, setText] = useState<string>(defaultText ?? '');

  return (
    <div className={css(styles.root)}>
      <SubTitle>{label}</SubTitle>
      <Card>
        <CardContent>
          <input
            className={css(styles.input)}
            onChange={event => {
              const newText = event.target.value;

              setText(newText);
              onTextChange?.(newText);
            }}
            value={text}
          />
        </CardContent>
      </Card>
    </div>
  );
};
