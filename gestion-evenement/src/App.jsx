import { useState , useEffect } from "react"
import Evenement from './components/Evenements'
import Formulaire from "./components/Formulaire"

function App() {

  const [experts,setexperts] = useState([])

  useEffect(()=>{

      fetch('./expertData.json')
        .then(res=>res.json())
        .then(data=>setexperts(data))
        .catch((error)=>console.log(error))

  },[])


  return (
    
    <div className="flex flex-col items-center gap-10 p-5">    
        <Formulaire/>
        {
          experts.map(ex=> <Evenement expert={ex} />)
        }
    </div>
  )
}

export default App
