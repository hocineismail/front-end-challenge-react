import {
  FETCHED_ABSENCES_ERROR,
  FETCHED_ABSENCES_SUCCESS,
} from "../constants/constants";
import { initialState, absencesReducer } from "./absencesReducer";

describe("AbsencesRuducer: ", () => {
  let mockState = {
    allData: [],
    absences: [],
    types: ["All"],
    filter: {
      type: "All",
      startDate: null,
      endDate: null,
    },
    page: 0,
    rowsPerPage: 10,
    totalAbsences: 0,
    loading: true,
    errors: "",
  };
  test("initialState should be emty", () => {
    expect(initialState).toEqual(mockState);
  });

  it("should update reducer store with absences list", () => {
    let action = {
      type: FETCHED_ABSENCES_SUCCESS,
      payload: {
        absences: [1, 2, 3, 4],
        types: ["works"],
      },
    };
    const updatedState = absencesReducer(initialState, action);

    expect(updatedState).toEqual({
      ...mockState,
      loading: false,
      allData: [1, 2, 3, 4],
      absences: [1, 2, 3, 4],
      totalAbsences: 4,
      types: ["All", "works"],
    });
  });

  it("should update reducer store with message of errors", () => {
    let action = {
      type: FETCHED_ABSENCES_ERROR,
    };
    const updatedState = absencesReducer(initialState, action);
    expect(updatedState).toEqual({
      ...mockState,
      loading: false,
      errors: "Oups errors, Something wrong",
    });
  });
  it("should't update reducer store if action is not exist", () => {
    let action = {
      type: "NOT_CORRECT",
    };
    const updatedState = absencesReducer(initialState, action);

    expect(updatedState).toEqual(mockState);
  });
});
