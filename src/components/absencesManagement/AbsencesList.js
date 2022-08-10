import React from "react";
import { Table } from "react-bootstrap";

import TableBody from "../table/TableBody";
import TableCell from "../table/TableCell";
import TableHeader from "../table/TableHeader";
import TableRow from "../table/TableRow";

import { useAbsencesContext } from "../../context/Provider";
import LoaderTable from "../loader/LoaderTable";

const header = ["Name", "Absence", "Period", "Note", "Status", "Admitter"];

export default function AbsencesList() {
  // useReducer for sharing state between components
  const { state, onFetchAbsences } = useAbsencesContext();

  // bsences, page, rowsPerPage, loading get them from reducer state
  const { absences, page, rowsPerPage, loading } = state;

  React.useEffect(() => {
    // Runs only on the first render
    // onFetchAbsences allows to fetch absences list from server and update reducer state
    // Run onFetchAbsencs only if  is ready to call and leading is true
    if (loading) {
      onFetchAbsences();
    }
  }, [onFetchAbsences, loading]);

  return (
    <div data-test-id="component-absences-list" className="margin-card">
      <Table data-test-id="table-absences-list" responsive>
        <TableHeader header={header} />
        <TableBody>
          {loading
            ? [...new Array(10)].map(() => {
                return <LoaderTable />;
              })
            : absences
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      data-test-id="table-absences-rows"
                      key={row.crewId}
                    >
                      <TableCell
                        data-test-id="table-absences-col"
                        item={row.name}
                      />
                      <TableCell
                        data-test-id="table-absences-col"
                        item={row.type}
                      />
                      <TableCell
                        data-test-id="table-absences-col"
                        item={`${row.startDate} to ${row.endDate}`}
                      />
                      <TableCell
                        data-test-id="table-absences-col"
                        item={row.memberNote}
                      />
                      <TableCell
                        data-test-id="table-absences-col"
                        item={row.status}
                      />
                      <TableCell
                        data-test-id="table-absences-col"
                        item={row.admitterNote}
                      />
                    </TableRow>
                  );
                })}
        </TableBody>
      </Table>
    </div>
  );
}
