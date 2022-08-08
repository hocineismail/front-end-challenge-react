import React from "react";
import TableRow from "./TableRow";

export default function TableHeader({ header }) {
  return (
    <thead data-test-id="component-table-header">
      <TableRow data-test-id="component-table-row">
        {header.map((item) => {
          return (
            <th key={item} data-test-id="component-table-td">
              {item}
            </th>
          );
        })}
      </TableRow>
    </thead>
  );
}
