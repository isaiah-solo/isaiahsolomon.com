import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Nav from "./Nav"
import SmallTitle from "./SmallTitle"

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
