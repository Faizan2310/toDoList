
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

  return (
    <div className="App">
      <div className='addTask'>
        <input className='inputBox' placeholder='Insert Task' onChange={handleChange}/>
        <button className='addBtn' onClick={addTask}>Add Task</button>
      </div>
      <div className='listTask'>
      {toDoList.map((task)=>{return <h1>{task}</h1>})}
      </div>
    </div>
  );
}

export default App;
