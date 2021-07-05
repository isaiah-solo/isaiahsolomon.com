import React from "react";
import {css, StyleSheet} from 'aphrodite';
import Editor from "rich-markdown-editor";

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
    boxSizing: 'border-box',
    paddingLeft: 32,
  },
});

type Props = Readonly<{
  defaultText?: string | null,
  label: string,
  onTextChange?: (newText: string) => void,
}>;

export default function RichTextInput({
  defaultText,
  label,
  onTextChange,
}: Props): React.ReactElement {
  return (
    <div className={css(styles.root)}>
      <SubTitle>{label}</SubTitle>
      <Card>
        <CardContent styleOverride={styles.input}>
          <Editor
            defaultValue={defaultText}
            onChange={getValue => {
              onTextChange?.(getValue());
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};
