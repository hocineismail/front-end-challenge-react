import React from "react";
import {
  FETCHED_ABSENCES_ERROR,
  FETCHED_ABSENCES_SUCCESS,
} from "../constants/constants";
import { initialState, absencesReducer } from "./absencesReducer";

describe("AbsencesRuducer: ", () => {
  it("initialState should be emty", () => {
    expect(initialState).toEqual({
      allData: [],
      absences: [],
      page: 0,
      rowsPerPage: 10,
      totalAbsences: 0,
      loading: true,
      errors: "",
    });
  });

  it("should update reducer store with absences list", () => {
    let action = {
      type: FETCHED_ABSENCES_SUCCESS,
      payload: {
        absences: [1, 2, 3, 4],
      },
    };
    const updatedState = absencesReducer(initialState, action);
    expect(updatedState).toEqual({
      allData: [1, 2, 3, 4],
      absences: [1, 2, 3, 4],
      page: 0,
      totalAbsences: 4,
      rowsPerPage: 10,
      loading: false,
      errors: "",
    });
  });

  it("should update reducer store with message of errors", () => {
    let action = {
      type: FETCHED_ABSENCES_ERROR,
    };
    const updatedState = absencesReducer(initialState, action);
    expect(updatedState).toEqual({
      allData: [],
      absences: [],
      page: 0,
      totalAbsences: 0,
      rowsPerPage: 10,
      loading: false,
      errors: "Oups errors, Something wrong",
    });
  });
  it("should't update reducer store if action is not exist", () => {
    let action = {
      type: "NOT_CORRECT",
    };
    const updatedState = absencesReducer(initialState, action);
    expect(updatedState).toEqual({
      allData: [],
      absences: [],
      page: 0,
      totalAbsences: 0,
      rowsPerPage: 10,
      loading: true,
      errors: "",
    });
  });
});
