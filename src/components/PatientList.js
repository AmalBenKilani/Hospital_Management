import React, { useState } from 'react'
import { TbArrowBigRightLines } from "react-icons/tb";
import { useSelector, useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { deletePatient, savePatient } from '../actions/actionCreator';
import AddPatient from './AddPatient';
import PatientModal from './PatientModal';
import PatientSearch from './PatientSearch';





function PatientList() {
    const list = useSelector((state) => state.patientReducer.ListofPatients)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const save = useSelector(state => state.patientReducer.Save)
    const filterValue = useSelector(state => state.patientReducer.Filter)
    const filterList = (list, filterValue) => {
        //     if (filterValue === "") {
        //         return list
        //     }
        //     else {
        //         return list.filter(p => p.Name.toLowerCase() === filterValue.toLowerCase())

        //     }

        // }
        if (filterValue === "") {
            return list
        }
        if (list.filter(p => p.Name.toLowerCase() === filterValue.toLowerCase()).length === 0) {
            alert("Patient Does Not Exist")
            return list.filter(p => p.Name.toLowerCase() === filterValue.toLowerCase())
        }
        else {
            return list.filter(p => p.Name.toLowerCase() === filterValue.toLowerCase())

        }

    }

    const filteredList = filterList(list, filterValue)

    return (
        <>

            <div style={{ marginBottom: '20px', fontSize: '13px' }} >
                <TbArrowBigRightLines className='arrow-component' />
                Patient
            </div>
            <div className='searchAdd'>
                <div className='searchPatient' >
                    <PatientSearch />
                </div>

                <div className='addPatient' >
                    <AddPatient show={show} />
                </div>

            </div>


            <div>
                <Table style={{ fontSize: '10px' }} striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Blood Group</th>
                            <th>Mobile</th>
                            <th>City</th>
                            <th>Date</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredList.map(p => {
                            return (
                                <tr key={p.id} >
                                    <td>{p.id}</td>
                                    <td>{p.Name}</td>
                                    <td>{p.Gender}</td>
                                    <td>{p.Age}</td>
                                    <td>{p.BloodGroup}</td>
                                    <td>{p.Mobile}</td>
                                    <td>{p.City}</td>
                                    <td>{p.Date}</td>
                                    <td className='patientOption'>
                                        <button onClick={() => { handleShow(); dispatch(savePatient(p)) }} >
                                            <FiEdit />
                                        </button>
                                        <button onClick={() => dispatch(deletePatient(p.id))} >
                                            <AiFillDelete style={{ color: 'red' }} />
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </Table>




            </div>
            <PatientModal save={save} show={show} handleShow={handleShow} handleClose={handleClose} />

        </>
    )
}

export default PatientList