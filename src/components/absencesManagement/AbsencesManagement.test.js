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

test("rneder absences Management without errors: ", () => {
  const wraper = setup();
  const absencesComponent = wraper.find({
    "data-test-id": "component-absences-management",
  });
  expect(absencesComponent.length).toBe(1);
});
