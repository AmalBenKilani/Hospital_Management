import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { SideBarData } from './SideBarData'
import SubMenu from './SubMenu'
import '../App.css'


const NavIcon = styled(Link)`
margin-left:10px;
disply:flex;
justify-content:flex-start;
align-items:center;

`;

const SidebarWrap = styled.div`
width:100%
`
const SideBar = ({handleToggler ,isExpanded}) => {


    // const sidebarCollapsed = localStorage.getItem('sidebar-collapsed')
    // const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true)
    // const handleToggler = () => {
    //     if (isExpanded) {
    //         setIsExpanded(false)
    //         localStorage.setItem('sidebar-collapsed', true);
    //         return;

    //     }
    //     setIsExpanded(true)
    //     localStorage.removeItem('sidebar-collapsed')
    // }
    return (
        <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>

            <SidebarWrap>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={handleToggler} style={{ color: "#adbbc3", height: '25px', width: '25px', paddingTop: '5px' }} />
                </NavIcon>


                {SideBarData.map((item, index) => {
                    return <SubMenu item={item} key={index}></SubMenu>
                })}
            </SidebarWrap>

        </div>
    )

}

export default SideBar