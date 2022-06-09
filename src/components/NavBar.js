import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  
  return (
    <div id="navbar">
      <NavLink className="navbar-link" exact to="/">
        Home
      </NavLink>
      <NavLink className="navbar-link" to="/foods">
        Foods
      </NavLink>
      <NavLink className="navbar-link" to="/terminology">
        Terminology explained
      </NavLink>         
    </div>
  )
}

export default NavBar