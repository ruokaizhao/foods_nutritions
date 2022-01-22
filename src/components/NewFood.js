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


export default NewFood