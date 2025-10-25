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
import LiveClock from "./components/LiveClock"
import { Calendar } from "./components/ui/calendar";
import LiveClockDetailed from './components/LiveClockDetailed'


export const todosContext = createContext()

function App() {

  const [calendarDate,setCalendarDate] = useState(new Date())
  
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

          
            <div className="absolute z[-999] flex flex-col jutify-center hidden xl:block text-[var(--color-text)]  overflow-hidden">
              <h1 className="text-[21vw] align-baseline inline-block  h-[50vh]  text-center w-full mt-[-70px]" style={{fontWeight: "700",fontStyle: "normal"}}>Tuesday</h1>
              <h1 className="text-[21vw] align-baseline inline-block h-[50vh] text-center w-full" style={{fontWeight: "700",fontStyle: "normal"}}>Midnight</h1>
            </div>
              
              
              <div className="flex flex-col items-center mt-12 md:mt-0 xl:flex-row xl:justify-center w-[100vw]  gap-4 p-4 lg:p-8 min-h-screen overflow-y-scroll overflow-x-hidden  ">


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
                    <div className="flex flex-col gap-6 z-10   max-w-[1000px] w-[90vw] xl:w-[50vw]  ">

                    {/* <!-- Calendar --> */}
                    <div
                    class="glass   rounded-xl shadow  flex flex-col md:flex-row items-center md:items-stretch lg:justify-between   w-full lg:h-[50vh] lg:max-h-[450px] overflow-hidden"
                    style={{ padding: "2px", borderRadius: "1rem" }}
                    >

                      <LiveClock/>


                      <Calendar
                          mode="single"
                          selected={calendarDate}
                          onSelect={setCalendarDate}
                          className="rounded-md  shadow-sm  w-full md:w-[55%] m-5  lg:h-[50vh] lg:max-h-[400px] md:pb-12  overflow-y-scroll  "
                          captionLayout="dropdown"
                      />
                    </div>
                    
                    
                    {/* <!-- Clock --> */}
                    <LiveClockDetailed />

                  </div>

                
                  {/* right section  */}
                    <TodoList />
                


            </div>

    


        </todosContext.Provider>
    </>
  )
}

export default App
