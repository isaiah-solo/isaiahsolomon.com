import React from "react";

import useTextStyles from "../hooks/useTextStyles";

const styles = {
  root: {
    margin: 0,
  },
};

type Props = {
  children: React.ReactElement | string,
};

export default function Title({
  children,
}: Props): React.ReactElement {
  const textStyle = useTextStyles('primary');

  return (
    <h1 style={{...styles.root, ...textStyle}}>
      {children}
    </h1>
  );
};
