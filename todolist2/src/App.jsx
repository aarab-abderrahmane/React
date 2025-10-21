import TodoList  from "./components/TodoList"
import {useState,createContext} from 'react'

export const todosContext = createContext()

function App() {

  const [todos,setTodos] = useState([

          {id:1,content:"example todo",modeEdit:false ,check:true},
          {id:2,content:"example todo",modeEdit:false ,check:false}
  ])

  const handleAdd = (list_content)=>setTodos([...todos,{id:todos.length++,content:list_content,modeEdit:false,check:false}])

  return (
    <>
      <todosContext.Provider  value={{todos,handleAdd}}>

          <TodoList />

      </todosContext.Provider>
    </>
  )
}

export default App
