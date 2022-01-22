import React, { useState } from 'react';
import FoodsList from "./FoodsList"
import Search from './Search';
import Filter from "./Filter"
import NavBar from './NavBar';
import { Route, Switch } from "react-router-dom"
import TermsExplain from "./TermsExplain"
import NewFood from './NewFood';
import Sort from "./Sort"

function App() {
const[foods, setFoods] = useState([])
const[search, setSearch] = useState("")
const[filter, setFilter] = useState("all")




  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/foods">
          <Search onSetSearch={setSearch} />
          <Filter onSetFilter={setFilter} />
          <NewFood onFoods={foods} onSetFoods={setFoods}/>
          <Sort onFoods={foods} onSetFoods={setFoods} />
          <FoodsList onFoods={foods} onSetFoods={setFoods} search={search} filter={filter} />
        </Route>
        <Route path="/terminology">
          <TermsExplain />
        </Route>
        <Route exact path="/">
          <h1>Welcome to the world of food nutritions!</h1>
        </Route>
      </Switch>      
    </div>
  );
}

export default App;
