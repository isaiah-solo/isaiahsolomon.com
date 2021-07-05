import React from "react";
import {StyleSheet} from 'aphrodite';
import Editor from "rich-markdown-editor";

import Card from "../card/Card";
import CardContent from "../card/CardContent";

const styles = StyleSheet.create({
  root: {
    borderRadius: 4,
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxSizing: 'border-box',
    background: 'white',
  },
  hovered: {
    ':hover': {
      backgroundColor: '#f6f6f6',
      cursor: 'pointer',
    }
  }
});

type Props = {
  children?: React.ReactNodeArray | React.ReactElement,
};

export default function RichTextInput({
  children: _,
}: Props): React.ReactElement {
  return (
    <Card>
      <CardContent>
        <Editor defaultValue="Hello world!" onChange={() => { }} />
      </CardContent>
    </Card>
  );
};
