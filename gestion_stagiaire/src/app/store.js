import { configureStore } from "@reduxjs/toolkit";
import stagiaireReducer from '../slices/stagiaireSlice'


export const store = configureStore({
    reducer  : {
        stagiaire  : stagiaireReducer
    }
})