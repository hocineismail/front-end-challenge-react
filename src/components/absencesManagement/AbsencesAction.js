import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useAbsencesContext } from "../../context/Provider";
import ICalendarLink from "react-icalendar-link";
import PropTypes from "prop-types";

export default function AbsencesAction({ status, absenceId, ics }) {
  const { onConfirmRequest, onRejectRequest } = useAbsencesContext();
  const onSaveICSFile = {
    title: ics.title,
    description: ics.description,
    startTime: ics.startTime,
    endTime: ics.endTime,
  };
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Action
        </Dropdown.Toggle>

        {status === "Requested" ? (
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => onConfirmRequest(absenceId)}>
              Confirm
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onRejectRequest(absenceId)}>
              Reject
            </Dropdown.Item>
            <Dropdown.Item>
              <ICalendarLink event={onSaveICSFile}>
                Send iCal File
              </ICalendarLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        ) : (
          <Dropdown.Menu>
            <Dropdown.Item>
              <ICalendarLink event={onSaveICSFile}>
                Send iCal File
              </ICalendarLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
}

AbsencesAction.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  status: PropTypes.string.isRequired,
  absenceId: PropTypes.number.isRequired,
  ics: PropTypes.object.isRequired,
};
