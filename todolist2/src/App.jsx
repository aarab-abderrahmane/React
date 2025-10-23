import TodoList  from "./components/TodoList"
import {useState,createContext,useEffect} from 'react'
import { SmoothCursor } from "./components/ui/smooth-cursor"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu"
import { Button } from "./components/ui/button"
import { MoreHorizontalIcon } from "lucide-react"

export const todosContext = createContext()

function App() {

  const [todos,setTodos] = useState(()=>{

      const saved = localStorage.getItem('todos')
      return (saved  || saved=="null")? JSON.parse(saved) 
                  : [
                    {id:0,content:"example todo1",modeEdit:false ,check:true},
                    {id:1,content:"example todo2",modeEdit:false ,check:false}
                  ]

  } )

  useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))

  },[todos])

  const handleAdd = (list_content)=>{
    if(list_content.length > 4){
          setTodos([...todos,{id:todos.length++,content:list_content,modeEdit:false,check:false}])
    }
  }

  const handleCheck = (e)=>setTodos(
    todos.map(td=>{

          if(td.id === Number(e.target.value)){
            return {...td , check : e.target.checked,modeEdit:false}
          }

          return td 

    })
  )

  const handleEdit = (list_id)=>setTodos(todos.map(td=>td.id===list_id ? {...td,modeEdit:true} : td))

  const UpdateContent = (e,list_id)=> setTodos(todos.map(td=>{

    if(td.id===list_id){

          if(typeof td.oldcontent === "undefined"){

            return {...td,oldcontent:td.content,content:e.target.value}

          }else{
            return {...td,content:e.target.value}
          }


    } 

    return td 

  
  }))

  const handleSave = (id)=>{

    return  setTodos(todos.map(td=>{

            if(td.id===id){

                let content  = null 
                if(td.content.length>4){
                  content=td.content
                  
                }else{
                  content = td.oldcontent
                }

                return {id:td.id,content:content, modeEdit:false,check:false}
                

            }

            return td


      }))

  }


  function resetStorage(){

      localStorage.clear()
      localStorage.setItem("todos", JSON.stringify([]));
      window.location.reload();
  }

  
  return (
    <>

    <SmoothCursor  />
        <todosContext.Provider  value={{todos,handleAdd,handleCheck,handleEdit,handleSave,UpdateContent}}>

            <div className="relative z-5 min-h-screen w-full flex items-center justify-center text-[#645D7E]  ">
              <div className="flex flex-col hidden xl:block">
              <h1 className="text-[21vw]   h-[50vh]" style={{fontWeight: "700",fontStyle: "normal",marginTop:"-20vh"}}>Tuesday</h1>
              <h1 className="text-[21vw]  h-[50vh]" style={{fontWeight: "700",fontStyle: "normal"}}>Midnight</h1>
              </div>

                <div className="absolute z-10">
                    <TodoList />
                </div>



                <div className="fixed top-4 right-4 z-10">

                    <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="default" aria-label="Open menu" size="icon-lg">
                      <MoreHorizontalIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40" align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem  className='text-red-500' onSelect={resetStorage}>
                        Reset
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled>
                        Share...
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled>Download</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

              </div>

                
            </div>
    


        </todosContext.Provider>
    </>
  )
}

export default App
