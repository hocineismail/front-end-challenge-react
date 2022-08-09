import React, { useReducer } from "react";
import { Table } from "react-bootstrap";

import { absencesReducer, initialState } from "../../reducers/absencesReducer";
import TableBody from "../table/TableBody";
import TableCell from "../table/TableCell";
import TableHeader from "../table/TableHeader";
import TableRow from "../table/TableRow";

import { onFetchAbsences } from "../../reducers/absencesActions";
const header = ["Name", "Absence", "Period", "Note", "Status", "Admitter"];

export default function AbsencesManagement() {
  // useReducer for sharing state between components
  const [state, dispatch] = useReducer(absencesReducer, initialState);
  React.useEffect(() => {
    // Runs only on the first render
    // onFetchAbsences allows to fetch absences list from server and update reducer state by dispatch
    onFetchAbsences(dispatch);
  }, [dispatch]);

  return (
    <div data-test-id="component-absences-management">
      <Table data-test-id="table-absences-management">
        <TableHeader header={header} />
        <TableBody>
          {state.absences.map((row) => {
            return (
              <TableRow data-test-id="table-absences-rows" key={row.crewId}>
                <TableCell item={row.name} />
                <TableCell item={row.type} />
                <TableCell item={`${row.startDate} to ${row.endDate}`} />
                <TableCell item={row.memberNote} />
                <TableCell item={row.status} />
                <TableCell item={row.admitterNote} />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
