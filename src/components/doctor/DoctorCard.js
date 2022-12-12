import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FiEdit } from "react-icons/fi";
import { deleteDoctor, saveDoctor } from '../../actions/actionCreator';
import { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import DoctorModal from './DoctorModal';



function DoctorCard({ doctor }) {
    const dispatch = useDispatch()
    const save = useSelector(state => state.doctorReducer.Save)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div>

            <Card style={{ width: "16rem", marginLeft: "35%" ,boxShadow:"0 01px gray,01px 0 gray,01px 02px gray,02px 01px gray,02px 03px gray,03px 02px gray,03px 04px gray,04px 03px gray,04px 05px gray,05px 04px gray, 05px 06px gray,06px 05px gray",backgroundColor:"rgba(173, 187, 195,0.2)"}}>
                <Card.Img variant="top" src="doctor.png" style={{height:"120px",width:"120px" , marginLeft:"25%",marginTop:"8%"}} />
                <Card.Body  >
                    <Card.Title style={{color:"#11283f",fontSize:"25px"}} >{`Dr. ${doctor.Name}`}</Card.Title>
                    <Card.Text style={{fontSize:"10px"}} >
                       <div  >{`Gender: ${doctor.Gender}`} </div>
                        <div>{`Birthday: ${doctor.Date}`}</div>
                        <div>{`Address: ${doctor.City}`}</div>

                    </Card.Text>
                </Card.Body>

                <ListGroup className="list-group-flush">
                    <ListGroup.Item style={{fontSize:"13px",backgroundColor:"rgba(17, 40, 63,0.1)"}} >{`Departement: ${doctor.Departement}`}</ListGroup.Item>
                    <ListGroup.Item style={{fontSize:"13px",backgroundColor:"rgba(17, 40, 63,0.1)"}}>{`Email: ${doctor.Email}`}</ListGroup.Item>
                    <ListGroup.Item style={{fontSize:"13px",backgroundColor:"rgba(17, 40, 63,0.1)"}}>{`Mobile: ${doctor.Mobile}`}</ListGroup.Item>
                </ListGroup>

                <Card.Body style={{padding:'2px'}}  className='patientOption' >
                    <button onClick={() => { handleShow(); dispatch(saveDoctor(doctor)) }} >
                        <FiEdit />
                    </button>
                    <button onClick={() => dispatch(deleteDoctor(doctor.id))} >
                        <AiFillDelete style={{ color: 'red' }} />
                    </button>
                </Card.Body>
            </Card>
            <DoctorModal save={save} show={show} handleShow={handleShow} handleClose={handleClose} />
        </div>
    )
}

export default DoctorCard