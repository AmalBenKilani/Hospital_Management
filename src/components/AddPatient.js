import  {useState } from 'react';
import Button from 'react-bootstrap/Button';
import PatientModal from './PatientModal';



const AddPatient = ({ patient }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  

    return (
        <>
            <Button style={{ borderRadius: '999px', fontSize: '11px', backgroundColor: '#ffc107', color: 'black' }} variant="primary" onClick={handleShow}>
                + Add Patient
            </Button>

            <PatientModal show={show} handleShow={handleShow} handleClose={handleClose} />

        </>
    )
}

export default AddPatient