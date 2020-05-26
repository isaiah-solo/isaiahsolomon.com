import PropTypes from "prop-types"
import React from "react"

import useTextStyles from "../hooks/useTextStyles"

const styles = {
  root: {
    margin: 0,
  },
}

const Title = ({
  children,
}) => {
  const textStyle = useTextStyles('primary');

  return (
    <h1 style={{...styles.root, ...textStyle}}>
      {children}
    </h1>
  );
};

Title.propTypes = {
  children: PropTypes.string,
}

Title.defaultProps = {
  children: '',
}

export default Title
