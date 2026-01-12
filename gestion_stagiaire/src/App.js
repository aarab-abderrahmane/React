import { use, useEffect ,useState } from "react";
import {ListeStagiaire} from "./components/ListeStagiaire"

import {AjouterStagiaire} from './components/ajouterStagiaire'
import {SupStagiaire} from './components/supStagiaire'

import { useSelector ,useDispatch} from "react-redux";

import{fetchStagiaires , deleteStagiaire} from './slices/stagiaireSlice'



function App() {


    const dispatch = useDispatch()

    useEffect(()=>{
       
        dispatch(fetchStagiaires())
    },[dispatch])


    const {filtredStagiaire,error,stagiaires} = useSelector(state => state.stagiaire)

    console.log(stagiaires)

  return (

    <div className="App ">
      {/* <AjouterStagiaire  updateStagiaireData={updateStagiaireData}/> */}
      <SupStagiaire  stagiaireData={stagiaires} handleDelete={(id)=> dispatch(deleteStagiaire(id))}/>
      {
        error || !stagiaires ||  stagiaires.length ===0 
        ?  <p>error</p>
        : <ListeStagiaire data={filtredStagiaire} />
      }
        
    </div>

  );
}

export default App;

