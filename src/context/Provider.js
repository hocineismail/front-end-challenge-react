import React from "react";
import { absencesReducer, initialState } from "../reducers/absencesReducer";
import axios from "axios";
import {
  FETCHED_ABSENCES_ERROR,
  FETCHED_ABSENCES_SUCCESS,
  GO_TO_PAGE,
  NEXT_PAGE,
  ON_FILTER,
  PREVIOUS_PAGE,
} from "../constants/constants";
import { applyFilter } from "../utils/filter";
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
              types: data.types,
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
        type: NEXT_PAGE,
      });
    },
    prevPage: () => {
      dispatch({
        type: PREVIOUS_PAGE,
      });
    },
    goToPage: (page) => {
      dispatch({
        type: GO_TO_PAGE,
        payload: {
          page: page,
        },
      });
    },
    onFilterByType: async (type) => {
      let filter = {
        type: type,
        startDate: state.filter.startDate,
        endDate: state.filter.endDate,
      };
      const absencesFiltred = await applyFilter(filter, state.allData);
      dispatch({
        type: ON_FILTER,
        payload: {
          absencesFiltred: absencesFiltred,
          filter: filter,
        },
      });
    },
    onFilterByStartDate: async (startDate) => {
      let filter = {
        type: state.filter.type,
        startDate: startDate,
        endDate: state.filter.endDate,
      };
      const absencesFiltred = await applyFilter(filter, state.allData);
      dispatch({
        type: ON_FILTER,
        payload: {
          absencesFiltred: absencesFiltred,
          filter: filter,
        },
      });
    },
    onFilterByEndDate: async (endDate) => {
      let filter = {
        type: state.filter.type,
        startDate: state.filter.startDate,
        endDate: endDate,
      };
      const absencesFiltred = await applyFilter(filter, state.allData);
      dispatch({
        type: ON_FILTER,
        payload: {
          absencesFiltred: absencesFiltred,
          filter: filter,
        },
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
