import React from "react";
import { Link } from "react-router-dom";

function TermsList({ onTerms }) {

  return (
    <ul>
      {
        Object.keys(onTerms).map((term) => {
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