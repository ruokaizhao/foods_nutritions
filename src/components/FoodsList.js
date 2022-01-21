import React, { useEffect, useState } from "react";
import Foods from "./Foods"

function FoodsList({ onFoods, onSetFoods }) {

  useEffect(() => {
    document.title = "Foods Nutritions"
    fetch("http://localhost:3000/foods")
    .then((r) => r.json())
    .then((data) => onSetFoods(data))
  }, [])

  return (
    <div>
      {
        onFoods.map((food) => {    
          return (
            <Foods key={food.id}
            name={food.name}
            image={food.url}
            energy={food["nutrition-per-100g"].energy}
            protein={food["nutrition-per-100g"].protein}
            fat={food["nutrition-per-100g"].fat}
            carbs={food["nutrition-per-100g"].carbohydrate}
            category={food.tags}
            id={food.id} />
          )            
        })
      }      
    </div>
  )
}

export default FoodsList