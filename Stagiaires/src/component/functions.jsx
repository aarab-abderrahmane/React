import { useContext ,useEffect} from "react"
import {StagiaireContext} from '../App'



export default function  useStagiaireActions(){

    const {statgiaires,setStagiaires,sCheckbox,setsCheckbox} = useContext(StagiaireContext)


    function HandleEdit(id){

        console.log("edit")
    }

    function  HandleDelete(id){

            const newStagiaires = statgiaires.filter(s=>s.id !== id)
            setStagiaires(newStagiaires)
            
    }

    function HandleCheck(id){

            setsCheckbox(prev=>({
                ...prev , [id] : !prev[id]
            }))


    }

    function CheckALL(isChecked) {
        console.log(isChecked)
    const newsCheckbox = Object.fromEntries(
        Object.keys(sCheckbox).map(key => [key, isChecked])
    );
    setsCheckbox(newsCheckbox);
    }


    function DeleteSelected(){

        const newStagiares = statgiaires.filter(s=>!sCheckbox[s.id])
        setStagiaires(newStagiares)


    }


    

    return  {HandleDelete,HandleEdit,HandleCheck,CheckALL,DeleteSelected}


}

