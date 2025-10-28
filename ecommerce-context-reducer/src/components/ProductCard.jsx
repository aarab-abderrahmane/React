import React, { useContext } from 'react';
import { CartContext, ACTIONS } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: ACTIONS.ADDTOCART, payload: product });
  };

  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text fw-bold mb-3">${product.price}</p>
        <button className="btn btn-primary mt-auto" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}