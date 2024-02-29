import React, { useState } from 'react'
import Task from './components/Task'
import Modal from './components/Modal'
import './index.css'

function App() {
  const [todos, setTodos] = useState(['Do the dishes.', 'Finish this project.'])
  const [newTask, setNewTask] = useState('')

  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const handleNewTaskSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (newTask === '') return
    setTodos([...todos, newTask])
    setNewTask('')
  }

  const handleDeleteTask = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="container">
      <h1 className="title">The Harvard Crimson Task List</h1>
      <br></br>
      <ul>
        {todos.map((todo, index) => (
          <Task
            key={index}
            task={todo}
            index={index}
            onDelete={handleDeleteTask}
          />
        ))}
      </ul>

      <form onSubmit={handleNewTaskSubmit}>
        <input value={newTask} onChange={handleNewTaskChange} />
        <button type="submit">Create Task</button>
      </form>

      <Modal />
    </div>
  )
}

export default App
