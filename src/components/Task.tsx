import React from 'react'

function Task({
  task,
  index,
  onDelete,
}: {
  task: string
  index: number
  onDelete: (index: number) => void
}) {
  return (
    <li>
      {task}
      <button onClick={() => onDelete(index)}>Delete</button>
    </li>
  )
}

export default Task
