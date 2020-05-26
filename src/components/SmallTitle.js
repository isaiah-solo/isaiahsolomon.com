import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import useTextStyles from "../hooks/useTextStyles"

const styles = {
  root: {
    margin: 0,
  },
}

const SmallTitle = ({
  children,
  cstyle,
}) => {
  const textStyle = useTextStyles('primary');

  return (
    <p style={{...styles.root, ...textStyle, ...cstyle}}>
      {children}
    </p>
  );
};

SmallTitle.propTypes = {
  children: PropTypes.node,
}

export default SmallTitle
