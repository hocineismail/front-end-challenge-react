/**
 * check if days are the same
 * @param {Date} targetDate should be a date
 * @param {Date} date should be a date
 * @returns {boolean} if the same date return true, if not return false
 */
export function datesAreOnSameDay(targetDate, date) {
  targetDate = new Date(targetDate);
  date = new Date(date);
  return (
    targetDate.getFullYear() === date.getFullYear() &&
    targetDate.getMonth() === date.getMonth() &&
    targetDate.getDate() === date.getDate()
  );
}

/**
 * filter list with type
 * @param {array} data is the list of absences
 * @param {string} condition is the type of absences
 * @returns {array}   list of members filtered
 */

function filetWithType(data, condition) {
  return new Promise((resolve) => {
    if (condition !== "All") {
      let result = data.filter((item) => condition === item.type);
      resolve(result);
    } else {
      resolve(data);
    }
  });
}

/**
 * filter list with endDate
 * @param {array} data is the list of absences
 * @param {date} condition is a date of endDate
 * @returns {array}   list of members filtered
 */

function filetWithEndDate(data, condition) {
  return new Promise((resolve) => {
    if (condition) {
      let result = data.filter((item) =>
        datesAreOnSameDay(condition, item.endDate)
      );
      resolve(result);
    } else {
      resolve(data);
    }
  });
}
/**
 * filter list with startDate
 * @param {array} data is the list of absences
 * @param {date} condition is a date of startDate
 * @returns {array}   list of members filtered
 */

function filetWithStartDate(data, condition) {
  return new Promise((resolve) => {
    if (condition) {
      let result = data.filter((item) =>
        datesAreOnSameDay(condition, item.startDate)
      );
      resolve(result);
    } else {
      resolve(data);
    }
  });
}
/**
 * filter list with multiple  condition
 * @param {array} data is the list of absences
 * @param {object} condition is an object of multiple  conditions  {type, startDate, endDate}
 * @returns {array}   list of members filtered with all conditions
 */
export function applyFilter(filter, absences) {
  return new Promise((resolve) => {
    filetWithType(absences, filter.type).then((data) => {
      filetWithStartDate(data, filter.startDate).then((data) => {
        filetWithEndDate(data, filter.endDate).then((result) => {
          resolve(result);
        });
      });
    });
  });
}
