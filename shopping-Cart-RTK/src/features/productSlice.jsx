import { createSlice } from "@reduxjs/toolkit";





export const productSlice = createSlice({

        name : "product",
        initialState :[],
        reducers: {

            SET_PRODUCTS : (state,action)=>{


                return action.payload

            },

            ADD_To_CART : (state,action)=>{
                console.log("button clicked")
                return state.map(prod => prod.id === action.payload.id ? {...prod,added:true} : prod)

            },

            REMOVE_FROMECART : (state,action)=>{

                // const productIndex = state.findIndex(prod=>prod.id === action.payload.id)
                // state.slice(productIndex,1)
                return state.map(prod => prod.id === action.payload.id ? {...prod,added:false} : prod)

            },
            INCREMENT : (state,action)=>{

                return state.map(prod => prod.id === action.payload.id ? {...prod,quantity:prod.quantity+1} : prod)


            },
            DECREMENT : (state,action)=>{

                return state.map(prod => prod.id === action.payload.id ? {...prod,quantity:prod.quantity-1} : prod)


            }

        }


})

export const {ADD_To_CART,SET_PRODUCTS,REMOVE_FROMECART,INCREMENT,DECREMENT} = productSlice.actions
export default productSlice.reducer
