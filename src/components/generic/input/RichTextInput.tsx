import React from "react";
import {StyleSheet} from 'aphrodite';
import Editor from "rich-markdown-editor";

import Card from "../card/Card";
import CardContent from "../card/CardContent";

const styles = StyleSheet.create({
  editor: {
    boxSizing: 'border-box',
    paddingLeft: 32,
  },
});

type Props = {
  children?: React.ReactNodeArray | React.ReactElement,
};

export default function RichTextInput({
  children: _,
}: Props): React.ReactElement {
  return (
    <Card>
      <CardContent styleOverride={styles.editor}>
        <Editor defaultValue="Hello world!" onChange={() => { }} />
      </CardContent>
    </Card>
  );
};
