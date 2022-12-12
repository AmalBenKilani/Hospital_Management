import React, { useState } from 'react'
import { TbArrowBigRightLines } from "react-icons/tb";
import { useSelector, useDispatch } from 'react-redux'
import AddDoctor from './AddDoctor';
import DoctorSearch from './DoctorSearch';
import DoctorCard from './DoctorCard';
import Carousel from "react-bootstrap/Carousel";

function DoctorList() {
    const list = useSelector((state) => state.doctorReducer.ListofDoctors)
    const [show, setShow] = useState(false);
    const save = useSelector(state => state.doctorReducer.Save)
    const filterValue = useSelector(state => state.doctorReducer.Filter)
    const filterList = (list, filterValue) => {

        if (filterValue === "") {
            return list
        }
        if (list.filter(p => p.Name.toLowerCase() === filterValue.toLowerCase()).length === 0) {
            alert("Doctor Does Not Exist")
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
                Doctor
            </div>

            <div className='searchAdd'>
                <div className='searchPatient' >
                    <DoctorSearch />
                </div>
                <div className='addPatient' >
                    <AddDoctor show={show} />
                </div>
            </div>

            <div>
                <Carousel style={{marginBottom:"20px"}}  slide={false}>
                    {filteredList.map(d => { return (<Carousel.Item > <DoctorCard doctor={d}   key={d.id}/> </Carousel.Item>) })}
                </Carousel>
            </div>

                 
       

        </>
    )
}

export default DoctorList