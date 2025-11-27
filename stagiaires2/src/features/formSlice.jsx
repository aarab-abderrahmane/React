import { createSlice } from "@reduxjs/toolkit";

const InputType = {
    id : "ID" , 
    mat : "MATRICULE" , 
    nom : "NOM", 
    ville : "VILLE" , 
    moy : "MOYENNE",
    code : "CODEPOSTAL"
}

const InputPattern = {

    nom : /^[A-Za-z\s]{2,10}$/,
    ville : /^[A-Za-z\s]{2,10}$/,
    moy : /^(?:[0-9]|1[0-9]|20)(?:\.\d+)$/
}

const initialState = Object.keys(InputType).map(key=>({
    type  : InputType[key] , 
    value : "" ,
    errorMes : "" 
}))

function checkContent(type , value){

    const typeName = InputType[type]
    if(typeName ){

        return ( typeName==="NOM" || typeName==="VILLE")  && InputPattern[type].test(value)
        ? true
        :false


    }
}

const formSlice = createSlice({

    name : "input", 
    initialState , 
    reducers : {
        
        UPDATE_INPUT_VALUE : (state,action)=>{

                const {type,value} = action.payload; 
                const  inputToUpdate = state.find(input => input.type === type)
                if(inputToUpdate){

                    
                    inputToUpdate.value = value 
                }    
        }
    }


})



export const {UPDATE_INPUT_VALUE} = formSlice.actions ; 
export default formSlice.reducer;