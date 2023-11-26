
import './App.css';
import { useState } from 'react';

function App() {
  const [toDoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);

  }

  return (
    <div className="App">
      <div className='addTask'>
        <input className='inputBox' placeholder='Insert Task' onChange={handleChange}/>
        <button className='addBtn'>Add Task</button>
      </div>
      <div className='listTask'>
      {newTask}
      </div>
    </div>
  );
}

export default App;
