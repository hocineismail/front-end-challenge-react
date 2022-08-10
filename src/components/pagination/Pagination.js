import React from "react";
// import { Button } from "react-bootstrap";
import { useAbsencesContext } from "../../context/Provider";
import Pagination from "react-bootstrap/Pagination";
import { generatePages } from "../../utils/generatePages";
export default function PaginationComponent() {
  const { state, nextPage, prevPage, goToPage } = useAbsencesContext();
  const { loading, page, rowsPerPage, totalAbsences } = state;
  const [pages, setPages] = React.useState([1, 2, 3, 4, 5]);

  React.useEffect(() => {
    /**
     * @generatePages  generate onlye five pages the current page and last 2 pages and next 2 pages
     * @param  {page} number - current page
     * @param  {totalAbsences} number - length of absences
     * @param  {rowsPerPage} number - number of row for each page
     * @return  Array of of number   [54, 55, 56, 57,58]
     * Example if we have 100 pages, we are on 56 page, this function should return [54, 55, 56, 57,58]
     */
    let fivePages = generatePages(page, totalAbsences, rowsPerPage);
    setPages(fivePages);
  }, [page, totalAbsences, rowsPerPage]);

  const hanldeNextPage = () => {
    nextPage();
  };
  const hanldePrevPage = () => {
    prevPage();
  };

  return (
    <div>
      {totalAbsences !== 0 ? (
        <Pagination>
          <Pagination.First
            data-test-id="button-prev-page"
            disabled={loading || page === 0}
            onClick={() => goToPage(0)}
          />
          <Pagination.Prev
            data-test-id="button-prev-page"
            disabled={loading || page === 0}
            onClick={() => hanldePrevPage()}
          />
          {pages.map((item) => {
            return (
              <Pagination.Item
                key={"page-number-" + item}
                active={item === page + 1}
                onClick={() => goToPage(item - 1)}
              >
                {item}
              </Pagination.Item>
            );
          })}
          <Pagination.Next
            data-test-id="button-next-page"
            disabled={
              loading || page * rowsPerPage + rowsPerPage > totalAbsences
            }
            onClick={() => hanldeNextPage()}
          />
          <Pagination.Last
            disabled={
              loading || page * rowsPerPage + rowsPerPage > totalAbsences
            }
            onClick={() => goToPage(Math.ceil(totalAbsences / rowsPerPage) - 1)}
          />
        </Pagination>
      ) : null}
    </div>
  );
}
