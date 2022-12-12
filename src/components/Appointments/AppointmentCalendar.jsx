import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { TbArrowBigRightLines } from "react-icons/tb";
import { useSelector } from "react-redux";

import AppointmentAdd from "./AppointmentAdd";
import ManageAppointment from "./ManageAppointment";

const locales = {
  "ar-TN": require("date-fns/locale/ar-TN"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function AppointmentCalendar() {
  const apList = useSelector(
    (state) => state.appointmentReducer.listofAppointments
  );
  const [allEvents, setAllEvents] = useState(apList);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <div style={{ marginBottom: "20px", fontSize: "13px" }}>
        <TbArrowBigRightLines className="arrow-component" />
        Appointments
      </div>
      <div className="appointment" >
        <div >
          <AppointmentAdd show={show} />
        </div>
        <div style={{padding:"6px 12px"}} >
          <ManageAppointment />
        </div>
      </div>

      <Calendar
        localizer={localizer}
        events={apList}
        startAccessor={apList.start}
        endAccessor={apList.end}
        style={{ height: 450, margin: "40px", fontSize: "11px" }}
      />
    </div>
  );
}

export default AppointmentCalendar;
