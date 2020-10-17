import React from "react";
import {css} from 'aphrodite';

import textStyle from "../../styles/textStyle";

type Props = {
  children: React.ReactElement | string,
};

export default function Paragraph({
  children,
}: Props): React.ReactElement {
  return (
    <p className={css(textStyle.secondary)}>
      {children}
    </p>
  );
};
