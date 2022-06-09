import React, { useState } from "react";

function CountLettertyped() {

  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState('')

  function handleChange(e) {
    setInput(e.target.value)
    setCounter(e.target.value.length)
  }

  // if I use setCounter(input.length), it won't work, since setState is asynchronous, it will count the letter
  // of previous input, even use callback syntax like setCounter((currentCounter) => input.length) or
  // setInput((currentInput) => e.target.value) won't work.
  // Think about it, here we need the length after the component re-renders, I can't think of a way to do it.
  // Instead, setCounter(e.target.value.length) will do the work, since the change of e.target.value is synchronous.

  // Or, just like the interviewed told me, use {input.length} between <p> tag. Since the page will re-render after
  // changing state, and after re-render, the input state is now the new value I want it to be.


  return (
    <div>
      <p>{counter}</p>
      <p>{input.length}</p>
      <label htmlFor="type">Please enter anything to count the letter you typed</label>
      <input type="text" value={input} id= "type" onChange={handleChange} />
    </div>
  )
}


export default CountLettertyped

