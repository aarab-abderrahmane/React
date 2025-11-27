import { createSlice } from "@reduxjs/toolkit";


export const stagiaireSlice = createSlice({

    name : "stagiaire",
    initialState : [
        {
            id : 2124, 
            matricule : "zada65",
            nom : "abdu" , 
            ville : "agadir",
            codePostal : "8000",
            moyenne : "17"
        }
    ],
    reducers : {

        GETSTATES : (state)=>{
            
            return state 
        
        }   
    }



})

export const {GETSTATES} = stagiaireSlice.actions ; 
// export default stagiaireSlice.reducer
const {reducer} = stagiaireSlice // destructuring 
export default reducer

