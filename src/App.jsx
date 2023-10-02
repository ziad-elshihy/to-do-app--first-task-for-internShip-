import React, { useEffect, useState } from 'react'

import './App.css'

const getLocalStorage = () => {
   let list = localStorage.getItem('list');
   if (list) {
      return (list = JSON.parse(localStorage.getItem('list')));
   } else {
      return [];
   }
};

const App = () => {
   const [value, setValue] = useState("")
   const [list, setList] = useState(getLocalStorage())


   const removeTask = (id) => {
      setList(list.filter((item) => item.id !== id))
   }

   const completeTask = (id) => {
      setList(
         list.map((item) => {
            if (item.id === id) {
               return { ...item, completed: !item.completed }
            }
            return item
         })
      )
   }

   const handleClick = (e) => {
      e.preventDefault()
      if (value.length <= 0) {
         window.alert("Can not add empty task")
      } else {
         setList([
            ...list,
            { title: value, id: new Date, completed: false }
         ])
      }
      setValue('')
   }

   useEffect(() => {
      localStorage.setItem('list', JSON.stringify(list));
   }, [list]);

   return (
      <>
      <h1>T0 Do App</h1>
         <main className='container' >
            <div>
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
            <ul className='d-f'>
               {
                  list.map((item) => {
                     const { title, id, completed } = item
                     return (
                        <li key={id} className={`main-li ${completed && 'layer'}`}>
                           <span className={`${completed && 'line'}`}>
                              {title}
                           </span>
                           <span>
                              <button
                                 onClick={() => removeTask(id)}
                              >
                                 remove
                              </button>
                              <button
                                 onClick={() => completeTask(id)}
                              >
                                 mark as complete
                              </button>
                           </span>
                        </li>
                     )
                  })
               }
            </ul>
         </main >
      </>


   )
}

export default App
