import React, { useState } from "react";

function Sort({ handleSortAscending, handleSortDescending }) {
  const [isAscending, setIsAscending] = useState(false)
  const [sortValue, setSortValue] = useState("energy")

  function handleChange(e) {
    setSortValue(e.target.value)
  }

  function handleIsAscending() {
    isAscending ? handleSortAscending(sortValue) : handleSortDescending(sortValue)
    setTimeout(() => {
      setIsAscending((isAscending) => !isAscending)
    }, 100);
  }


  return (
    <div className="sort-food">
      <p>Sort food by property</p>
      <select onChange={handleChange}>
        <option value="energy">Energy</option>
        <option value="protein">Protein</option>
        <option value="fat">Fat</option>
        <option value="carbohydrate">Carbohydrate</option>
      </select>
      <button onClick={handleIsAscending}>
        {isAscending ? "Sort Ascending" : "Sort Descending"}
      </button>
    </div>   
  )
}

export default Sort