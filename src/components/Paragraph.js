import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import useTextStyles from "../hooks/useTextStyles"

const Paragraph = ({
  children,
}) => {
  const textStyle = useTextStyles('secondary');
  
  return (
    <p style={textStyle}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string,
}

Paragraph.defaultProps = {
  children: '',
}

export default Paragraph
