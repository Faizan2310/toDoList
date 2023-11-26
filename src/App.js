
import './App.css';
import { useState } from 'react';

function App() {
  // State for the to-do list
  const [toDoList, setTodoList] = useState([]);
  
  // State for the new task input
  const [newTask, setNewTask] = useState("");

  // Function to handle input changes
  const handleChange = (event) => setNewTask(event.target.value);

  // Function to add a new task to the to-do list
  const addTask = () => {
    // Create a new task object
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      isComplete: false,
    };

    // Validation: Check if the task name is empty or too long
    if (newTask === "") {
      alert("Task name cannot be empty!");
    } else if (newTask.length > 20) {
      alert("Task name is too long");
    } else {
      // Add the new task to the to-do list
      setTodoList([...toDoList, task]);
    }
  }

  // Function to delete a task from the to-do list
  const deleteTask = (id) => {
    const newToDolist = toDoList.filter((task) => task.id !== id);
    setTodoList(newToDolist);
  }

  // Function to mark a task as complete or incomplete
  const completeTask = (id) => {
    setTodoList(toDoList.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete }
      } else {
        return task;
      }
    }));
  }

  // Render the application UI
  return (
    <div className="App">
      {/* Input box and add task button */}
      <div className='addTask'>
        <input className='inputBox' placeholder='Insert Task' onChange={handleChange}/>
        <button className='addBtn' onClick={addTask}>Add Task</button>
      </div>
      
      {/* Display the list of tasks */}
      <div className='listTask'>
        {toDoList.map((task) => (
          <div key={task.id} style={{ backgroundColor: task.isComplete ? "lightgreen" : "" }}>
            <h1>{task.taskName}</h1>
            <button className='completeBtn' onClick={() => completeTask(task.id)}>Complete</button>
            <button className='deleteBtn' onClick={() => deleteTask(task.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

