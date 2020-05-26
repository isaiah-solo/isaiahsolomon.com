import React from "react"
import PropTypes from "prop-types"

const styles = {
  root: {
    color: '#457b9d',
    display: 'block',
    textDecoration: 'none',
  },
}

const Link = ({
  children,
  cstyle,
  href,
}) => {
  return (
    <a href={href !== '' ? href : '#'} style={{...styles.root, ...cstyle}}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Link
