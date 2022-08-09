import React from "react";
import { absencesReducer, initialState } from "../reducers/absencesReducer";
import axios from "axios";
import {
  FETCHED_ABSENCES_ERROR,
  FETCHED_ABSENCES_SUCCESS,
} from "../constants/constants";
// import AbsencesContext from "./AbsencesContext";
//Context and Provider
export const AbsencesContext = React.createContext(initialState);
export const useAbsencesContext = () => React.useContext(AbsencesContext);
const API = "http://localhost:8080/api/v1/absences";

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(absencesReducer, initialState);

  const value = {
    state,
    onFetchAbsences: () => {
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
    },
    nextPage: () => {
      dispatch({
        type: "NEXT_PAGE",
      });
    },
    prevPage: () => {
      dispatch({
        type: "PREVIOUS_PAGE",
      });
    },
  };

  return (
    <AbsencesContext.Provider value={value}>
      {children}
    </AbsencesContext.Provider>
  );
};
export default Provider;
