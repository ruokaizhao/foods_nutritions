import React, { useState } from "react";

function Sort({ onFoods, onSetFoods }) {
  const [sortValue, setSortValue] = useState("energy")

  function handleChange(e) {
    setSortValue(e.target.value)
  }

  function handleSort() {
    const sortedFoods = onFoods.sort(function(a, b) {
      return a["nutrition-per-100g"][sortValue] - b["nutrition-per-100g"][sortValue]
    })
    onSetFoods(sortedFoods) 
  }
  



  return (
    <div>
      <select onChange={handleChange}>
        <option value="energy">Energy</option>
        <option value="protein">Protein</option>
        <option value="fat">Fat</option>
        <option value="carbohydrate">Carbohydrate</option>
      </select>
      <button onClick={handleSort}>Sort</button>
    </div>   
  )
}

export default Sort