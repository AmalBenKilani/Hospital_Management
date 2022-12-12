import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addPatient, editPatient } from '../actions/actionCreator';
import { useEffect, useState } from 'react'



function PatientModal({ show, handleClose, save }) {

    const dispatch = useDispatch()
    const [input, setInput] = useState({})
 

    useEffect(() => {
        save ? setInput({ Name: save.Name, Gender: save.Gender, Age: save.Age, BloodGroup: save.BloodGroup, Mobile: save.Mobile, City: save.City, Date: save.Date }) : setInput('')
    }, [save])


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ fontSize: '10px' }} closeButton>
                    <Modal.Title style={{ fontSize: '13px' }} >Add New Patient </Modal.Title>
                </Modal.Header>

                <Modal.Body className='modalBody' style={{ fontSize: '11px' }} >

                    <div className='modalBox'>
                        <label>Name </label>
                        <input name='Name' value={input.Name} onChange={e => { setInput({ ...input, [e.target.name]: e.target.value }) }} ></input>
                    </div>

                    <div className='modalBox'>
                        <label>Gender </label>
                        {/* <input name='input'></input> */}
                        <select name='Gender' value={input.Gender} onChange={e => { setInput({ ...input, [e.target.name]: e.target.value }) }} >
                            <option value="">--</option>
                            <option value="Male" name='Gender'  >
                                Male
                            </option>
                            <option value="Female" name='Gender' >
                                Female
                            </option>
                        </select>
                    </div>
                    <div className='modalBox'>
                        <label>Age</label>
                        <input name='Age' value={input.Age} onChange={e => { setInput({ ...input, [e.target.name]: e.target.value }) }}></input>
                    </div>
                    <div className='modalBox'>
                        <label>Blood Group</label>
                        {/* <input name='input'></input> */}
                        <select name='BloodGroup' value={input.BloodGroup} onChange={e => { setInput({ ...input, [e.target.name]: e.target.value }) }}>
                            <option value="">--</option>
                            <option value="A+"   >
                                A+
                            </option>
                            <option value="A-"    >
                                A-
                            </option>
                            <option value=" B+"    >
                                B+
                            </option>
                            <option value="B-"   >
                                B-
                            </option>
                            <option value="AB+"    >
                                AB+
                            </option>
                            <option value="AB-"   >
                                AB-
                            </option>
                            <option value="O+"   >
                                O+
                            </option>
                            <option value="O-"    >
                                O-
                            </option>
                        </select>
                    </div>
                    <div className='modalBox'>
                        <label>Mobile</label>
                        <input name='Mobile' value={input.Mobile} onChange={e => { setInput({ ...input, [e.target.name]: e.target.value }) }}></input>
                    </div>
                    <div className='modalBox'>
                        <label>City</label>
                        <input name='City' value={input.City} onChange={e => { setInput({ ...input, [e.target.name]: e.target.value }) }}></input>
                    </div>
                    <div className='modalBox'>
                        <label>Birthday Date</label>
                        <input type="date" name='Date' value={input.Date} onChange={e => { setInput({ ...input, [e.target.name]: e.target.value }) }}></input>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ fontSize: '10px' }} variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{ backgroundColor: '#28a745', color: 'black', fontSize: '10px' }} variant="primary" onClick={ save ? () => { dispatch(editPatient(input)); handleClose() } : () => { dispatch(addPatient(input)); handleClose() }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
// onClick={() => { dispatch(addPatient(input)); handleClose() }}
export default PatientModal