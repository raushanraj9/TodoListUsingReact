import React, { useState } from 'react'

function Todos() {
    const [inputValue,setInputValue]=useState("");
    const [displayValue,setDisplayValue]=useState("");
    function handleInput(e){
        setInputValue(e.target.value);
    }
    function valueDisplay()
    {
        setDisplayValue(inputValue);
    }
  return (
    <>
    <div className='justify-center flex gap-6'>
      
            <input type='text' className='p-2 rounded-lg ' onChange={handleInput} />
            <button className='bg-blue-400 rounded-lg p-2 border-collapse' onClick={valueDisplay}>Add Task</button>
   
        
    </div>
    <h1>{displayValue}</h1>
    </>
  )
}

export default Todos;