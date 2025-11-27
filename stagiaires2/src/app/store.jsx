import { configureStore } from "@reduxjs/toolkit";
import fromReducer from '../features/formSlice'
import stagiaireReducer  from '../features/stagiaireSlice'

export const store = configureStore({

    reducer : {
        fromReducer,
        stagiaireReducer,
        
    }


})