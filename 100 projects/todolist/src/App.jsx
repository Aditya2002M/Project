
import { useState } from 'react'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")

  function changeHandler(event) {
    setNewTask(event.target.value);
  }
  function addTask() {

    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask])
      setNewTask("");
    }

  }
  function deleteTask(index) {
    const updateTask = tasks.filter((_, i) => i !== index);
    setTasks(updateTask);
  }
  function upTask(index) {
    if (index > 0) {
      const updateTask = [...tasks];
      [updateTask[index], updateTask[index - 1]] = [updateTask[index - 1], updateTask[index]];
      setTasks(updateTask);
    }

  }
  function downTask(index) {

    if (index < tasks.length - 1) {
      const updateTask = [...tasks];
      [updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]];
      setTasks(updateTask);
    }

  }

  return (
    <>
      <div className="container">

        <div className="first">
          <h2>ToDo List</h2>
        </div>

        <div className="second">

          <div className="box">
            <ol>
              {tasks.map((task, index) =>
                <li key={index}>
                  <span className='text'>{task}</span>
                  <div className="btns">
                    <button className='red' onClick={() => deleteTask(index)}>delete</button>
                    <button className='blue' onClick={() => upTask(index)}>up</button>
                    <button className='blue ' onClick={() => downTask(index)}>down</button>
                  </div>

                </li>

              )}

            </ol>
          </div>



        </div>


        <div className="third">
          <input type="text"
            placeholder='enter the task here'
            value={newTask}
            onChange={changeHandler} />
          <button className='addbtn' onClick={addTask}>Add</button>
        </div>

      </div>
    </>
  )
}

export default App
