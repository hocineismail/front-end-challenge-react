import {
  FETCHED_ABSENCES_ERROR,
  FETCHED_ABSENCES_SUCCESS,
  NEXT_PAGE,
  PREVIOUS_PAGE,
} from "../constants/constants";

// initial state

export const initialState = {
  allData: [],
  absences: [],
  totalAbsences: 0,
  page: 0,
  rowsPerPage: 10,
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
        totalAbsences: action.payload.absences.length,
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
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case PREVIOUS_PAGE:
      return {
        ...state,
        page: state.page > 0 ? state.page - 1 : 0,
      };

    default:
      return state;
  }
}
