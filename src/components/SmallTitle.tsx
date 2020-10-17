import React from "react";

import useTextStyles from "../hooks/useTextStyles";

const styles = {
  root: {
    margin: 0,
  },
};

type Props = {
  children: React.ReactElement | string,
  cstyle?: Object,
};

export default function SmallTitle({
  children,
  cstyle,
}: Props): React.ReactElement {
  const textStyle = useTextStyles('primary');

  return (
    <p style={{...styles.root, ...textStyle, ...cstyle}}>
      {children}
    </p>
  );
};
