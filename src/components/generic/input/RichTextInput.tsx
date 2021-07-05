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
  label: string,
}>;

export default function RichTextInput({
  label,
}: Props): React.ReactElement {
  return (
    <div className={css(styles.root)}>
      <SubTitle>{label}</SubTitle>
      <Card>
        <CardContent styleOverride={styles.input}>
          <Editor defaultValue="Hello world!" onChange={() => { }} />
        </CardContent>
      </Card>
    </div>
  );
};
