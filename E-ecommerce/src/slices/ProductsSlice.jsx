import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data.map(item => ({
      ...item,
      image: `https://picsum.photos/200/300?random=${item.id}`,
      color: ['Black', 'Blue', 'Red', 'Green', 'White'][Math.floor(Math.random() * 5)],
      brand: ['Nike', 'Adidas', 'Puma', 'Vans'][Math.floor(Math.random() * 4)]
    }));
  }
);

// Helper function to apply all filters
const applyFilters = (state) => {
  state.filteredItems = state.items.filter(item => {
    const categoryMatch = 
      state.filters.category === 'all' || 
      item.category === state.filters.category;
    
    const priceMatch = 
      item.price >= state.filters.priceRange[0] && 
      item.price <= state.filters.priceRange[1];
    
    const colorMatch = 
      state.filters.color === 'all' || 
      item.color === state.filters.color;
    
    const brandMatch = 
      state.filters.brand === 'all' || 
      item.brand === state.filters.brand;
    
    return categoryMatch && priceMatch && colorMatch && brandMatch;
  });
};

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    filteredItems: [],
    loading: false,
    error: null,
    filters: {
      category: 'all',
      priceRange: [0, 1000],
      color: 'all',
      brand: 'all'
    }
  },
  reducers: {

    // Filter actions
    filterByCategory: (state, action) => {
      state.filters.category = action.payload;
      applyFilters(state);
    },
    filterByPrice: (state, action) => {
      state.filters.priceRange = action.payload;
      applyFilters(state);
    },
    filterByColor: (state, action) => {
      state.filters.color = action.payload;
      applyFilters(state);
    },
    filterByBrand: (state, action) => {
      state.filters.brand = action.payload;
      applyFilters(state);
    },
    
    // Reset all filters
    resetFilters: (state) => {
      state.filters = {
        category: 'all',
        priceRange: [0, 1000],
        color: 'all',
        brand: 'all'
      };
      state.filteredItems = state.items;
    },
    
    // Modify rating action
    modifyRating: (state, action) => {
      const { id, rating } = action.payload;
      const item = state.items.find(p => p.id === id);
      if (item) {
        item.rating.rate = rating;
      }
      const filteredItem = state.filteredItems.find(p => p.id === id);
      if (filteredItem) {
        filteredItem.rating.rate = rating;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        applyFilters(state);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const {
  filterByCategory,
  filterByPrice,
  filterByColor,
  filterByBrand,
  resetFilters,
  modifyRating
} = productSlice.actions;

export default productSlice.reducer;

// Selectors
export const selectAllProducts = (state) => state.products.items;
export const selectFilteredProducts = (state) => state.products.filteredItems;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;
export const selectFilters = (state) => state.products.filters;