import Enzyme from "enzyme";
import { render, fireEvent } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Pagination from "./Pagination";
import ShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import { absencesReducer, initialState } from "../../reducers/absencesReducer";

Enzyme.configure({ adapter: new Adapter() });

/**
 *Factory function to create a shallowWrapper for App component
 * @function setup
 * @param  {object} - Components props specific to this setup
 * @return {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<Pagination {...props} />);
};
describe("Pagination:", () => {
  let realUseContext;
  let useContextMock;
  let useReducerMock;

  // Setup mock
  beforeEach(() => {
    useReducerMock = jest.spyOn(React, "useReducer");
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
  });

  // Cleanup mock
  afterEach(() => {
    React.useContext = realUseContext;
  });

  let initial = {
    allData: [],
    absences: [],
    page: 1,
    totalAbsences: 0,
    rowsPerPage: 10,
    loading: false,
    errors: "",
  };

  test("does not call injected onClick if disabled is true", () => {
    const hanldeNextPage = jest.fn();
    useContextMock.mockReturnValue({
      state: { ...initial, loading: true },
      nextPage: () => {},
    });
    const wrapper = shallow(<Pagination />);
    wrapper.find({ "data-test-id": "button-next-page" }).simulate("click");
    expect(hanldeNextPage).toHaveBeenCalledTimes(0);
  });

  it("calls injected onClick if disabled is false", () => {
    const nextPage = jest.fn();
    useContextMock.mockReturnValue({
      state: initial,
      nextPage: () => {
        let updateNextPage = absencesReducer(initial, {
          type: "NEXT_PAGE",
        });
        expect(updateNextPage).toEqual({
          allData: [],
          absences: [],
          page: 2,
          totalAbsences: 0,
          rowsPerPage: 10,
          loading: false,
          errors: "",
        });
      },
    });
    const wrapper = shallow(<Pagination />);
    wrapper.find({ "data-test-id": "button-next-page" }).simulate("click");
  });
});
