import React, { useState } from "react";

function Search({ onSetSearch }) {
    const[input, setInput] = useState("")

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        onSetSearch(input)
    }



    return (
        <form className="searchbar" onSubmit={handleSubmit}>
          <input
            type="text"
            id="search"
            placeholder="search food"
            value={input}
            onChange={handleChange}
          />
          <button type="submit">🔍</button>
        </form>
      );
}
    
export default Search
