import React, { useEffect } from "react";
import Foods from "./Foods"

function FoodsList({ setFoods, filteredFoods, deleteFood }) {

  useEffect(() => {
    document.title = "Foods Nutritions"
    fetch("http://localhost:3000/foods")
    .then((r) => r.json())
    .then((data) => setFoods(data))
  }, [])

  function handleRemove(id) {
    fetch(`http://localhost:3000/foods/${id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => deleteFood(id))
  }


  return (
    <div>
      {
        filteredFoods.map((food) => {    
          return (
            <Foods key={food.id}
            name={food.name}
            image={food.url}
            energy={food["nutrition-per-100g"].energy}
            protein={food["nutrition-per-100g"].protein}
            fat={food["nutrition-per-100g"].fat}
            carbs={food["nutrition-per-100g"].carbohydrate}
            category={food.tags}
            id={food.id}
            onHandleRemove={handleRemove} />
          )            
        })
      }      
    </div>
  )
}

export default FoodsList