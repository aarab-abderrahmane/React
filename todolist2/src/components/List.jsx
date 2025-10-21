

const List = ({id,content,modeEdit,check,handleCheck,handleEdit,handleInputChange})=>{

    return (


            <li class="flex items-center justify-between bg-white/30 rounded-xl px-4 py-2 group">
            <input class={`font-medium text-gray-800 bg-transparent decoration-purple-500 decoration-2 ${check? "line-through" : ""}`} disabled={!modeEdit && !check} value={content} onChange={(e)=>handleInputChange(e,id)}></input>
                <div className="flex items-center gap-5 ">
                    <i class={`bi bi-pencil  cursor-pointer  hidden ${check || modeEdit ? "" : "group-hover:block" }`} onClick={()=>handleEdit(id)}></i>
                    <i class={`bi bi-check-circle-fill  cursor-pointer hidden text-green-500 text-xl ${check || !modeEdit ? "" : "group-hover:block"} `}  onClick={()=>handleEdit(id,false)}></i>
                    <input type="checkbox" className="w-5 h-5 accent-purple-500  "  value={id}  checked={check} onChange={handleCheck} />
                </div>
                
            </li>

    )

}

export default List 