import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import SmallTitle from "./SmallTitle"

const styles = {
  root: {
    background: 'white',
    boxSizing: 'border-box',
  },
  content: {
    boxSizing: 'border-box',
    display: 'flex',
    height: 'fit-content',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: 960,
    padding: 20,
  },
}

const Nav = ({
  leftContent,
  rightContent,
}) => {
  return (
    <header style={styles.root}>
      <div style={styles.content}>
        {leftContent}
        {rightContent}
      </div>
    </header>
  );
};

Nav.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
}

export default Nav
