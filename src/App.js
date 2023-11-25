
import './App.css';
import { useState } from 'react';

function App() {
  const [toDoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <div className='addTask'>
        <input className='inputBox' placeholder='Insert Task'/>
        <button className='addBtn'>Add Task</button>
      </div>
      <div className='listTask'>

      </div>
    </div>
  );
}

export default App;
