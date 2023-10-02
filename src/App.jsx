import React, { useEffect, useState } from 'react'
import Task from './components/Task';
import Buttons from './components/Buttons';


// Get localStorage
const getLocalStorage = () => {
   let list = localStorage.getItem('list');
   if (list) {
      return (list = JSON.parse(localStorage.getItem('list')));
   } else {
      return [];
   }
};

const App = () => {

   // All State used
   const [value, setValue] = useState("")
   const [list, setList] = useState(getLocalStorage())


   // Remove Function
   const removeTask = (id) => {
      setList(list.filter((item) => item.id !== id))
   }


   // Complete Task Function
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


   // Main Click function <Button> => Add
   const handleClick = (e) => {
      e.preventDefault()
      if (value.length === 0 && !value) {
         window.alert("Can not add empty task")
      } else {
         setList([
            ...list,
            { title: value, id: new Date(), completed: false }
         ])
      }
      setValue('')
   }

   
   // set localStorage
   useEffect(() => {
      localStorage.setItem('list', JSON.stringify(list));
   }, [list]);

   return (
      <>
         <h1>To Do App List</h1>
         <main className='container' >
            <Buttons
               value={value}
               setValue={setValue}
               handleClick={handleClick}
            />
            <ul className='d-f'>
               {
                  list.map((item) => {
                     const { title, id, completed } = item
                     return (
                        <Task
                           key={id}
                           title={title}
                           id={id}
                           completed={completed}
                           completeTask={completeTask}
                           removeTask={removeTask}
                        />
                     )
                  })
               }
            </ul>
         </main >
      </>
   )
}

export default App
