import React from "react";
import Badge from "../badge/Badge";
import PropTypes from "prop-types";

export default function TableCell({ item, badge, children }) {
  return (
    <td data-test-id="component-table-cell">
      {children ? (
        children
      ) : badge ? (
        <Badge item={item} className={`rc-badge badge-${badge}`} />
      ) : item ? (
        item
      ) : (
        <span>&nbsp;</span>
      )}
    </td>
  );
}
TableCell.propTypes = {
  // You can declare that a prop is a specific JS
  item: PropTypes.string,
  badge: PropTypes.string,
  children: PropTypes.node,
};
