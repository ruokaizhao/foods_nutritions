import React, { useState } from "react";

function Foods({ name, image, energy, protein, fat, carbs, category }) {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleClick() {
    setIsFavorite((isFavorite) => !isFavorite)
  }

  return (
    <div className="container">
      <h1>{name}</h1>
      <img className="image" src={image} alt={name} />
      <h3>Nutrition per 100g</h3>
      <p>Energy: {energy}</p>
      <p>Protein: {protein}</p>
      <p>fat: {fat}</p>
      <p>Carbohydrate: {carbs}</p>
      <p>Category: {category}</p>
      <button onClick={handleClick}>
        {isFavorite? "★" : "☆"}
      </button>
    </div>
  )
}

export default Foods