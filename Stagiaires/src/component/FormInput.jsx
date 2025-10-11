export default function Input({title,formStates,Fieldkey,updValue}){


    const targetState = formStates?.find(st=>st.Ftype===Fieldkey)

    return (
     <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-700 ">{title}</label>
        <input type="text"  value = {targetState?.value || ""}
        onChange={e=>updValue(e.target.value,Fieldkey)}
            className="bg-gray-800 border-3 border-green-500 text-white placeholder-white  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  " placeholder="error" />
        <p className="mt-2 text-sm text-red-600 "  style={{display:targetState?.error? "block" : "none" }}><span className="font-medium">Error!</span>{targetState?.error}</p>
    </div>

    )
    
}   