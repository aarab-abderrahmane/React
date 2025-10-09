import { useContext } from "react"
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
    const newsCheckbox = Object.fromEntries(
        Object.keys(sCheckbox).map(key => [key, isChecked])
    );
    setsCheckbox(newsCheckbox);
}

    return  {HandleDelete,HandleEdit,HandleCheck,CheckALL}


}

