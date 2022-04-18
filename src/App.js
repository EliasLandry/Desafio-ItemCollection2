import logo from './logo.svg';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { CartContext } from './context/CartContext'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'
import Checkout from './components/Checkout/Checkout.js'

function App(){


  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= '/' element={<ItemListContainer/>}/>
          <Route path= '/cart' element={<Cart/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
