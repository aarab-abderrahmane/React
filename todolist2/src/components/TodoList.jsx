import List from './List'
import {todosContext} from '../App'
import {useContext,useState} from "react"


export default function TodoList(){

    const {todos,handleAdd,handleCheck,handleEdit,handleInputChange} = useContext(todosContext)

    const [list_content,setListContent] = useState("")

    console.log(todos)

    return (

        
        <div className="w-full max-w-md p-4 space-y-6">

            
            {/* <!-- Input --> */}
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 shadow-lg flex flex-col space-y-3">
            <input 
                type="text" 
                placeholder="Write here anything"
                className="flex-1 bg-transparent border border-white/40 text-gray-900 placeholder-gray-600 rounded-xl px-3 py-2 focus:outline-none focus:border-purple-400"
                value={list_content}
                onChange={(e)=>setListContent(e.target.value)}
           />

            <button
            onClick={()=>handleAdd(list_content)}
            className="px-5 py-2 rounded-xl bg-purple-500 text-white font-medium hover:bg-purple-600 transition">
                Add to list
            </button>
            </div>

            {/* <!-- Todo List --> */}
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-lg p-6  max-h-[60vh] 2xl:max-h-[80vh] overflow-y-scroll ">
            <h2 className="text-center text-xl font-semibold text-gray-900 mb-4">Todo List <i className="bi bi-card-checklist"></i></h2>
            
            <ul className="space-y-3">

                    {todos?.map(td=><List id={td.id} content={td.content} modeEdit={td.modeEdit} check= {td.check} handleCheck={handleCheck} handleEdit={handleEdit} handleInputChange={handleInputChange} /> )}
                   
            </ul>


            </div>


        </div>
        

    )
}