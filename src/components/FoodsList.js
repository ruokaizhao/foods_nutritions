import React, { useEffect } from "react";
import Foods from "./Foods"

function FoodsList({ setFoods, filteredFoods, deleteFood }) {

  useEffect(() => {
    document.title = "Foods Nutritions"
    // Since this side-effect will only run after the Foods component renders, the above line of code will only work
    // after user clicks on the Foods link on the Home page, since only then will the Foods component renders.
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