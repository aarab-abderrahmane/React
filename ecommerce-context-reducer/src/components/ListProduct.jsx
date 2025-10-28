import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { CartContext } from '../context/CartContext';

export default function ListProduct() {
  const { state } = useContext(CartContext);

  return (
    <div className="container">
      <div className="row g-3">
        {state.produits.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}