import { useState , useEffect } from "react"
import Evenement from './components/Evenements'
import Formulaire from "./components/Formulaire"
import { BrowserRouter,Routes,Route,Link } from "react-router"

function App() {

  const [experts,setexperts] = useState([])

  useEffect(()=>{

      fetch('./expertData.json')
        .then(res=>res.json())
        .then(data=>setexperts(data))
        .catch((error)=>console.log(error))

  },[])


  return (
    


    <BrowserRouter>
        <h1 className="font-bold ms-5 my-5">Gestion des événements :</h1>
        <Link to="/Evenements" >
            <button className="bg-black text-white p-2 mx-4 ">Evenement page</button>
        </Link>
        <Link to="/Formulaire" >
            <button className="bg-black text-white p-2">Formulaire page</button>
        </Link>
        <Routes>
          <Route path="/Evenements" element={
                <div className="flex flex-col items-center gap-10 p-5">    
                    {
                      experts.map(ex=> <Evenement expert={ex} />)
                    }
                </div>
          } />

          <Route path="/Formulaire" element={<Formulaire />} />
          
        </Routes>

  

    </BrowserRouter>
  )
}

export default App
