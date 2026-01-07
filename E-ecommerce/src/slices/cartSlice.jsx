import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    // Add product to cart
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // If item already exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // Add new item with quantity 1
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },
    
    // Remove product from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    
    // Modify quantity of a product
    modifyQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        // Ensure quantity is at least 1
        item.quantity = Math.max(1, quantity);
      }
    },
    
    // Increase quantity by 1
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    
    // Decrease quantity by 1 (minimum 1)
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    
    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
    },
    
    // Update multiple items at once
    updateCart: (state, action) => {
      state.items = action.payload;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  modifyQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  updateCart
} = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state) => state.cart.items;

export const selectCartTotal = (state) => {
  return state.cart.items.reduce(
    (total, item) => total + (item.price * item.quantity), 
    0
  );
};

export const selectCartItemCount = (state) => {
  return state.cart.items.reduce(
    (count, item) => count + item.quantity, 
    0
  );
};

export const selectCartItemById = (id) => (state) => {
  return state.cart.items.find(item => item.id === id);
};