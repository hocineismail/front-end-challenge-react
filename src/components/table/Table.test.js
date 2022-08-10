import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

Enzyme.configure({ adapter: new Adapter() });

/**
 *Factory function to create a shallowWrapper for App component
 * @function setup
 * @param  {object} - Components props specific to this setup
 * @return {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<TableHeader {...props} />);
};

describe("render table without errors", () => {
  describe("render table head without errors", () => {
    const header = ["Name", "Absence", "Period", "Note", "Status", "Admitter"];
    let props = {
      header,
    };
    const wrapper = setup(props);
    const headerComponent = wrapper.find({
      "data-test-id": "component-table-header",
    });
    it("render TableHeader withour errors", () => {
      expect(headerComponent.length).toBe(1);
    });
    it("table head colums should be equal to 6", () => {
      const tableHead = wrapper.find({
        "data-test-id": "component-table-td",
      });
      expect(tableHead.length).toBe(6);
    });
  });

  describe("render table rows without errors", () => {
    const rows = [1, 2, 3, 4, 5, 6];
    const wrapper = shallow(
      <TableRow>
        {rows.map((item) => {
          return <td key={item}>{item}</td>;
        })}
      </TableRow>
    );
    const wrapperComponent = wrapper.find({
      "data-test-id": "component-table-row",
    });

    it("TableRow should has multiple culumns", () => {
      expect(wrapperComponent.find("td").children().length).toEqual(
        rows.length
      );
    });
  });

  describe("render table cell without errors", () => {
    const wrapper = shallow(<TableCell item="item" />);
    const wrapperComponent = wrapper.find({
      "data-test-id": "component-table-cell",
    });
    it("TableCell should contains item", () => {
      expect(wrapperComponent.length).toBe(1);
      expect(wrapperComponent.text()).toEqual("item");
    });
  });

  describe("render table body without errors", () => {
    const wrapper = shallow(
      <TableBody>
        <TableRow>
          <td>td 1</td>
          <td>td 2</td>
          <td>td 3</td>
          <td>td 4</td>
          <td>td 5</td>
          <td>td 6</td>
        </TableRow>
      </TableBody>
    );

    it("table body columns should be equal to 6", () => {
      const tableHead = wrapper.find("td");
      expect(tableHead.length).toBe(6);
    });
  });
});
