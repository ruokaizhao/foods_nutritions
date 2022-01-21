import React, { useEffect, useState } from 'react';
import FoodsList from "./FoodsList"
import Search from './Search';
import Filter from "./Filter"

function App() {
const[foods, setFoods] = useState([])
const[search, setSearch] = useState("")
const[filter, setFilter] = useState("all")


  return (
    <div className="App">
      <Search onSetSearch={setSearch} />
      <Filter onSetFilter={setFilter} />
      <FoodsList onFoods={foods} onSetFoods={setFoods} search={search} filter={filter} />
    </div>
  );
}

export default App;
