import React, { useState } from "react";

function NewFood({ onFoods, onSetFoods }) {
  const [submit, setSubmit] = useState({
    name: "",
    url: "",
    "nutrition-per-100g": {
      energy: "",
      protein: "",
      fat: "",
      carbohydrate: ""
    }
  })

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setSubmit({...submit, [name]: value})
  }

  function handleNestedChange(e) {
    const name = e.target.name
    const value = e.target.value
    setSubmit({...submit, ["nutrition-per-100g"]: {...submit["nutrition-per-100g"], [name]: value}})
  }




  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter food name" 
        name="name" 
        value={submit.name}
        onChange={handleChange}
        />
      <input 
        type="text" 
        placeholder="Enter food photo url" 
        name="url" 
        value={submit.url}
        onChange={handleChange}
        />
      <input 
        type="text"
        placeholder="Enter food energy per 100g"
        name="energy"
        value={submit["nutrition-per-100g"].energy}
        onChange={handleNestedChange}
        />
      <input 
        type="text" 
        placeholder="Enter food protein per 100g"
        name="protein"
        value={submit["nutrition-per-100g"].protein}
        onChange={handleNestedChange}
        />
      <input 
        type="text" 
        placeholder="Enter food fat per 100g"
        name="fat"
        value={submit["nutrition-per-100g"].fat}
        onChange={handleNestedChange}
        />
      <input 
        type="text" 
        placeholder="Enter food carbs per 100g"
        name="carbohydrate"
        value={submit["nutrition-per-100g"].carbohydrate}
        onChange={handleNestedChange}
        />
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewFood