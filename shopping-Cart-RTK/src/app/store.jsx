import { configureStore } from "@reduxjs/toolkit";

import ProductsSlice from "../features/productSlice"

export const store = configureStore({

    reducer : {ProductsSlice}

})