
import './App.css';
import { useState } from 'react';

function App() {
  const [toDoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => setNewTask(event.target.value);

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...toDoList, task]);
  }
  
  const deleteTask = (id) => {
    const newToDolist = toDoList.filter((task)=>{return task.id !== id});
    setTodoList(newToDolist)
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input className='inputBox' placeholder='Insert Task' onChange={handleChange}/>
        <button className='addBtn' onClick={addTask}>Add Task</button>
      </div>
      <div className='listTask'>
      {toDoList.map((task)=>{
        return <div key={task.id}>
        <h1>{task.taskName}</h1>
        <button onClick={() => deleteTask(task.id)}>X</button>
        </div>})}
      </div>
    </div>
  );
}

export default App;
