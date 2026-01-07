import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ProductsList from './ProductList';
import productSlice from '../slices/productSlice';
import cartSlice from '../slices/cartSlice';

// Mock fetch
global.fetch = jest.fn();

const mockProducts = [
  {
    id: 1,
    title: 'Product 1',
    price: 99.99,
    category: "men's clothing",
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 2,
    title: 'Product 2',
    price: 149.99,
    category: "women's clothing",
    rating: { rate: 3.8, count: 80 }
  }
];

const createMockStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      products: productSlice.reducer,
      cart: cartSlice.reducer
    },
    preloadedState: initialState
  });
};

describe('ProductsList Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('displays loading state initially', () => {
    const store = createMockStore({
      products: {
        items: [],
        filteredItems: [],
        loading: true,
        error: null,
        filters: {
          category: 'all',
          priceRange: [0, 1000],
          color: 'all',
          brand: 'all'
        }
      },
      cart: { items: [] }
    });

    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('fetches products on mount', async () => {
    fetch.mockResolvedValueOnce({
      json: async () => mockProducts
    });

    const store = createMockStore();

    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
    });
  });

  test('displays products after successful fetch', async () => {
    const store = createMockStore({
      products: {
        items: mockProducts.map(p => ({
          ...p,
          image: `https://picsum.photos/200/300?random=${p.id}`,
          brand: 'Nike',
          color: 'Black'
        })),
        filteredItems: mockProducts.map(p => ({
          ...p,
          image: `https://picsum.photos/200/300?random=${p.id}`,
          brand: 'Nike',
          color: 'Black'
        })),
        loading: false,
        error: null,
        filters: {
          category: 'all',
          priceRange: [0, 1000],
          color: 'all',
          brand: 'all'
        }
      },
      cart: { items: [] }
    });

    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    expect(screen.getByText(/Product 1/)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/)).toBeInTheDocument();
  });

  test('renders correct number of product cards', () => {
    const store = createMockStore({
      products: {
        items: mockProducts.map(p => ({
          ...p,
          image: `https://picsum.photos/200/300?random=${p.id}`,
          brand: 'Nike',
          color: 'Black'
        })),
        filteredItems: mockProducts.map(p => ({
          ...p,
          image: `https://picsum.photos/200/300?random=${p.id}`,
          brand: 'Nike',
          color: 'Black'
        })),
        loading: false,
        error: null,
        filters: {
          category: 'all',
          priceRange: [0, 1000],
          color: 'all',
          brand: 'all'
        }
      },
      cart: { items: [] }
    });

    const { container } = render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    const productCards = container.querySelectorAll('.product-card');
    expect(productCards).toHaveLength(mockProducts.length);
  });

  test('displays filtered products correctly', () => {
    const filteredProduct = mockProducts[0];
    
    const store = createMockStore({
      products: {
        items: mockProducts.map(p => ({
          ...p,
          image: `https://picsum.photos/200/300?random=${p.id}`,
          brand: 'Nike',
          color: 'Black'
        })),
        filteredItems: [{
          ...filteredProduct,
          image: `https://picsum.photos/200/300?random=${filteredProduct.id}`,
          brand: 'Nike',
          color: 'Black'
        }],
        loading: false,
        error: null,
        filters: {
          category: "men's clothing",
          priceRange: [0, 1000],
          color: 'all',
          brand: 'all'
        }
      },
      cart: { items: [] }
    });

    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    expect(screen.getByText(/Product 1/)).toBeInTheDocument();
    expect(screen.queryByText(/Product 2/)).not.toBeInTheDocument();
  });

  test('handles empty products list', () => {
    const store = createMockStore({
      products: {
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
      cart: { items: [] }
    });

    const { container } = render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    const productCards = container.querySelectorAll('.product-card');
    expect(productCards).toHaveLength(0);
  });

  test('has correct CSS class for products list container', () => {
    const store = createMockStore({
      products: {
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
      cart: { items: [] }
    });

    const { container } = render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    const productsList = container.querySelector('.products-list');
    expect(productsList).toBeInTheDocument();
  });

  test('handles fetch error gracefully', async () => {
    fetch.mockRejectedValueOnce(new Error('API Error'));

    const store = createMockStore();

    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });

    // Component should still render without crashing
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
});