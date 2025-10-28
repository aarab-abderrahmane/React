import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
  const { state } = useContext(CartContext);
  const count = state.cart.reduce((n, item) => n + item.qte, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="#">E-Commerce</a>
        <div className="ms-auto">
          <span className="badge text-bg-light">
            Panier: {count} article{count > 1 ? 's' : ''}
          </span>
        </div>
      </div>
    </nav>
  );
}