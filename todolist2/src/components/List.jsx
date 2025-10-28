import Checkbox from './Checkbox'
import {  useState ,useContext} from 'react'
import {todosContext} from './TodoList'
import {Trash2Icon} from './ui/icons/Trash2Icon'
import { CodeXmlIcon  } from './ui/icons/CodeXmlIcon'
import {CircleCheckIcon} from './ui/icons/CircleCheckIcon'
import {PreferencesContext} from '../App'

const List = ({id,content,modeEdit,check})=>{

    const {PreferencesSettings} = useContext(PreferencesContext)
    const buttons = PreferencesSettings.buttons
    const {handleCheck,handleEdit,handleSave,hanldeDelete} = useContext(todosContext)

    const [todoContent , setTodoContent] = useState(content)

    function verify(){

        if(todoContent.trim().length<4){
            setTodoContent(content)
        }
        handleSave(id,todoContent)

        

    }

    return (

            


            <li class="glass   flex items-center  overflow-x-hidden rounded-xl px-4 py-2 h-[60px] overflow-y-hidden group  md:hover:scale-[1.04]" style={{borderWidth:"2px",backgroundColor:"var(--color-secondary)",boxShadow:"none"}}   >
                <input class={`w-[80%] font-medium text-[var(--color-text)] bg-transparent  outline-none decoration-purple-500 decoration-2 ${check? "line-through" : ""}`} disabled={check || !modeEdit} value={todoContent} onChange={(e)=>setTodoContent(e.target.value)}></input>
                <div className="flex  items-center justify-end gap-3  w-[110px]  ">
                    

                    < CodeXmlIcon  size={25} duration={0.5}  class={` text-[var(--color-text)]  hidden ${check || modeEdit || !buttons?.buttonEdit.active ? "" : "group-hover:block" }`} onClick={()=>handleEdit(id)}/>
                    
                    <Trash2Icon  size={25} duration={0.5} onClick={()=>hanldeDelete(id)} class={` cursor-pointer text-red-600  hidden ${ modeEdit || !buttons?.buttonDelete.active ? "" : "group-hover:block" } `}  />
                    <CircleCheckIcon  size={30} duration={0.5} class={`rounded-full  cursor-pointer hidden text-[var(--color-text)]  ${check || !modeEdit ? "" : "group-hover:block"} `}  onClick={verify} />

                    {!modeEdit && <Checkbox   id={id}  check={check} handleCheck={handleCheck} modeEdit={modeEdit} />}
                </div>
                
            </li>

    )

}

export default List 