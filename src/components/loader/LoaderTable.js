import React from "react";
import TableRow from "../table/TableRow";

export default function LoaderTable() {
  return (
    <TableRow>
      <td data-test-id="component-table-cell" style={{ height: "40px" }}>
        <div className="linear-background"></div>
      </td>
      <td data-test-id="component-table-cell" style={{ height: "40px" }}>
        <div className="linear-background"></div>
      </td>
      <td data-test-id="component-table-cell" style={{ height: "40px" }}>
        <div className="linear-background"></div>
      </td>
      <td data-test-id="component-table-cell" style={{ height: "40px" }}>
        <div className="linear-background"></div>
      </td>
      <td data-test-id="component-table-cell" style={{ height: "40px" }}>
        <div className="linear-background"></div>
      </td>
      <td data-test-id="component-table-cell" style={{ height: "40px" }}>
        <div className="linear-background"></div>
      </td>
    </TableRow>
  );
}
