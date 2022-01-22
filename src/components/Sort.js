import React from "react";

function Sort({ onFoods, onSetFoods }) {
  const sortedFoods = onFoods.sort



  return (
    <select>
      <option value="energy">Energy</option>
      <option value="protein">Protein</option>
      <option value="fat">Fat</option>
      <option value="carbohydrate">Carbohydrate</option>
    </select>
  )

}