import React from "react";

function Filter({ onSetFilter }) {

    function handleChange(e) {
        onSetFilter(e.target.value)
    }

    return (
        <div className="filter-food">
          <p>Filter food by category</p>
          <select onChange={handleChange}>
            <option value="all">-</option>
            <option value="fruit">fruit</option>
            <option value="legume">legume</option>
            <option value="nut">nut</option>
            <option value="vegetable">vegetable</option>
          </select>     
        </div>
        
    )
}

export default Filter