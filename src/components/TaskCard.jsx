import React from 'react'
import { useTasks } from '../context/TaskContext'

export default function TaskCard ({ task }) {
  const { deleteTask } = useTasks()

  const handleDelete = async () => {
    deleteTask(task.id)
  }

  return (
    <div>
      <h1>{task.name}</h1>
      <p>{JSON.stringify(task.done)}</p>
      <div>
        <button>Done</button>
        <button onClick={() => handleDelete()}>Delete</button>
      </div>
    </div>
  )
}