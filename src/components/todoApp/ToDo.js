import React, { useEffect, useState } from 'react'
import './ToDo.css'
import AddTask from './AddTask'
import ListTask from './ListTask'

const ToDo = () => {
    
    const [taskz,setTask]=useState([]);
    
    useEffect(()=>{
        document.title=`you have ${taskz.length} pendding task(s)`
    })
      
  

    const AddTaskhand =(title)=>{
        const newTask =[...taskz,{title}];
        setTask(newTask); 
    }


    const removeTask=(index)=>{
        const newTask=[...taskz]
        newTask.splice(index,1)
        setTask(newTask)
    }

  return (
    <>
        <div className='todo-container'>
            <div className='header'>ToDo App</div>
           
           <div className='add-task'>
             <AddTask AddTask={AddTaskhand}  />
           </div>

          <div className='tasks'>
            {taskz.map((task,index)=>(
                 <ListTask taskQ={task} removeTask={removeTask} index={index} key={index}/>

            ))}
            
          </div>
            
        </div>
      
    </>
  )
}

export default ToDo
