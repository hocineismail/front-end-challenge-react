import React from "react";
import Pagination from "../pagination/Pagination";
import AbsencesFilter from "./AbsencesFilter";
import AbsencesList from "./AbsencesList";

export default function AbsencesManagement() {
  return (
    <div data-test-id="component-absences-management">
      <AbsencesFilter />
      <AbsencesList />
      <Pagination />
    </div>
  );
}
