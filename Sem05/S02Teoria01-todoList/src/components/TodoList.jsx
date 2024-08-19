import React, { useEffect, useState } from 'react'
import "./TodoList.css"

const Task = ({task, index, completedTask, deleteTask}) =>{
    return(
        <div className='task' style={{textDecoration: task.complete ? 'line-through': ''}}>
            {task.title}
            <button style={{background: 'red'}} onClick={()=>deleteTask(index)}>X</button>
            <button style={{background: 'yellow'}} onClick={()=>completedTask(index)}>Completed</button>
        </div>
    )
}
const CreateTask = ({addTask}) =>{

    const [value, setValue] = useState('');

    const handleSubmit = (input) =>{
        input.preventDefault();
        addTask(value);
        setValue("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder='ADD NEW TASK' onChange={(input)=>setValue(input.target.value)}/>
        </form>
    )
}

function TodoList() {

    const [task,setTask] = useState([
        {key: 1, title: "tarea 1", complete: true},
        {key: 2, title: "tarea 2", complete: false},
        {key: 3, title: "tarea 3", complete: true},
    ]);

    const [taskRestantes, setTaskRestantes] = useState(0);

    useEffect(()=>{
        setTaskRestantes(task.filter((task) => !task.complete).length)
    });

    const addTask = (title) =>{
        // ... spread operator
        const newTask = [...task, {title, complete :  false}];
        setTask(newTask);
    }

    const completedTask = (index) =>{
        const newTask = [... task];
        newTask[index].complete = true;
        setTask(newTask);
    }

    const deleteTask = (index) => {
        const newTask = [...task];
        newTask.splice(index, 1);
        setTask(newTask);
    }

    return (
        <div className='todo-container'>
            <h1>TodoList</h1>
            <div className='header'>Tareas pendientes {taskRestantes}</div>
            <div className='task'>
                {
                    task.map((task,index) => (
                        <Task 
                        task={task}
                        index = {index}
                        completedTask = {completedTask}
                        deleteTask = {deleteTask}
                    />
                    ))}
                    
            </div>

            <div className='create-task'>
                <CreateTask addTask = {addTask}/>
            </div>
        </div>
    )
}

export default TodoList