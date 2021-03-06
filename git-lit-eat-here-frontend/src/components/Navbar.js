import React from "react"; 
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

function NavBar(){

    return(
        <>
            <StyleNav>
            <NavLink to = "/">
                Food
            </NavLink>
            <NavLink to = "/RestaurantForm">
                Add New food
            </NavLink>
            </StyleNav>

        </>
    )

}

export default NavBar

const StyleNav = styled.div `
padding: 15px;
display:flex;
justify-content: space-evenly;
align-content:center;
font-size:25px;
padding-bottom: 5px;
//font-family: 'Architects Daughter', cursive;
font-weight:bold;
border-bottom:2px solid gray;
padding-top: 50px;
padding-bottom: 20px;
`