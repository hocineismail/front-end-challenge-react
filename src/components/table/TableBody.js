import React from "react";
import PropTypes from "prop-types";
export default function TableBody({ children }) {
  return <tbody data-test-id="component-table-body">{children}</tbody>;
}
TableBody.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  children: PropTypes.node.isRequired,
};
