import { createSlice } from "@reduxjs/toolkit";



const CounterSlice = createSlice({

    name : "counter",
    initialState : {
        count_nb : 0,
        basedValue : 1 
    },
    reducers : {


        increment(state){
            state.count_nb+=state.basedValue
        },
        decrement(state){
            state.count_nb -=state.basedValue
        },
        restart(state){
            state.count_nb = 0
        },
        editBasedValue(state,action){
            state.basedValue = action.payload.newValue
        }

    }
})


export const {increment,decrement,restart,editBasedValue} = CounterSlice.actions
export default CounterSlice.reducer     
               