import React, { useState } from 'react'

const AddTask = ({AddTask}) => {
    const [value,setValue] = useState("");
    const addItem = ()=>{
        AddTask(value)
        setValue('')
    }
  return (
    <>
      <div className='input-container'>
        <input type="text"  className='input' placeholder='Add task' onChange={(e)=>setValue(e.target.value)} value={value}/>
        
        <button type='submit' className='add-btn' onClick={addItem}>ADD</button>
      </div>
    </>
  )
}

export default AddTask

