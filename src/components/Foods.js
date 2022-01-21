import React, { useState } from "react";

function Foods({ name, image, energy, protein, fat, carbs, category, id }) {

  return (
    <div>
      <h1>{name}</h1>
      <img className="image" src={image} alt={name} />
      <p>Energy: {energy}</p>
    </div>
  )
}

export default Foods