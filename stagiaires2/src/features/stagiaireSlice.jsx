import { createSlice } from "@reduxjs/toolkit";


export const stagiaireSlice = createSlice({

    name : "stagiaire",
    initialState : [
        {
            id : "9237cd90-27e6-4aad-a1bb-efd27d779216", 
            matricule : "zada65",
            nom : "abderrahmane" , 
            ville : "agadir",
            codePostal : "8000",
            moyenne : "17"
        }
    ],
    reducers : {

        ADD_STGIAIRE : (state,action)=>{

            state.push(action.payload)

        } ,
        DELETE_STAGIAIRE : (state,action)=>{
            const stagiaireIndex = state.findIndex(stg=>stg.id===action.payload.id)
            state.splice(stagiaireIndex,1)
        }
    }



})

export const {ADD_STGIAIRE,DELETE_STAGIAIRE} = stagiaireSlice.actions ; 
// export default stagiaireSlice.reducer
const {reducer} = stagiaireSlice // destructuring 
export default reducer

