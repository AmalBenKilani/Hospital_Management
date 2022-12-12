import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { TbArrowBigRightLines } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Prescription() {
  const nav = useNavigate();
  const navigateToAppList = () => {
    nav("/Appointments/ManageAppointment");
  };
  const { id } = useParams();
  const listApp = useSelector(
    (state) => state.appointmentReducer.listofAppointments
  );
  const prescriptionOnly = listApp.filter((el) => el.id == id);
  const listpatient = useSelector(
    (state) => state.patientReducer.ListofPatients
  );
  const patientOnly = listpatient.filter(
    (el) => el.Name === prescriptionOnly[0].patientName
  );
  return (
    <div>
      {console.log(prescriptionOnly)}
      <div style={{ marginBottom: "20px", fontSize: "13px" }}>
        <TbArrowBigRightLines className="arrow-component" />
        Prescription
      </div>
      <div>
        <Button
          style={{
            borderRadius: "999px",
            fontSize: "11px",
            backgroundColor: "#ffc107",
            color: "black",
            marginBottom: "10px",
            marginLeft: "2%",
          }}
          variant="primary"
          onClick={navigateToAppList}
        >
          <FaList /> Appointment List
        </Button>
      </div>
      <div className="prescription">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Appointment ID : {prescriptionOnly[0].id}
              <div className="header1"></div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="prescriptionHeader">
                <div className="header1">
                  <h6>Doctor Name: </h6>
                  <p>{`Dr.  ${prescriptionOnly[0].doctorName}`}</p>
                </div>
                <div className="header1">
                  <h6>Department:</h6>
                  <p>{prescriptionOnly[0].departement}</p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="prescriptionbody">
                <div className="header1">
                  <h6>Patient Name :</h6> <p>{patientOnly[0].Name}</p>
                </div>
                <div className="header1">
                  <h6>Gender :</h6> <p>{patientOnly[0].Gender}</p>
                </div>
                <div className="header1">
                  <h6>Age :</h6> <p>{patientOnly[0].Age}</p>
                </div>
                <div className="header1">
                  <h6>Blood Group :</h6> <p>{patientOnly[0].BloodGroup}</p>
                </div>
                <div className="header1">
                  <h6> Birthday :</h6> <p>{patientOnly[0].Date}</p>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="prescriptiondoc">
                <div className="prsprob">
                  <h6>Cheif Complaint:</h6>
                  <p>{prescriptionOnly[0].Problem}</p>
                </div>
                <div className="table1">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Medicine Name</th>
                        <th>Type</th>
                        <th>Days</th>
                        <th>Instruction</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Naproxen</td>
                        <td>500 mg</td>
                        <td>10</td>
                        <td> 2+2+2</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div style={{ marginTop: "5%", paddingRight: "5%" }}>
                    {"-------------------------------------------"}
                    <br />
                    <p style={{ fontSize: "13px", marginLeft: "15%" }}>
                      Signature
                    </p>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Prescription;
