import React, { useState } from 'react';
import FoodsList from "./FoodsList"
import Search from './Search';
import Filter from "./Filter"
import NavBar from './NavBar';
import { Route, Switch } from "react-router-dom"
import TermsExplain from "./TermsExplain"
import NewFood from './NewFood';
import Sort from "./Sort"
import Counttype from "./CountLettertyped"

function App() {
const[foods, setFoods] = useState([])
const[search, setSearch] = useState("")
const[filter, setFilter] = useState("all")

const searchedFoods = foods.filter((food) => {
  if (search === "") {
    return true
  } else {
    return food.name.toLowerCase().includes(search.toLowerCase())
  }
})

const filteredFoods = searchedFoods.filter((food) => {
  if (filter === "all") {
    return true
  } else {
    return food.tags === filter
  }
})

function addFood(food) {
  const newFoods = [...foods, food]
  setFoods(newFoods)
}

function deleteFood(id) {
  const newFoods = foods.filter((food) => {
    return food.id !== id
  })
  setFoods(newFoods)
}

function handleSortAscending(sortValue) {
  const sortedFoods = [...foods].sort(function(a, b) {
    return a["nutrition-per-100g"][sortValue] - b["nutrition-per-100g"][sortValue]
  })
  setFoods(sortedFoods) 
}

function handleSortDescending(sortValue) {
  const sortedFoods = [...foods].sort(function(a, b) {
    return b["nutrition-per-100g"][sortValue] - a["nutrition-per-100g"][sortValue]
  })
  setFoods(sortedFoods) 
}

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/foods">
          <Search setSearch={setSearch} />
          <NewFood addFood={addFood} />
          <Filter setFilter={setFilter} />
          <Sort handleSortAscending={handleSortAscending} handleSortDescending={handleSortDescending} />
          <FoodsList setFoods={setFoods} filteredFoods={filteredFoods} deleteFood={deleteFood} />
        </Route>
        <Route path="/terminology">
          <TermsExplain />
        </Route>
        <Route exact path="/">
          <h1>Welcome to the world of food nutritions!</h1>
          <Counttype />
        </Route>
      </Switch>      
    </div>
  );
}

export default App;
