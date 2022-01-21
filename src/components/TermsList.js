import React from "react";
import { Link } from "react-router-dom";

function TermsList({ onTerms }) {

  return (
    <div>
      {
        onTerms.map((term) => {
          return (
            <div key={term.id}>
              <Link to={`/terminology/${term.id}`}>
              {term.id}
            </Link>
            </div>  
          )
        })
      }      
    </div>    
  )
}

export default TermsList