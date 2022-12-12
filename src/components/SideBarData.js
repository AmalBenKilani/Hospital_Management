import React from 'react'
import '../App.css';
import { FaHome,FaUser,FaUserMd }  from 'react-icons/fa'
import {BiCalendarEdit} from 'react-icons/bi'
import { BsChatDotsFill } from "react-icons/bs";



export const SideBarData = [{
    title: 'Dashboard',
    path: '/',
    icon: <FaHome  style={{color:"#adbbc3"}}/>
},
{
    title: 'Patient',
    path: '/patient',
    icon: <FaUser  style={{color:"#adbbc3"}}/>
},
{
    title: 'Doctor',
    path: '/doctor',
    icon: <FaUserMd  style={{color:"#adbbc3"}}/>
},
{
    title: 'Appointments',
    path: '/Appointments',
    icon: <BiCalendarEdit style={{color:"#adbbc3"}}/>
},

{
    title: 'Chat',
    path: '/chat',
    icon: <BsChatDotsFill  style={{color:"#adbbc3"}}/>
},
]