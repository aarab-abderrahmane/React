import {createContext , useEffect , useState } from 'react'
import ListSTagiaire from './listStagiaire'



export const StagiairesContext = createContext([])

function Statgiaire(){

    const [stagiaires,setStagiaires] = useState([])
    
    useEffect(()=>{

        fetch('./Data.json')
            .then((response)=>response.json()) //parse
            .then((data)=>setStagiaires(data))
            .catch((error)=>console.error(error))

    },[])




    return (

        <StagiairesContext.Provider  value={{stagiaires,setStagiaires}}>
                    <ListSTagiaire />
        </StagiairesContext.Provider>

    )

}


export default Statgiaire ; 