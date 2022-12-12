import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const HospitalNavbar = () => {
    return (
        <Navbar style={{border :'1px solid #e9e9e9'}}>
            <Container>
                <Navbar.Brand href="#home">Hospital Management</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Admin</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HospitalNavbar