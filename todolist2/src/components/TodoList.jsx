import List from './List'
import {todosContext} from '../App'
import {useContext,useState} from "react"
import { SparklesText } from "./ui/sparkles-text"

import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./ui/alert"



export default function TodoList(){

    const {todos,handleAdd} = useContext(todosContext)

    const [list_content,setListContent] = useState("")

    const [activeSparkles , setActiveSparkles] = useState(false)

    console.log(todos)

    const Typing = (e)=>{

        setListContent(e.target.value)
        e.target.value.length > 4 ? setActiveSparkles(true) : setActiveSparkles(false)

    }

    const ListTodos = ()=>  {
            if(todos && todos.length>0){
                  return   todos.map(td=><List id={td.id} content={td.content} modeEdit={td.modeEdit} check= {td.check}  /> )
            }else{
                return  (
                    <Alert variant="default" >
                        <AlertCircleIcon />
                        <AlertTitle>No tasks found.</AlertTitle>
                        <AlertDescription >
                        <p className='pe-[10vw]'>Please note the following :</p>
                       <ul className="list-disc list-inside mt-2 text-sm">
                        <li>The task list is empty.</li>
                        <li>You can add new tasks using the 'Add to list' button.</li>
                        <li>Tasks can be deleted by clicking on the task; it will be removed immediately.</li>
                        <li>Edit tasks by clicking the edit icon after hovering over the task, then save changes.</li>
                        <li>Tasks are stored in your browser's local storage; clearing storage will remove them.</li>
                        </ul>

                        </AlertDescription>
                    </Alert>
                )
                
            }
      }

    return (

        
        <div className="flex flex-col gap-6  w-[90vw]  md:w-[50vw]    max-w-[550px] h-[90vh]  max-h-[850px]" >

            
            {/* <!-- Input --> */}
            <div className="glass rounded-2xl  shadow-lg flex flex-col items-center space-y-3 ">
            <input 
                type="text" 
                placeholder="Write here anything"
                className=" flex-1 bg-[var(--color-secondary)] text-[var(--color-placeholder)] w-[90%] placeholder-gray-600 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-400"
                value={list_content}
                onChange={Typing}
                
           />

            <button
            onClick={()=>{
                setListContent('')
                setActiveSparkles(false)
                handleAdd(list_content)
            }}
            className="glass rounded-full transition w-[70%] flex justify-center items-center  drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]" style={{backgroundColor:"var(--color-button)"}}>

                {activeSparkles ? <SparklesText >Add to list</SparklesText> : <h1 className='text-lg font-normal '>Add to list</h1> }
                <i class="bi bi-caret-right-fill ms-2"></i>
            </button>
            </div>

            {/* <!-- Todo List --> */}
            <div className="glass relative flex-1  rounded-3xl shadow-lg    max-h-[50vh] md:max-h-[80vh]  overflow-y-hidden ">
            <div className='mb-4 sticky top-0 z-20'>
            <h2 className="text-center text-xl lg:text-2xl font-bold text-[var(--color-text)]  py-4">Todo List <i class="bi bi-clipboard-minus"></i></h2>
            <div className='h-[3px] bg-white/50 rounded-full '></div>
            </div>
            <div className='overflow-y-scroll overflow-x-hidden max-h-[calc(50vh-10px)] p-4 pb-8 drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]' >
            <ul className="space-y-3">

                <ListTodos/>
        
            </ul>
            </div>


            </div>


        </div>
        

    )
}