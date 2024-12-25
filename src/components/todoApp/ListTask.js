import React from 'react'

const ListTask = ({taskQ,index,removeTask}) => {
  return (
    <>
        <div className='list-task'>
            {taskQ.title}
            <button className='delete-btn' onClick={()=>{removeTask(index)}} >Delete</button>
        </div>
      
    </>
  )
}

export default ListTask
