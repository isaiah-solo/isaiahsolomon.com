import React from "react";

import useTextStyles from "../hooks/useTextStyles";

type Props = {
  children: React.ReactElement | string,
};

export default function Paragraph({
  children,
}: Props): React.ReactElement {
  const textStyle = useTextStyles('secondary');

  return (
    <p style={textStyle}>
      {children}
    </p>
  );
};
