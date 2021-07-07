import React from 'react';
import Editor from 'rich-markdown-editor';

type Props = Readonly<{
  children: string;
}>;

export default function Markdown({children}: Props): React.ReactElement {
  return <Editor defaultValue={children} onChange={() => {}} readOnly />;
}
