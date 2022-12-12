import React, { useState } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../App.css';


const SideBarLink = styled(Link)`
display:flex;
justify-content:space-beteween;
align-items:center;
padding:20px;
liste-style-none;
height:60px;
text-decoration:none;
font-size:18px;


&:hover{
    background:#173757;
    border-left: 4px solid #92a6e2;
    cursor:pointer;

}
`;
const SideBarLabel = styled.span`
margin-left: 16px;
`;
// const DropdownLink = styled(Link)`
// backgroud:#11283f;
// hight:60px;
// padding-left:3rem;
// display:flex;
// align-items:center;
// text-decoration:none;
// color:#adbbc3;
// font-size:18px;


// &:hover{
//     background:#173757;
//     border-left: 4px solid #92a6e2;
//     cursor:pointer;

// }


// `
const SubMenu = ({ item }) => {
    const [subNav, setSubNav] = useState(false)
    const showSubNav = () => { setSubNav(!subNav) }

    return (
        <>
            <SideBarLink className="sidebar-icon" to={item.path} onClick={item.subNav && showSubNav} >
                <div  >
                    {item.icon}
                </div>
                <SideBarLabel className="sidebar-text" style={{ color: "#adbbc3" }} >{item.title}</SideBarLabel>

                <div>
                    {
                        item.subNav && subNav ? item.iconOpened : item.subNav ? item.iconClosed : null
                    }
                </div>
            </SideBarLink>
            {/* <div className="dropdown">
                { item.subNav.map((item, index) => {
                   
                    return (

                        <DropdownLink to={item.path} key={index}>

                            <SideBarLabel>{item.title}</SideBarLabel>
                        </DropdownLink>


                    );
                })}
            </div> */}
        </>
    )
}
export default SubMenu;