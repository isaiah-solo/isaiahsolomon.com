import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

const styles = {
  root: {
    color: '#457b9d',
    display: 'block',
    textDecoration: 'none',
  },
}

const RouteLink = ({
  children,
  to,
}) => {
  return (
    <GatsbyLink to={to} style={styles.root}>
      {children}
    </GatsbyLink>
  );
};

RouteLink.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RouteLink
