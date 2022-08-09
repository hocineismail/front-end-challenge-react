import React from "react";
import { Button } from "react-bootstrap";
import { useAbsencesContext } from "../../context/Provider";

export default function Pagination() {
  const { state, nextPage, prevPage } = useAbsencesContext();
  const { loading, page, rowsPerPage, totalAbsences } = state;
  const hanldeNextPage = () => {
    nextPage();
  };
  const hanldePrevPage = () => {
    prevPage();
  };
  return (
    <div>
      <Button
        data-test-id="button-prev-page"
        disabled={loading || page === 0}
        className="rc-bg-primary btn-pagination"
        onClick={() => hanldePrevPage()}
      >
        Previous
      </Button>
      {page * rowsPerPage + 1} -
      {page * rowsPerPage + rowsPerPage > totalAbsences
        ? totalAbsences
        : page * rowsPerPage + rowsPerPage}
      of
      {totalAbsences}
      <Button
        data-test-id="button-next-page"
        disabled={loading || page * rowsPerPage + rowsPerPage > totalAbsences}
        className="rc-bg-primary btn-pagination"
        onClick={() => hanldeNextPage()}
      >
        Next
      </Button>
    </div>
  );
}
