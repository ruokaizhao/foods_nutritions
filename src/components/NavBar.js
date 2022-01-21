import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    
    return (
        <div>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/foods">
            Foods
          </NavLink>
          <NavLink to="/terminology">
            Terminology explained
          </NavLink>
        </div>
        

    )
}

export default NavBar