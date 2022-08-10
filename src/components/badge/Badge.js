import React from "react";
import PropTypes from "prop-types";
export default function Badge({ item, className }) {
  return <span className={className}>{item}</span>;
}
Badge.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  item: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
