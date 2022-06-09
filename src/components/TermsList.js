import React from "react";
import { Link } from "react-router-dom";

function TermsList({ terms }) {

  return (
    <ul>
      {
        Object.keys(terms).map((term) => {
          return (
            <li key={term}>
              <Link to={`/terminology/${term}`}>
              {term}
              </Link>
            </li> 
          )
        })
      }
    </ul>        
  )
}

export default TermsList