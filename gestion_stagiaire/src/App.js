import { useEffect ,useState } from "react";
import {ListeStagiaire} from "./components/ListeStagiaire"

import {AjouterStagiaire} from './components/ajouterStagiaire'
import {SupStagiaire} from './components/supStagiaire'

function App() {
  const [error , setError] = useState(false)

  const [stagaireData , setStagiaireData] = useState([])

  const [lastIndex , setLastIndex] = useState(0)

  useEffect(()=>{

   async function fetchDataStg(){

        try{

          const response = await fetch('./stagiaire_data.json')
          const data = await response.json()
          const newData = data.map((stg,index)=>({...stg , id:index}))
          setStagiaireData(newData)
          setLastIndex(newData.length)


        }catch(err){

          console.error(err)
          setError(true)

        }

   }

   fetchDataStg()



  },[])

  const handleDelete = (id)=>{

        setStagiaireData(prev=>prev.filter(stg=>stg.id!==id))

  }


  const updateStagiaireData = (formFileds)=>{
        setLastIndex(i=>i+1)
        const {nom , prenom , filiere , ville , image } = formFileds
        setStagiaireData(prev=>(
          [
            ...prev , 
            {
              nom  : nom , 
              prenom : prenom , 
              Fil : filiere, 
              photo : image , 
              Ville : ville,
              id : lastIndex
            }
          ]
        ))
  }

  return (
    <div className="App ">
      <AjouterStagiaire  updateStagiaireData={updateStagiaireData}/>
      <SupStagiaire  stagiaireData={stagaireData} handleDelete={handleDelete}/>
      {
        error ||! stagaireData ||  stagaireData.length ===0 
        ?  <p>error</p>
        : <ListeStagiaire data={stagaireData} />
      }
        
    </div>
  );
}

export default App;

