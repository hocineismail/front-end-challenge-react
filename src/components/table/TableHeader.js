import React from "react";
import TableRow from "./TableRow";

import PropTypes from "prop-types";
export default function TableHeader({ header }) {
  return (
    <thead data-test-id="component-table-header">
      <TableRow data-test-id="component-table-row">
        {header.map((item) => {
          return (
            <th
              key={item}
              data-test-id="component-table-td"
              style={{ minWidth: "150px" }}
            >
              {item}
            </th>
          );
        })}
      </TableRow>
    </thead>
  );
}
TableHeader.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  header: PropTypes.arrayOf(PropTypes.string),
};
