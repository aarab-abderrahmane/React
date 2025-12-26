import { ADD_TODO } from "./features/todoSlice"
import { TodoList } from "./components/todoList"
import { useSelector , useDispatch } from "react-redux"
import { useState } from "react"

function App() {
    const todoData = useSelector (state => state.todoReducer) 
    const dispatch = useDispatch()
    const [todoContent ,setTodoContent ] = useState()
    const addTodo = (e)=>{
        e.preventDefault()
        if(!todoContent && todoContent.trim().length === 0) return ; 
        dispatch(ADD_TODO({id:Date.now() , text : todoContent , status : {done:false}}))
        setTodoContent('')
      } 

  return (
    <>

      <div  className="w-screen  h-screen flex flex-col items-center p-6  bg-gray-900 ">
          <div className=" w-auto   ">
              <form
                onSubmit={addTodo}
               className="flex flex-col p-2" >
                <label htmlFor="taskInput">Write your task here : </label>
                <input
                  id="taskInput"
                  value={todoContent}
                  onChange={(e)=>setTodoContent(e.target.value)}
                 type="text" className="bg-white text-black" />
                <button
                 type="submit" style={{backgroundColor:"#06b4ffff",marginTop:"4px"}} >ADD </button>
              </form>
          </div>
          <div className="border-t p-2  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 ">
              {
                todoData.map(td => TodoList(td))
              }
          </div>
      </div>
    </>
  )
}

export default App
