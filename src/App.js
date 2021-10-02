import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";
import React, { useState } from "react";
import { nanoid } from "nanoid"; //Set task id

function App(props) {

  // Initialize tasks
  const [tasks, setTasks] = useState(props.tasks);

  // Show tasks
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

   // Count tasks
   const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
   const headingText = `${taskList.length} ${taskNoun} remaining`;

  // Add tasks
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  // Complete tasks
  function toggleTaskCompleted(id) {
   const updateTasks = tasks.map(task => {
     // if this tasks has the same ID as the edited task
     if (id === task.id) {
       //use object spread to make a new object
       //whole `completed` prop has been inverted
       return {...task, completed: !task.completed}
     }
     return task;
   });
   setTasks(updateTasks);
  }

  // Delete tasks
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      {/* Pass addTask function into Form component */}
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>

      <h2 id="list-heading">{headingText}</h2>
      <ul
        //role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
