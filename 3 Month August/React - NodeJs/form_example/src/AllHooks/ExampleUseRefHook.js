import React, { useState } from 'react'

const ExampleUseRefHook = () => {
    const inputRef = useState(null);

    const handleClick = () => {
        try {
            inputRef.current.focus()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <h1>Use Ref</h1>
        <input type="text" placeholder= "Enter Your Name" className="input-group-text" ref={inputRef} inputRef/>
        <br/>
        <button className='btn btn-primary' onClick={handleClick}>click</button>
    </div>
  )
}

export default ExampleUseRefHook