import { useState ,createContext,useReducer} from 'react'
import ListEmp from './components/listEmp'

export const employeesContext = createContext("")

function App() {

    const [employees, setEmployees] = useState([
    {
      id: 1,
      nom: "Alice",
      image: "https://picsum.photos/200?random=1",
      salaire: 50000
    },
    {
      id: 2,
      nom: "Bob",
      image: "https://picsum.photos/200?random=2",
      salaire: 60000
    },
    {
      id: 3,
      nom: "Charlie",
      image: "https://picsum.photos/200?random=3",
      salaire: 55000
    },
    {
      id: 4,
      nom: "Diana",
      image: "https://picsum.photos/200?random=4",
      salaire: 62000
    }
  ])

  function reducer(state,action){

    switch (action.type){
        case 'editnom' : 
          return state.map(emp=>emp.id===action.payload.id ? {...emp,nom:action.payload.newValue} : emp )

        case 'editsalaire' : 
          return state.map(emp=>emp.id===action.payload.id ? {...emp,salaire: action.payload.newValue} : emp )

        default:
          return state
    }

  }

  const [state,dispatch] = useReducer(reducer,employees)  // employees = initialized value 
  

  const [inputState,setInputState] = useState({id:employees[0].id,activeInp:"nom",newValue:""})

  const saveChange = (e)=>{

      e.preventDefault()
      dispatch({type:`edit${inputState.activeInp}`,payload:inputState})
      setInputState({id:employees[0].id,activeInp:"nom",newValue:""})

  }


  function activeInp(e){

      setInputState({...inputState,activeInp:e.target.name,newValue:""})

  }

  function updateValue(e){
    setInputState({...inputState,newValue:e.target.value})
  }


  return (
    <>
      <employeesContext.Provider  value={{employees}}>

          <ListEmp/>

          <div  className='bg-blue-200 w-[50vw] flex items-center justify-center'>

            <form className='flex flex-col items-start gap-5 '>

              <fieldset className='border-black border-2 w-full p-2  '  >
                <legend>select target employee :</legend>
                    <select  className='bg-white w-[100%]' onChange={(e)=>setInputState({...inputState,id:Number(e.target.value)} )}>
                      {employees.map(emp=><option value={emp.id}>{emp.id}</option>)}
                    </select>
              </fieldset>


              <div className='flex gap-3 flex-row-reverse'>
                
                <div>
                  <label>nom : </label>
                  <input type='text' className='bg-white  disabled:bg-transparent' name="nom" disabled={inputState.activeInp==="nom" ? false : true} value={inputState.activeInp==="nom" ? inputState.newValue : ""} onChange={updateValue}></input>
                </div>
                <input type='radio'  name="nom" checked={inputState.activeInp==="nom" ? true : false} onClick={activeInp}></input>
              </div>


              <div className='flex gap-3 flex-row-reverse'>
                
                <div>
                  <label>salaire : </label>
                  <input type='text' className='bg-white  disabled:bg-transparent' name="salaire" disabled={inputState.activeInp==="salaire" ? false : true} value={inputState.activeInp==="salaire" ? inputState.newValue : ""} onChange={updateValue}></input>
                </div>
                <input type='radio' name="salaire" checked={inputState.activeInp==="salaire" ? true : false}  onClick={activeInp}></input>
              </div>


              <button className='mt-3 bg-black text-white p-2 cursor-pointer  w-[100%]'  onClick={saveChange}>Save change</button>
            </form>
          </div>
      </employeesContext.Provider>

    </>
  )
}

export default App
