import React, { useState } from 'react';
import FoodsList from "./FoodsList"
import Search from './Search';
import Filter from "./Filter"
import NavBar from './NavBar';
import { Route, Switch } from "react-router-dom"
import TermsExplain from "./TermsExplain"

function App() {
const[foods, setFoods] = useState([])
const[search, setSearch] = useState("")
const[filter, setFilter] = useState("all")


  return (
    <div className="App">
      <NavBar />
      <Search onSetSearch={setSearch} />
      <Filter onSetFilter={setFilter} />
      <Switch>
        <Route path="/foods">
          <FoodsList onFoods={foods} onSetFoods={setFoods} search={search} filter={filter} />
        </Route>
        <Route path="/terminology">
          <TermsExplain />
        </Route>
      </Switch>      
    </div>
  );
}

export default App;
