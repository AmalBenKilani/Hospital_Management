import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import DoctorModal from './DoctorModal';

const AddDoctor = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button style={{ borderRadius: '999px', fontSize: '11px', backgroundColor: '#ffc107', color: 'black' }} variant="primary" onClick={handleShow}>
                + Add Doctor
            </Button>

            <DoctorModal show={show} handleShow={handleShow} handleClose={handleClose} />

        </>
    )
}

export default AddDoctor