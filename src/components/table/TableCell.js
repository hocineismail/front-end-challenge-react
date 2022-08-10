import React from "react";
import Badge from "../badge/Badge";

export default function TableCell({ item, badge }) {
  return (
    <td data-test-id="component-table-cell">
      {badge ? (
        <Badge item={item} className={`rc-badge badge-${badge}`} />
      ) : item ? (
        item
      ) : (
        <span>&nbsp;</span>
      )}
    </td>
  );
}
