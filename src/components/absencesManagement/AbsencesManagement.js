import React from "react";
import { useAbsencesContext } from "../../context/Provider";
import Pagination from "../pagination/Pagination";
import AbsencesFilter from "./AbsencesFilter";
import AbsencesList from "./AbsencesList";

export default function AbsencesManagement() {
  // useReducer for sharing state between components
  const { state } = useAbsencesContext();

  // bsences, page, rowsPerPage, loading get them from reducer state
  const { totalAbsences, page, rowsPerPage, loading, errors } = state;
  return (
    <div data-test-id="component-absences-management">
      {!loading && errors === "" ? (
        <div>
          {page * rowsPerPage + 1} -
          {page * rowsPerPage + rowsPerPage > totalAbsences
            ? totalAbsences
            : page * rowsPerPage + rowsPerPage}{" "}
          &nbsp; of &nbsp; {totalAbsences}
          <br />
          <b>Total Absences: is {totalAbsences}</b>
        </div>
      ) : null}
      <AbsencesFilter />

      <AbsencesList />
      <Pagination />
    </div>
  );
}
