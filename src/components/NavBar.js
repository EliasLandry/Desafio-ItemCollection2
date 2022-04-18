import React from "react";
import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom'; 
import g4glogo from '../images/logoG4G.png'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function NavBar (){

  const { cartQuantity } = useContext(CartContext);

    return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to = '/'><img alt='logo' src={g4glogo} style={{maxWidth: 200 +'px'}}/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to = '/'>INICIO</Link>
          <Link className="nav-link" to = '/category/playstation4'>PLAYSTATION 4</Link>
          <Link className="nav-link" to = '/category/playstation5'>PLAYSTATION 5</Link>
          {
            cartQuantity() !== 0
            ? <CartWidget/>
            : console.log('no hay items en el carrito')
          }
        </div>
      </div>
    </div>

  </nav>)
}

export default NavBar; 
