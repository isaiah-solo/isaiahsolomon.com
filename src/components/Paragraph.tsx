import React from "react";

import useTextStyles from "../hooks/useTextStyles";

type Props = {
  children: React.ReactElement | string,
};

const Paragraph = ({
  children,
}: Props): React.ReactElement => {
  const textStyle = useTextStyles('secondary');

  return (
    <p style={textStyle}>
      {children}
    </p>
  );
};

export default Paragraph;
