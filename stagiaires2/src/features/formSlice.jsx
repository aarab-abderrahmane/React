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

    NOM : /^[A-Za-z\s]{2,10}$/,
    VILLE : /^[A-Za-z\s]{2,10}$/,
    MOYENNE : /^(?:[0-9]|1[0-9]|20)(?:\.\d+)?$/
}

const initialState = Object.keys(InputType).map(key=>({
    type  : InputType[key] , 
    value : "" ,
    errorMes : "" 
}))

function checkContent(type , value){
    console.log(type,value)
    if(type ){
        if (( type==="NOM" || type==="VILLE")  && InputPattern[type].test(value)) return true
        if (type==="MOYENNE" && InputPattern.MOYENNE.test(Number(value))) return true;

        return type==="CODEPOSTAL" || type==="ID" || type=== "MATRICULE"
        ? true : false

    }

    return false
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
                    checkContent(type,value) 
                    ? inputToUpdate.errorMes = ""
                    : inputToUpdate.errorMes = "error"
                }    
        }
    }


})



export const {UPDATE_INPUT_VALUE} = formSlice.actions ; 
export default formSlice.reducer;