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

describe("Absences Management Compoenent: ", () => {
  const wrapper = setup(<AbsencesManagement />);

  it("render absences management without errors", () => {
    const absencesComponent = wrapper.find({
      "data-test-id": "component-absences-management",
    });
    expect(absencesComponent.length).toBe(1);
  });
  it("render absences management table", () => {
    const absencesComponent = wrapper.find({
      "data-test-id": "table-absences-management",
    });
    expect(absencesComponent.length).toBe(1);
  });
});

// describe("ender table body without errors", () => {

//   const wrapperComponent = wrapper.find({
//     "data-test-id": "component-table-body",
//   });
//   it("render TableHeader withour errors", () => {
//     expect(wrapperComponent.length).toBe(1);
//   });
//   it("table body colums should be equal to 6", () => {
//     const tableHead = wrapper.find("td");
//     expect(tableHead.length).toBe(6);
//   });
// });
