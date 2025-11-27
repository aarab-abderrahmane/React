import {UPDATE_INPUT_VALUE} from "../features/formSlice";
import { useSelector , useDispatch } from "react-redux";
import { useEffect , useState } from "react";
import styled from "styled-components"


import {v4 as UUIDv4} from 'uuid'

export const Form = ()=>{

    const dispatch = useDispatch()

    const {fromReducer,stagiaireReducer} = useSelector(state=>state)
    const stagiaiesStates = stagiaireReducer
    const formStates = fromReducer

    //genrate unique key with uuid version 4
    const [stagiaireId , setStagiaireId] = useState("")
    useEffect(()=>{
            const Gen_stagiaireId = UUIDv4();
            setStagiaireId(Gen_stagiaireId)
    },[stagiaiesStates])


    console.log(formStates)

    const InputType = {
        id : "ID" , 
        mat : "MATRICULE" , 
        nom : "NOM", 
        ville : "VILLE" , 
        moy : "MOYENNE",
        code : "CODEPOSTAL"
    }

    const GetValue = (type)=>{
        const targetInput = formStates.find(input=>input.type===type)
        if(targetInput){

            return targetInput.value
        }
    }

    const handleChange = (e)=>{
            const inputType = InputType[e.target.name]
            const inputValue = e.target.value 
            dispatch(UPDATE_INPUT_VALUE({type:inputType , value : inputValue}))
    }

    return(

        <from className="flex flex-col max-w-2xl  ">

            <label>id</label>

            <Input
             type="text" 
             name="id"
             value = {stagiaireId}
             disabled
             />

            <label>Matricule</label>
            <Input
             type="text" required 
             name="mat"
             value={GetValue(InputType.mat)}
             onChange={handleChange}
             />
             
            <label>Nom</label>
            <Input 
            type="text" required
            name = "nom"
            value={GetValue(InputType.nom)}
            onChange={handleChange}
            />

            <label>ville</label>
            <Input 
            type="text" required
            name = "ville"
            value={GetValue(InputType.ville)}
            onChange={handleChange}
            ></Input>
           
            <label>codePostal</label>
            <Input type="text" required
            name="code"
            value={GetValue(InputType.code)}
            onChange={handleChange}
            />

            <label>Moyenne</label>
            <Input type="number" step={0.01} required
            name="moy"
            value={GetValue(InputType.moy)}
            onChange={handleChange}
            />

        </from>
    )


}


const Input = styled.input`

    border : 1px solid black; 


`