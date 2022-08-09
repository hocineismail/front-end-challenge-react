import {
  FETCHED_ABSENCES_ERROR,
  FETCHED_ABSENCES_SUCCESS,
} from "../constants/constants";

// initial state

export const initialState = {
  allData: [],
  absences: [],
  loading: true,
  errors: "",
};
export function absencesReducer(state = initialState, action) {
  switch (action.type) {
    // Absences data is fetched successfully
    case FETCHED_ABSENCES_SUCCESS:
      return {
        ...state,
        allData: action.payload.absences,
        absences: action.payload.absences,
        loading: false,
        errors: "",
      };
    // Something wrong
    case FETCHED_ABSENCES_ERROR:
      return {
        ...state,
        loading: false,
        errors: "Oups errors, Something wrong",
      };
    default:
      return state;
  }
}
