/**
 * @generatePages  generate onlye five pages the current page and last 2 pages and next 2 pages
 * @param  {page} number - current page
 * @param  {totalAbsences} number - length of absences
 * @param  {rowsPerPage} number - number of row for each page
 * @return  Array of of number   [54, 55, 56, 57,58]
 * Example if we have 100 pages, we are on 56 page, this function should return [54, 55, 56, 57,58]
 */

export function generatePages(page, totalAbsences, rowsPerPage) {
  let startPage;
  let endPage;
  let totalPage = Math.ceil(totalAbsences / rowsPerPage);
  if (totalPage <= 5) {
    // less than 3 total pages so show all
    startPage = 1;
    endPage = totalPage + 1;
  } else {
    // more than 3 total pages so calculate start and end pages
    if (page <= 2) {
      startPage = 1;
      endPage = 6;
    } else if (page + 3 >= totalPage) {
      // current page more then 100 so we need to reduce  number of page for mobile device

      startPage = totalPage - 5;
      endPage = totalPage + 1;
    } else {
      // current page more
      startPage = page - 1;
      endPage = page + 4;
    }
  }
  // generate our pages
  const pages = [];
  for (let i = startPage; i < endPage; i++) {
    pages.push(i);
  }
  return pages;
}
