import React from "react";

function NewFood() {





    return (
        <form >
            <input type="text" placeholder="Enter food name"></input>
            <input type="text" placeholder="Enter food energy per 100g"></input>
            <input type="text" placeholder="Enter food protein per 100g"></input>
            <input type="text" placeholder="Enter food fat per 100g"></input>
            <input type="text" placeholder="Enter food carbs per 100g"></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewFood