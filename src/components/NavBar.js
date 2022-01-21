import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    
    return (
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/foods">
            Foods
          </NavLink>
        </div>
        

    )
}

export default NavBar