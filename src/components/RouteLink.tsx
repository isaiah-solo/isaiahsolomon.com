import React from "react";
import {Link as GatsbyLink} from "gatsby";

const styles = {
  root: {
    color: '#457b9d',
    display: 'block',
    textDecoration: 'none',
  },
};

type Props = {
  children: React.ReactElement | string,
  to: string,
};

const RouteLink = ({
  children,
  to,
}: Props): React.ReactElement => {
  return (
    <GatsbyLink to={to} style={styles.root}>
      {children}
    </GatsbyLink>
  );
};

export default RouteLink;
