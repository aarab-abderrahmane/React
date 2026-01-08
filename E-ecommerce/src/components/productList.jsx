import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ProductCard} from './productCard';
import { fetchProducts } from '../slices/ProductsSlice';
import { addToCart } from '../slices/cartSlice';

export const ProductsList = () => {
  const dispatch = useDispatch();
  const { filteredItems, loading } = useSelector(state => state.products);
  console.log("filtred Items",filteredItems)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="products-list">
      {filteredItems.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={handleAddToCart} 
        />
      ))}
    </div>
  );
};

