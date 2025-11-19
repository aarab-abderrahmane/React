import { createSlice } from "@reduxjs/toolkit";



const CounterSlice = createSlice({

    name : "counter",
    initialState : {
        count_nb : 0 
    },
    reducers : {


        increment(state){
            state.count_nb+=1
        },
        decrement(state){
            state.count_nb -=1
        },
        restart(state){
            state.count_nb = 0
        }

    }
})


export const {increment,decrement,restart} = CounterSlice.actions
export default CounterSlice.reducer     
               