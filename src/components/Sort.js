import React, { useState } from "react";

function Sort({ onFoods, onSetFoods }) {
  const [sortValue, setSortValue] = useState("energy")

  function handleChange(e) {
    setSortValue(e.target.value)
  }

  const sortedFoods = onFoods.sort



  return (
    <select onChange={handleChange}>
      <option value="energy">Energy</option>
      <option value="protein">Protein</option>
      <option value="fat">Fat</option>
      <option value="carbohydrate">Carbohydrate</option>
    </select>
  )

}