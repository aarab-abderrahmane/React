import React from 'react';
import Navbar from './components/Navbar';
import ListProduct from './components/ListProduct';
import Cart from './components/Cart';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-7">
            <ListProduct />
          </div>
          <div className="col-12 col-lg-5">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}