import TodoList  from "./components/TodoList"
import {useState,createContext,useEffect} from 'react'
import * as React from "react"
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
import { Calendar } from "./components/ui/calendar"

export const todosContext = createContext()

function App() {
  const [date, setDate] = React.useState(new Date());


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
      console.log(e.target.value)
    if(td.id===list_id){

          if(typeof td.oldcontent === "undefined"){

            return {...td,oldcontent:td.content,content:e.target.value}

          }
            return {...td,content:e.target.value}
          


    } 

    return td 

  
  }))

  const handleSave = (id,newValue)=>{
    console.log(newValue)
    return  setTodos(todos.map(td=>{

            if(td.id===id){

                let content  = td.content
                if(newValue.length>4){
                  content=newValue
                  
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

          
            <div className="absolute z[-999] flex flex-col hidden xl:block text-[var(--color-text)]">
              <h1 className="text-[21vw]   h-[50vh]" style={{fontWeight: "700",fontStyle: "normal",marginTop:"-20vh"}}>Tuesday</h1>
              <h1 className="text-[21vw]  h-[50vh]" style={{fontWeight: "700",fontStyle: "normal"}}>Midnight</h1>
            </div>
              
              
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,500px)] gap-6 p-4 lg:p-8 min-h-screen overflow-y-scroll">


                  <div className="fixed top-4 right-4 z-[200]">

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

                  {/* <!-- Left section --> */}
                    <div className="grid grid-rows-2 gap-6 z-10 w-full ">

                    {/* <!-- Calendar --> */}

                    <div class="glass  w-full  rounded-xl shadow  flex justify-between " style={{padding:"2px",borderRadius:"1rem"}} >
                          <div className="flex flex-col backdrop-blur-[20px] bg-white/30 rounded-2xl  bg-[var(--color-secondary)] w-[40%]">
                              <div className="flex justify-between p-4 font-bold text-xl">
                                <h1>August</h1>
                                <h1>2024</h1>
                              </div>
                              <hr></hr>
                              <div className="w-full flex flex-1 flex-col justify-between items-center">
                                <h1 className="text-[10vw] font-bold">25</h1>
                                <h1 className="mb-4 font-bold">Wednesday</h1>
                              </div>
                          </div>

                          <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md  shadow-sm   w-[55%] m-5 max-h-[40vh]  overflow-y-scroll "
                          captionLayout="dropdown"
                        />
                    </div>
                    {/* <!-- Clock --> */}
                    <div class="glass w-full h-50 bg-[var(--color-secondary)] rounded-xl shadow"></div>
                  </div>

                
                  {/* right section  */}
                    <TodoList />
                


            </div>

    


        </todosContext.Provider>
    </>
  )
}

export default App
