import {store} from "./app/store"

import {Cart} from './components/cart'
import {Filters} from './components/Filters'
import {ProductsList} from "./components/productList"

import { Provider } from 'react-redux'

import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <header>
          <h1>ShoeStore</h1>
          <Cart />
        </header>
        
        <div className="main-content">
          <Filters />
          <ProductsList />
        </div>
      </div>

   
    </Provider>
  );
};

export default App;