import React from "react";
import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import AbsencesList from "./AbsencesList";

Enzyme.configure({ adapter: new Adapter() });

/**
 *Factory function to create a shallowWrapper for App component
 * @function setup
 * @param  {object} - Components props specific to this setup
 * @return {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<AbsencesList {...props} />);
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

  it("render absences list without errors", () => {
    useContextMock.mockReturnValue({
      state: initial,
    });
    const wrapper = setup(<AbsencesList />);
    const absencesComponent = wrapper.find({
      "data-test-id": "component-absences-list",
    });
    expect(absencesComponent.length).toBe(1);
  });

  it("render absences list table", () => {
    useContextMock.mockReturnValue({
      state: initial,
    });
    const wrapper = setup(<AbsencesList />);
    const absencesComponent = wrapper.find({
      "data-test-id": "table-absences-list",
    });

    expect(absencesComponent.length).toBe(1);
  });

  describe("render table body without errors", () => {
    it("render TableHeader withour errors", () => {
      useContextMock.mockReturnValue({
        state: initial,
      });
      const wrapper = setup(<AbsencesList />);
      const wrapperComponent = wrapper
        .childAt(0)
        .dive()
        .childAt(0)
        .childAt(0)
        .dive()
        .find({
          "data-test-id": "component-table-header",
        });

      expect(wrapperComponent.length).toBe(1);
    });
  });
});
