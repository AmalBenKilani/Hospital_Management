import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import { addAppointment, editAppointment, NoAppointment } from "../../actions/actionCreator";
import { useEffect } from "react";

function AppointmentModal({ show, handleClose}) {
  const saveApp=useSelector(state=>state.appointmentReducer.Save)
  const dispatch = useDispatch();
  const [newEvent, setNewEvent] = useState({});
    const apList = useSelector(
    (state) => state.appointmentReducer.listofAppointments
  );
  const docList=useSelector(state=>state.appointmentReducer.doctorList)
  const handleClash = () => {
    for (let i = 0; i < apList.length; i++) {
      const d1 = apList[i].start;
      const d2 = newEvent.start;
      const d3 = apList[i].end;
      const d4 = newEvent.end;
      let doc = apList[i].doctorName;
      let newEventDoc = newEvent.doctorName;
  
      if (doc === newEventDoc) {
        if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
          // alert("CLASH");
          alert(`Dr. ${doc} has already an appointment on this date`)
          dispatch(NoAppointment(newEvent))
          
          break;
        }
      }

    }
  };
useEffect(()=>{saveApp? setNewEvent({id: saveApp.id, patientName: saveApp.patientName,title: saveApp.title, departement: saveApp.departement, doctorName: saveApp.doctorName, Problem: saveApp.doctorName, start: saveApp.start, end: saveApp.end, prescription: saveApp.prescription}):setNewEvent({})},[saveApp])
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ fontSize: "10px" }} closeButton>
          <Modal.Title style={{ fontSize: "13px" }}>
            Add/Edit New Appointment{" "}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="modalBody" style={{ fontSize: "11px" }}>
          <div className="modalBox">
            <label>Patient Name </label>
            <input
              name="patientName"
              value={newEvent.patientName}
              onChange={(e) => {
                setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
              }}
            />
          </div>

          <div className="modalBox">
            <label>Departement</label>
            <input
              name="departement"
              value={newEvent.departement}
              onChange={(e) =>
                setNewEvent({ ...newEvent, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="modalBox">
            <label>Doctor Name</label>
            <select
              name="doctorName"
              value={newEvent.doctorName}
              onChange={(e) =>
                setNewEvent({ ...newEvent, [e.target.name]: e.target.value })
              }
            >
              <option value="none" selected disabled hidden>
                {" "}
              </option>
              {docList.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </div>

          <div className="modalBox">
            <label>Problem</label>
            <input
              name="Problem"
              value={newEvent.Problem}
              onChange={(e) =>
                setNewEvent({ ...newEvent, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="modalBox">
            <label>Appointment's Title</label>
            <input
              name="title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="modalBox">
            <label>Start Date</label>
            <DatePicker
              name="start"
              value={newEvent.start}
              placeholderText="Start Date"
              style={{ marginRight: "10px" }}
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
            />
          </div>
          <div className="modalBox">
            <label>End Date</label>
            <DatePicker
              name="end"
              value={newEvent.end}
              placeholderText="End Date"
              style={{ marginRight: "10px" }}
              selected={newEvent.end}
              onChange={(end) => setNewEvent({ ...newEvent, end })}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ fontSize: "10px" }}
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        
          <Button
            style={{
              backgroundColor: "#28a745",
              color: "black",
              fontSize: "10px",
            }}
            variant="primary"
            onClick={saveApp? ()=>{dispatch(editAppointment(newEvent));handleClose()}:() => {
              dispatch(addAppointment(newEvent));
              handleClose(); handleClash();}
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AppointmentModal;
