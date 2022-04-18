import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {

  const { cart, clearCart, removeItem, cartTotal} = useContext(CartContext);

  if (cart.length === 0) {
    return <div className="container my-5 d-flex justify-content-center flex-column align-items-center">
                <h2>Tu carrito está vacío</h2>
                <hr/>
                <h5>Vuelve al shop para comprar</h5>
                <Link to={"/"} className="btn btn-primary my-4" style={{backgroundColor:'#c000b0',borderColor:'#c000b0'}}>Volver</Link>
            </div>
  }

  return (
      <div className="container my-5">
          <h2>Tu compra</h2>
          <hr/>

          {
              cart.map((item) => (
                  <div key={item.id}>
                      <h4>{item.title}</h4>
                      <p>Cantidad: {item.count}</p>
                      <h5>Precio: ${item.price * item.count}</h5>
                      <button 
                          className="btn btn-danger"
                          onClick={() => removeItem(item.id)}
                      >
                          Eliminar Item
                      </button>
                      <hr/>
                  </div>
              ))
          }

          <h3>TOTAL: ${cartTotal()}</h3>
          <hr/>
          <button className="btn btn-danger" onClick={clearCart}>Vaciar carrito</button>
          <Link to="/checkout" className="btn btn-sucess mx-3">Terminar mi compra</Link>
      </div>
  )
}

export default Cart