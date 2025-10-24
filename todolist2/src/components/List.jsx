import Checkbox from './Checkbox'
import {  useState ,useContext} from 'react'
import {todosContext} from '../App'



const List = ({id,content,modeEdit,check})=>{

    const {handleCheck,handleEdit,handleSave} = useContext(todosContext)

    const [todoContent , setTodoContent] = useState(content)

    return (

            <li class="glass   flex items-center  overflow-x-hidden rounded-xl px-4 py-2 group " style={{borderWidth:"2px",backgroundColor:"var(--color-secondary)",boxShadow:"none"}} >
                <input class={`w-[80%] font-medium text-[var(--color-text)] bg-transparent  outline-none decoration-purple-500 decoration-2 ${check? "line-through" : ""}`} disabled={check || !modeEdit} value={todoContent} onChange={(e)=>setTodoContent(e.target.value)}></input>
                <div className="flex  items-center justify-end gap-5  w-[100px]">
                    <i class={`bi bi-pencil  text-lg lg:text-xl cursor-pointer  hidden ${check || modeEdit ? "" : "group-hover:block" }`} onClick={()=>handleEdit(id)}></i>
                    <i class={`bi bi-check-circle-fill  cursor-pointer hidden text-[var(--color-text)] text-xl lg:text-2xl ${check || !modeEdit ? "" : "group-hover:block"} `}  onClick={()=>handleSave(id,todoContent)}></i>
                    {!modeEdit && <Checkbox   id={id}  check={check} handleCheck={handleCheck} modeEdit={modeEdit} />}
                </div>
                
            </li>

    )

}

export default List 