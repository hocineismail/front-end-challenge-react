import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useAbsencesContext } from "../../context/Provider";

export default function AbsencesFilter() {
  const { state, onFilterByType, onFilterByStartDate, onFilterByEndDate } =
    useAbsencesContext();
  const { filter, types } = state;

  return (
    <div data-test-id="component-filter">
      <div className="filter-grid">
        <div style={{ marginRight: "20px" }}>
          <Form.Label>Filter by type</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => onFilterByType(e.target.value)}
          >
            {types.map((item, index) => {
              return (
                <option value={item} key={"type-" + index}>
                  {item}
                </option>
              );
            })}
          </Form.Select>
        </div>
        <div>
          <Form.Label>Filter by start absence date</Form.Label>
          <div>
            <div style={{ display: "inline-block" }}>
              <DatePicker
                className="form-label"
                selected={filter.startDate}
                minDate={
                  filter.startDate
                    ? new Date(filter.startDate)
                    : new Date("2020-01-01")
                }
                onChange={(date) => onFilterByStartDate(date)}
                style={{ display: "inline-block" }}
              />
            </div>
            <div style={{ display: "inline-block" }}>
              <Button
                className="rc-bg-primary"
                onClick={() => onFilterByStartDate(null)}
                disabled={!filter.startDate}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Form.Label>Filter by end absence date</Form.Label>
          <div>
            <div style={{ display: "inline-block" }}>
              <DatePicker
                class="form-control"
                selected={filter.endDate}
                minDate={
                  filter.startDate
                    ? new Date(filter.startDate)
                    : new Date("2020-01-01")
                }
                onChange={(date) => onFilterByEndDate(date)}
              />
            </div>
            <div style={{ display: "inline-block" }}>
              <Button
                className="rc-bg-primary"
                onClick={() => onFilterByEndDate(null)}
                disabled={!filter.endDate}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
