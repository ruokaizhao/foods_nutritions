import React, { useState } from "react";

function NewFood({ foods, setFoods }) {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    "nutrition-per-100g": {
      energy: "",
      protein: "",
      fat: "",
      carbohydrate: ""
    },
    tags: "fruit"
  })

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({...formData, [name]: value})
  }

  function handleNestedChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({...formData, ["nutrition-per-100g"]: {...formData["nutrition-per-100g"], [name]: value}})
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
    .then((r) => r.json())
    .then((data) => setFoods([...foods, data]))
    .then((data) => setFormData({
        name: "",
        url: "",
        "nutrition-per-100g": {
          energy: "",
          protein: "",
          fat: "",
          carbohydrate: ""
        },
        tags: "fruit"
      }))
  }


  return (
    <form className="new-food" onSubmit={handleSubmit}>
      <label htmlFor="new-food-input">Submit your own food</label>
      <input 
        type="text" 
        placeholder="Enter food name" 
        name="name" 
        id="new-food-input"
        value={formData.name}
        onChange={handleChange}
        />
      <input 
        type="text" 
        placeholder="Enter food photo url" 
        name="url" 
        value={formData.url}
        onChange={handleChange}
        />
      <input 
        type="text"
        placeholder="Enter food energy per 100g"
        name="energy"
        value={formData["nutrition-per-100g"].energy}
        onChange={handleNestedChange}
        />
      <input 
        type="text" 
        placeholder="Enter food protein per 100g"
        name="protein"
        value={formData["nutrition-per-100g"].protein}
        onChange={handleNestedChange}
        />
      <input 
        type="text" 
        placeholder="Enter food fat per 100g"
        name="fat"
        value={formData["nutrition-per-100g"].fat}
        onChange={handleNestedChange}
        />
      <input 
        type="text" 
        placeholder="Enter food carbs per 100g"
        name="carbohydrate"
        value={formData["nutrition-per-100g"].carbohydrate}
        onChange={handleNestedChange}
        />
      <select name="tags" value={formData.tags} onChange={handleChange}>
          <option value="fruit">fruit</option>
          <option value="legume">legume</option>
          <option value="nut">nut</option>
          <option value="vegetable">vegetable</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewFood