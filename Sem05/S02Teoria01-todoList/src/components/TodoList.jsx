import React from 'react'

const Task = (task, index, completedTask, deleteTask) =>{
    return(
        <div className='task' style={{textDecoration: task.complete ? 'line-through': ''}}>
            <button style={{background: 'red'}} onClick={()=>deleteTask(index)}>X</button>
            <button style={{background: 'yellow'}} onClick={()=>completedTask(index)}>Completed</button>
        </div>
    )
}
const CreateTask = () =>{

}

function TodoList() {
  return (
    <div>
        <h1>TodoList</h1>
        <div>Tareas pendientes {}</div>
        <div>
            <Task/>
        </div>

        <div>
            <CreateTask/>
        </div>
    </div>
  )
}

export default TodoList