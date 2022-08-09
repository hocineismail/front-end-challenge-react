import {
  FETCHED_ABSENCES_ERROR,
  FETCHED_ABSENCES_SUCCESS,
} from "../constants/constants";
import axios from "axios";
const API = "http://localhost:8080/api/v1/absences";
/**
 *
 * @param {*} dispatch - Is a function (created by react useReducer) to update reducer State
 */
export function onFetchAbsences(dispatch) {
  axios(API)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: FETCHED_ABSENCES_SUCCESS,
        payload: {
          absences: data.absences,
        },
      });
    })
    .catch(() => {
      dispatch({
        type: FETCHED_ABSENCES_ERROR,
      });
    });
}
