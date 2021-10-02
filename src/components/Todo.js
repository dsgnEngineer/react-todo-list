import React from "react";

export default function Todo(props) {
  return (
    <li className="todo stack-small">
      {/* Checkbox */}
      <div className="c-cb">
        <input 
        id={props.id}
        type="checkbox" 
        defaultChecked={props.completed} 
        onChange={ () => props.toggleTaskCompleted(props.id)}
        />
        {/* Task name */}
        <label className="todo-label" htmlFor="props.id">
          {props.name}
        </label>
      </div>
      {/* Buttons */}
      <div className="btn-group">
        {/* Edit button */}
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        {/* Delete button  */}
        <button 
        type="button" 
        className="btn btn__danger"
        onClick={() => {props.deleteTask(props.id)}}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}
