import React, { createContext, useReducer, useMemo } from 'react';

export const CartContext = createContext(null);

// Actions
export const ACTIONS = {
  ADDTOCART: 'ADDTOCART',
  REMOVEFROMCART: 'REMOVEFROMCART',
  MODIFYQTE: 'MODIFYQTE',
  CLEARCART: 'CLEARCART',
  GETTOTALAMOUNT: 'GETTOTALAMOUNT',
};

// Sample products
const sampleProducts = [
  { id: 1, title: 'Laptop Pro 14', price: 1599, image: 'https://picsum.photos/400/300/?1' },
  { id: 2, title: 'Noise Cancelling Headphones', price: 299, image: 'https://picsum.photos/400/300' },
  { id: 3, title: 'Smartphone X', price: 999, image: 'https://picsum.photos/400/300/?2' },
  { id: 4, title: 'Mechanical Keyboard', price: 129, image: 'https://picsum.photos/400/300/?3' },
];

//        _global State      :
export const initialState = {
  produits: sampleProducts,
    cart: [],
    totalAmount: 0,
};


// Reducer
export function CartReducer(state, action) {
  switch (action.type) {
    
    //ADD : 
    case ACTIONS.ADDTOCART: {
      const product = action.payload;
      const existing = state.cart.find((item) => item.id === product.id);
      const updatedCart = existing
        ? state.cart.map((item) =>
            item.id === product.id ? { ...item, qte: item.qte + 1 } : item
          )
        : [...state.cart, { ...product, qte: 1 }];

      return { ...state, cart: updatedCart };
    }

    //DELETE : 
    case ACTIONS.REMOVEFROMCART: {
      const id = action.payload;
      return { ...state, cart: state.cart.filter((item) => item.id !== id) };
    }

    //MODIFY quantity : 
    case ACTIONS.MODIFYQTE: {
      const { id, qte } = action.payload;
      if (qte <= 0) {
        return { ...state, cart: state.cart.filter((item) => item.id !== id) };
      }
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, qte } : item
        ),
      };
    }

    //CLEAR
    case ACTIONS.CLEARCART: {
      return { ...state, cart: [] };
    }


    case ACTIONS.GETTOTALAMOUNT: {

      const total = state.cart.reduce(
        (sum, item) => sum + item.price * item.qte,
        0
      );
      
      return { ...state, totalAmount: total };
    }

    default:
      return state;

  }


}

// Provider
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  
  const value = useMemo(() => {

      const total = state.cart.reduce(
        (sum, item) => sum + item.price * item.qte,
        0
      );

      if (total !== state.totalAmount) {
        
        setTimeout(() => dispatch({ type: ACTIONS.GETTOTALAMOUNT }), 0);
      }
      
      return { state, dispatch };

  }, [state, dispatch]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );

}