import TodoList  from "./components/TodoList"
import {useState,createContext} from 'react'

export const todosContext = createContext()

function App() {

  const [todos,setTodos] = useState([

          {id:0,content:"example todo",modeEdit:false ,check:true},
          {id:1,content:"example todo",modeEdit:false ,check:false}
  ])

  const handleAdd = (list_content)=>setTodos([...todos,{id:todos.length++,content:list_content,modeEdit:false,check:false}])
 
  const handleCheck = (e)=>setTodos(
    todos.map(td=>{

          if(td.id === Number(e.target.value)){
            return {...td , check : e.target.checked,modeEdit:false}
          }

          return td 

    })
  )

  const handleEdit = (list_id,onSave=true)=>setTodos(todos.map(td=>td.id===list_id ? {...td,modeEdit:onSave} : td))

  const handleInputChange = (e,list_id)=>setTodos(todos.map(td=>td.id===list_id ? {...td,content:e.target.value} : td ))

  return (
    <>
      <todosContext.Provider  value={{todos,handleAdd,handleCheck,handleEdit,handleInputChange}}>

          <div className="relative z-5 min-h-screen w-full flex items-center justify-center text-[#645D7E]  ">
            <div className="flex flex-col">
            <h1 className="text-[21vw]   h-[50vh]" style={{fontWeight: "700",fontStyle: "normal",marginTop:"-20vh"}}>Tuesday</h1>
            <h1 className="text-[21vw]  h-[50vh]" style={{fontWeight: "700",fontStyle: "normal"}}>Midnight</h1>
            </div>

              <div className="absolute z-10">
                   <TodoList />
              </div>
          </div>
  


      </todosContext.Provider>
    </>
  )
}

export default App
