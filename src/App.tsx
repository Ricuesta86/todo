import React, {useEffect,useState} from 'react'
import api from './api';
import './App.css';
import  type { todo } from './todo';




const App = () => {
const [todos, setTodos] = useState<todo[]>(api.todos.list)

useEffect(() => {
api.todos.set(todos)
}, [todos])


const handleAdd=(event:any)=>{
  event.preventDefault();
  if(event.target.text.value=='') return;
  setTodos(todos.concat({
    id:+new Date(),
    completed:false,
    text: event.target.text.value
  }))
  event.target.text.value=''
}

const handleRemove = (id:todo['id'])=>{
  setTodos(todos.filter(todo=>todo.id!==id)) 
}

const handleTogget = (id:todo[ 'id'])=>{
  setTodos(todos.map(todo=>todo.id===id?{...todo, completed:!todo.completed}:todo))
}

  return (
    <div>
      <h1>Todo list</h1>
      <form onSubmit={(event)=>handleAdd(event)}>
        <input type="text" name='text' />
        <button>Add</button>
      </form>

      <ul>
        {todos.map(todo=>(
          <li key={todo.id} >
            <div className={todo.completed?'completed':''}
          onClick={()=>handleTogget(todo.id)}>
            {todo.text}
            </div>
          <button onClick={()=>handleRemove(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App


