import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
    id : Date.now() , 
    text : "todo 1" , 
    status : {done : false}
    },
     {
    id : Date.now() +1 , 
    text : "todo 2" , 
    status : {done : false}
    },
     {
    id : Date.now() +2, 
    text : "todo 3" , 
    status : {done : true}
    },
     {
    id : Date.now() +3, 
    text : "todo 4" , 
    status : {done : false}
    }
]

export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        ADD_TODO : (state,action)=>{
            state.push(action.payload)
        },

        DELETE_TODO : (state,action) =>{
            const todoIndex = state.findIndex(td => td.id === action.payload.id)
            if(todoIndex=== -1) return ; 
            state.splice(todoIndex,1)
        }
    }
})

export const {ADD_TODO,DELETE_TODO} = counterSlice.actions
export default counterSlice.reducer