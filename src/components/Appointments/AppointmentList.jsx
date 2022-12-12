import React, { useState } from "react";
import { TbArrowBigRightLines } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { BsPlusSquareFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { FaFilePrescription } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import {
  AddPrescription,
  DeleteAppointment,
  DeletePrescription,
  filterAppointment,
  saveAppointment,
} from "../../actions/actionCreator";
import Form from "react-bootstrap/Form";
import AppointmentModal from "./AppointmentModal";


function AppointmentList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const apList = useSelector(
    (state) => state.appointmentReducer.listofAppointments
  );
  const docList = useSelector((state) => state.appointmentReducer.doctorList);

  const nav = useNavigate();
  const [docName, setDocName] = useState("");
  const navigateBack = () => {
    nav("/Appointments");
  };

  const filterAp = (apList, filterApValue) => {
    if (filterApValue === "") {
      return apList;
    } else {
      return apList.filter(
        (el) => el.doctorName.toLowerCase() === docName.toLocaleLowerCase()
      );
    }
  };

  const filterApValue = useSelector((state) => state.appointmentReducer.Filter);
  const filteredApList = filterAp(apList, filterApValue);
 
  return (
    <div>
      <div style={{ marginBottom: "20px", fontSize: "13px" }}>
        <TbArrowBigRightLines className="arrow-component" />
        Appointments
      </div>
      <div>
        <Button
          style={{
            borderRadius: "999px",
            fontSize: "11px",
            backgroundColor: "#ffc107",
            color: "black",
            marginBottom: "10px",
          }}
          variant="primary"
          onClick={navigateBack}
        >
          <RiArrowGoBackFill />
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <Form.Control
          as="select"
          aria-label="Default select example"
          style={{ marginBottom: "15px", fontSize: "11px", width: "15%" }}
          onChange={(e) => setDocName(e.target.value)}
        >
          <option>Choose Doctor </option>
          {docList.map((doc) => (
            <option value={doc} key={doc}>{`Dr. ${doc}`}</option>
          ))}
        </Form.Control>

        <Button
          variant="Secondary"
          onClick={() => {
            dispatch(filterAppointment(docName));
          }}
        >
          <GoSearch />
        </Button>
      </div>

      <div>
        <Table
          style={{
            fontSize: "10px",
            boxShadow: "10px 10px 5px #aaaaaa ",
            width: "85%",
            marginLeft: "6%",
          }}
          striped
          bordered
          hover
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Patient Name</th>
              <th>Departement</th>
              <th>Appointment's Title</th>
              <th>Appointment's Date</th>
              <th>Edit or Delete Appointment</th>
              <th>Prescription</th>
            </tr>
          </thead>

          <tbody>
            {filteredApList.map((a) => {
              return (
                <tr key={a.id}>
                  <td>{a.id}</td>
                  <td>{a.patientName}</td>
                  <td>{a.departement}</td>
                  <td>{a.title}</td>
                  <td>{a.start.toDateString()}</td>
                  <td className="patientOption">
                    <button>
                      <FiEdit
                        onClick={() => {
                          handleShow();
                          dispatch(saveAppointment(a));
                        }}
                      />
                    </button>
                    <AppointmentModal show={show} handleClose={handleClose} />
                    <button onClick={() => dispatch(DeleteAppointment(a.id))}>
                      <AiFillDelete style={{ color: "red" }} />
                    </button>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {a.prescription ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            marginLeft: "15%",
                          }}
                        >
                          <NavLink to={`/Appointments/Prescription/${a.id}`}>
                            <button style={{ border: "none" }}>
                              <FaFilePrescription
                                style={{ color: "#00b4cc", width: "20px" }}
                              />
                          
                            </button>
                       
                          </NavLink>
                          <button
                            style={{ border: "none", paddingLeft: "20px" }}
                            onClick={()=>dispatch(DeletePrescription(a.id))}
                          >
                            <AiFillDelete style={{ color: "red" }} />
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            style={{
                              color: "#ffc107",
                              border: "none",
                              marginLeft: "90%",
                            }}
                            onClick={()=>dispatch(AddPrescription(a.id))}
                          >
                            <BsPlusSquareFill />
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
  
      </div>
     
    </div>
  );
}

export default AppointmentList;
