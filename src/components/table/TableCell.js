import React from "react";

export default function TableCell({ item }) {
  return (
    <td data-test-id="component-table-cell">
      {item ? item : <span>&nbsp;</span>}
    </td>
  );
}
