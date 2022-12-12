import React from 'react'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import {GoGear} from 'react-icons/go'


function ManageAppointment() {
    const nav= useNavigate()
    const navigateToManageAppointment =()=>{
        nav('/Appointments/ManageAppointment')
    }
  return (
    <div>   
    <Button style={{ borderRadius: '999px', fontSize: '11px', backgroundColor: '#ffc107', color: 'black' }} variant="primary" onClick={navigateToManageAppointment}>
 <GoGear/> Manage Appointments
</Button>


</div>
  )
}

export default ManageAppointment