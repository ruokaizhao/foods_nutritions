import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  
  return (
    <div>
      <span>
      <NavLink to="/">
        Home
      </NavLink>
      </span>
      <span>
      <NavLink to="/foods">
        Foods
      </NavLink>
      </span>
      <span>
      <NavLink to="/terminology">
        Terminology explained
      </NavLink>
      </span>          
    </div>
  )
}

export default NavBar