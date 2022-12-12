import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GoSearch } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { filterList } from '../actions/actionCreator';


function PatientSearch() {
    const [searchInput, setSearchInput] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <Form className="d-flex"  >
                <Form.Control
                    type="search"
                    placeholder="Search Patient By Name"
                    className="me-2"
                    aria-label="Search"

                    onChange={e => setSearchInput(e.target.value)}
                    
                />
              
                <Button variant="outline-success" onClick={()=>dispatch(filterList(searchInput))} ><GoSearch /></Button>
            </Form>

        </div>
    )
}

export default PatientSearch