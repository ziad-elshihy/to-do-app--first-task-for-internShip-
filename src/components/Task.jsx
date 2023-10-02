import React from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'

const Task = ({ title, id, completed, removeTask, completeTask }) => {
   return (
      <li className={`main-li ${completed ? 'layer' : ''}`}>
         <span className={`${completed ? 'line' : ''}`}>
            {title}
         </span>
         <span>
            <button
               onClick={() => removeTask(id)}
            >
               <IoClose size={18} className='red' />
            </button>
            <button
               onClick={() => completeTask(id)}
            >
               <BsCheckLg size={18} className='blue' />
            </button>
         </span>
      </li>
   )
}

export default Task
