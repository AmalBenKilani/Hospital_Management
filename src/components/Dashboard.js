import React from 'react'
import { TbArrowBigRightLines } from "react-icons/tb";
import { FaUser, FaUserMd } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { BiCalendarEdit } from 'react-icons/bi';
import { FaFilePrescription } from "react-icons/fa";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";


const Dashboard = () => {
  const listOfPatients = useSelector(state => state.patientReducer.ListofPatients)
  const listOfDoctors = useSelector(state => state.doctorReducer.ListofDoctors)
  const listOfAppointments = useSelector(state => state.appointmentReducer.listofAppointments)
  const ListOfPrescriptions = listOfAppointments.filter(el => el.prescription === true)
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Number of Patients Over Current Year",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 5, 4, 2, 10, 15, 20],
      },
    ],
  };
  return (
    <div>
      <div>
        <TbArrowBigRightLines className='arrow-component' />
        Dashboard
      </div>
      <div className='bigBox' >

        <div className='smallBox' >

          <div className='info' >
            <h4 style={{ color: '#ba79cb' }} >{listOfPatients.length}</h4>
            <h5 style={{ color: '#ba79cb' }}  >Patients</h5>
          </div>
          <div className='bigIcon' >
            <FaUser style={{ color: "#adbbc3" }} size={62} />
          </div>

        </div>

        <div className='smallBox' >

          <div className='info' >
            <h4 style={{ color: '#ffa812' }} >{listOfDoctors.length}</h4>
            <h5 style={{ color: '#ffa812' }}  >Doctors</h5>
          </div>
          <div className='bigIcon' >
            <FaUserMd style={{ color: "#adbbc3" }} size={62} />
          </div>

        </div>

        <div className='smallBox' >

          <div className='info' >
            <h4 style={{ color: '#00a65a' }} >{listOfAppointments.length}</h4>
            <h5 style={{ color: '#00a65a' }}  >Appointments</h5>
          </div>
          <div className='bigIcon' >
            <BiCalendarEdit style={{ color: "#adbbc3" }} size={62} />
          </div>

        </div>

        <div className='smallBox' >

          <div className='info' >
            <h4 style={{ color: '#ec3b83' }} >{ListOfPrescriptions.length}</h4>
            <h5 style={{ color: '#ec3b83' }}  >Prescriptions</h5>
          </div>
          <div className='bigIcon' >
            <FaFilePrescription style={{ color: "#adbbc3" }} size={62} />
          </div>

        </div>

      </div>
      <div className='chart' >
        <Bar data={data} />
      </div>


    </div>

  )
}

export default Dashboard