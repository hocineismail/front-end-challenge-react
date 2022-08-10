import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Badge from "./Badge";

Enzyme.configure({ adapter: new Adapter() });

/**
 *Factory function to create a shallowWrapper for App component
 * @function setup
 * @param  {object} - Components props specific to this setup
 * @return {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<Badge {...props} />);
};

test("renders Badge component without errors", () => {
  const wrapper = setup({ item: "Confirmed", className: "className" });
  const badgeComponent = wrapper.find("span");
  expect(badgeComponent.hasClass("className")).toEqual(true);
  expect(badgeComponent.length).toBe(1);
});
