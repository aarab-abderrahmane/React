import React from 'react';
import Navbar from './components/Navbar';
import ListProduct from './components/ListProduct';
import Cart from './components/Cart';
import { BrowserRouter , Routes , Route  } from 'react-router';

export default function App() {
  return (
    <>
      <BrowserRouter>



        <Navbar/>
        <Routes>

              <Route  element={<ListProduct />} path='/ListProduct' ></Route>
              <Route  element={<Cart />} path='/Cart' ></Route>


        </Routes>


      </BrowserRouter>

    </>
  );
}