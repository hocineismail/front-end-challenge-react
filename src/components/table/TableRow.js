import React from "react";
import PropTypes from "prop-types";
export default function TableRow({ children }) {
  return <tr data-test-id="component-table-row">{children}</tr>;
}
TableRow.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  children: PropTypes.node.isRequired,
};
