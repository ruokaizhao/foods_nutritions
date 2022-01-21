import React, { useEffect, useState } from 'react';
import FoodsList from "./FoodsList"

function App() {
const[foods, setFoods] = useState([])


  return (
    <div className="App">
      <FoodsList onFoods={foods} onSetFoods={setFoods} />
    </div>
  );
}

export default App;
