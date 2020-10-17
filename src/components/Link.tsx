import React from "react";

const styles = {
  root: {
    color: '#457b9d',
    display: 'block',
    textDecoration: 'none',
  },
};

type Props = {
  children: React.ReactElement | string,
  cstyle?: Object,
  href: string,
};

export default function Link({
  children,
  cstyle,
  href,
}: Props): React.ReactElement {
  return (
    <a
      href={href !== '' ? href : '#'}
      rel="noreferrer"
      style={{...styles.root, ...cstyle}}
      target="_blank">
      {children}
    </a>
  );
};
