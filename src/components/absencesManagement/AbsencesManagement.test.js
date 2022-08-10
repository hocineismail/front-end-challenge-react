import React from "react";
import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import AbsencesManagement from "./AbsencesManagement";

Enzyme.configure({ adapter: new Adapter() });

/**
 *Factory function to create a shallowWrapper for App component
 * @function setup
 * @param  {object} - Components props specific to this setup
 * @return {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<AbsencesManagement {...props} />);
};

describe("Absences list Compoenent: ", () => {
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
    page: 0,
    types: ["All"],
    filter: {
      type: "All",
      startDate: null,
      endDate: null,
    },
    totalAbsences: 0,
    rowsPerPage: 10,
    loading: false,
    errors: "",
  };

  test("render absences Management without errors: ", () => {
    useContextMock.mockReturnValue({
      state: initial,
    });
    const wraper = setup();
    const absencesComponent = wraper.find({
      "data-test-id": "component-absences-management",
    });
    expect(absencesComponent.length).toBe(1);
  });
});
