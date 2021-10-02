import React, { useState } from "react";

//props = addTask function that was passed from parent component (App.js)
function Form(props) {
  // Create a state
  const [name, setName] = useState("");

  // Create a function to handle input Change
  function handleChange(e) {
    setName(e.target.value);
  }

  // Create a function to handle task submissions
  function handleSubmit(e) {
    e.preventDefault();

    name === "" ? alert("No empty submit!") : props.addTask(name);

    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      {/* Input tasks */}
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        // Attach value to useState
        value={name}
        // Attach event listener to input
        onChange={handleChange}
      />
      {/* Add button  */}
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
