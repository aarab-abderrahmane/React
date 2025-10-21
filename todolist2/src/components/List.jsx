const List = ({id,content,modeEdit,check})=>{

    return (


            <li class="flex items-center justify-between bg-white/30 rounded-xl px-4 py-2 group">
            <input class="font-medium text-gray-800 bg-transparent" list_id={id} style={{state: modeEdit ? "normal" : "disabled"}} value={content}></input>
                <div className="flex items-center gap-5 ">
                    <i class="bi bi-pencil  cursor-pointer hidden group-hover:block"></i>
                    <input type="checkbox" class="w-5 h-5 accent-purple-500" list_id={id} checked={check} />
                </div>
                
            </li>

    )

}

export default List 