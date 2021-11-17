import React from "react"; 
import { NavLink } from "react-router-dom";

function NavBar(){

    return(
        <>
            <h1>Hello</h1>
      
            <NavLink to = "/">
                Food
            </NavLink>
            <NavLink to = "/RestaurantForm">
                Add New food
            </NavLink>
       

        </>
    )

}

export default NavBar