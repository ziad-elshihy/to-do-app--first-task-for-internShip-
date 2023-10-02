import React from 'react'

const Buttons = ({ value, setValue, handleClick }) => {
   return (
      <div className='input-container'>
         <input type="text"
            className='input-field'
            value={value}
            onChange={(e) => setValue(e.target.value)}
         />
         <button
            className='btn'
            onClick={handleClick}
         >
            Add
         </button>
      </div>
   )
}

export default Buttons
