import {
  FETCHED_ABSENCES_ERROR,
  FETCHED_ABSENCES_SUCCESS,
  GO_TO_PAGE,
  NEXT_PAGE,
  ON_FILTER,
  PREVIOUS_PAGE,
} from "../constants/constants";

// initial state

export const initialState = {
  allData: [],
  absences: [],
  totalAbsences: 0,
  types: ["All"],
  filter: {
    type: "All",
    startDate: null,
    endDate: null,
  },
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
        types: [...state.types, ...action.payload.types],
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
    case ON_FILTER:
      return {
        ...state,
        absences: action.payload.absencesFiltred,
        totalAbsences: action.payload.absencesFiltred.length,
        filter: action.payload.filter,
        loading: false,
        page: 0,
        errors: "",
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
    case GO_TO_PAGE:
      return {
        ...state,
        page: action.payload.page,
      };

    default:
      return state;
  }
}
