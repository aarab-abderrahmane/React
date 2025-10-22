import List from './List'
import {todosContext} from '../App'
import {useContext,useState} from "react"


export default function TodoList(){

    const {todos,handleAdd,handleCheck,handleEdit,handleInputChange} = useContext(todosContext)

    const [list_content,setListContent] = useState("")

    console.log(todos)

    return (

        
        <div className=" w-[90vw] max-w-[600px] md:w-[70vw]   lg:w-[48vw]    p-4 space-y-6">

            
            {/* <!-- Input --> */}
            <div className="glass rounded-2xl  shadow-lg flex flex-col items-center space-y-3 ">
            <input 
                type="text" 
                placeholder="Write here anything"
                className=" flex-1 bg-[var(--color-secondary)] text-[var(--color-placeholder)] w-[90%] placeholder-gray-600 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-400"
                value={list_content}
                onChange={(e)=>setListContent(e.target.value)}
                
           />

            <button
            onClick={()=>{
                setListContent('')
                handleAdd(list_content)
            }}
            className="glass rounded-full transition w-[70%]" style={{backgroundColor:"var(--color-button)"}}>
                Add to list
                <i class="bi bi-caret-right-fill ms-2"></i>
            </button>
            </div>

            {/* <!-- Todo List --> */}
            <div className="glass  rounded-3xl shadow-lg p-6   max-h-[50vh] md:max-h-[70vh] overflow-y-scroll  ">
            <div className='mb-4'>
            <h2 className="text-center text-xl lg:text-2xl font-bold text-[var(--color-text)]  py-4">Todo List <i class="bi bi-clipboard-minus"></i></h2>
            <div className='h-[3px] bg-white/50 rounded-full '></div>
            </div>
            <ul className="space-y-3">

                    {todos?.map(td=><List id={td.id} content={td.content} modeEdit={td.modeEdit} check= {td.check} handleCheck={handleCheck} handleEdit={handleEdit} handleInputChange={handleInputChange} /> )}
                   
            </ul>


            </div>


        </div>
        

    )
}