import React from "react";
import { Table } from "react-bootstrap";
import TableBody from "../table/TableBody";
import TableCell from "../table/TableCell";
import TableHeader from "../table/TableHeader";
import TableRow from "../table/TableRow";
const header = ["Name", "Absence", "Period", "Note", "Status", "Admitter"];
const fakeData = [
  {
    admitterNote: "",
    createdAt: "2021-06-30T02:13:56.000+02:00",
    crewId: 352,
    endDate: "2021-08-12",
    id: 2950,
    memberNote: "Pfadfindersommerlager",
    startDate: "2021-08-05",
    type: "vacation",
    userId: 2735,
    name: "Manuel",
    status: "Requested",
  },
  {
    admitterNote: "",
    createdAt: "2021-06-12T15:21:16.000+02:00",
    crewId: 352,
    endDate: "2021-06-29",
    id: 5876,
    memberNote: "",
    startDate: "2021-06-29",
    type: "vacation",
    userId: 5293,
    name: "Daniel",
    status: "Requested",
  },
  {
    admitterNote: "",
    createdAt: "2021-06-12T15:21:08.000+02:00",
    crewId: 352,
    endDate: "2021-06-27",
    id: 5876,
    memberNote: "",
    startDate: "2021-06-26",
    type: "vacation",
    userId: 5293,
    name: "Daniel",
    status: "Confirmed",
  },
  {
    admitterNote: "",
    crewId: 352,
    endDate: "2021-08-20",
    id: 8442,
    memberNote: "",
    startDate: "2021-08-05",
    type: "sickness",
    userId: 8007,
    name: "Linda",
    status: "Confirmed",
  },
];
export default function AbsencesManagement() {
  return (
    <div data-test-id="component-absences-management">
      <Table data-test-id="table-absences-management">
        <TableHeader header={header} />
        <TableBody>
          {fakeData.map((row) => {
            return (
              <TableRow
                data-test-id="table-absences-management"
                key={row.crewId}
              >
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
