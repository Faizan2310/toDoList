
import './App.css';
import { useState } from 'react';

function App() {
  const [toDoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => setNewTask(event.target.value);
  const addTask = () => {
    const newToDolist = [...toDoList, newTask];
    setTodoList(newToDolist);
  }
  const deleteTask = (taskName) => {
    const newToDolist = toDoList.filter((task)=>{return task !== taskName});
    setTodoList(newToDolist)
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input className='inputBox' placeholder='Insert Task' onChange={handleChange}/>
        <button className='addBtn' onClick={addTask}>Add Task</button>
      </div>
      <div className='listTask'>
      {toDoList.map((task)=>{return <div>
        <h1>{task}</h1>
        <button onClick={() => deleteTask(task)}>X</button>
        </div>})}
      </div>
    </div>
  );
}

export default App;
