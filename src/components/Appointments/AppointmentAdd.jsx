import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import AppointmentModal from "./AppointmentModal";

function AppointmentAdd({}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button
        style={{
          borderRadius: "999px",
          fontSize: "11px",
          backgroundColor: "#ffc107",
          color: "black",
          
        }}
        variant="primary"
        onClick={handleShow}
      >
        + Add Appointment
      </Button>

      <AppointmentModal show={show} handleClose={handleClose} />
    </div>
  );
}

export default AppointmentAdd;
