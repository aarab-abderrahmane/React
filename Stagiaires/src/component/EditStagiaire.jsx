import {useParams} from 'react-router'
import {useContext,useState,useEffect} from 'react'
import Error  from './Error'
import {StagiaireContext} from '../App'
import FormInput from './FormInput'

export default function EditStagiaire(){

    const [formStates, setFormStates] = useState([])
    const {stagiaires} = useContext(StagiaireContext)
    const {id} = useParams()


    useEffect(()=>{

        if(!stagiaires ||  stagiaires.length === 0) return     

            const target = stagiaires.find(s => s.id === parseInt(id))

            if(target){

            setFormStates([
            {
                Ftype: "nom",
                error: "",
                value: target.nom || "",
            },
            {
                Ftype: "matricule",
                error: "",
                value: target.matricule || "",
            },
            {
                Ftype: "codepostal",
                error: "",
                value: target.codepostal || "",
            },
            {
                Ftype: "ville",
                error: "",
                value: target.ville || "",
            },
            {
                Ftype: "moyenne",
                error: "",
                value: target.moyenne || "",
            },
                ]);

            }
        


    },[id,stagiaires])


    
    const isExists = stagiaires.find(s=>s.id === parseInt(id))
    
    if(isNaN(id) || typeof id === "boolean" || typeof isExists == "undefined" ){
        
        return (
            <Error/>    
        )
        
    }


    function CheckFields(){
        

        setFormStates(prev=>
            prev.map(st=>{

            if(st.Ftype==="nom" &&  st.value.trim().length === 0 ){   

                return {...st,error:"PLease entre a string "}
            }

            return {...st,error:""}

        })
        )

    }


    function updValue(newValue,FieldType){

        setFormStates(prev=>
            prev.map(st=>
                st.Ftype===FieldType
                ? {...st,value:newValue}
                : st
            )
        )

        CheckFields()


        
    }






    return (
        <div className="flex-1 bg-blue-100 flex flex-col items-center p-6  max-h-screen overflow-y-scroll ">
                <h1 className='pt-[10vh] font-bold text-xl'>Edit Stagiaire : </h1>

                <form className="max-w-lg w-[70vw] mt-6  mb-[10vh]">
                <FormInput title={"Nom"} formStates={formStates} Fieldkey={"nom"}  updValue={updValue}    />
                <FormInput title={"Matricule"} formStates={formStates} Fieldkey={"matricule"}  updValue={updValue}    />
                <FormInput title={"Code Postal"} formStates={formStates} Fieldkey={"codepostal"}  updValue={updValue}    />
                <FormInput title={"Ville"} formStates={formStates} Fieldkey={"ville"}  updValue={updValue}    />
                <FormInput title={"Moyenne"} formStates={formStates} Fieldkey={"moyenne"}  updValue={updValue}    />


                </form>

        </div>
    )


}