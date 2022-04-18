import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart( [...cart, item] )
    }
  
    const isInCart = (id) =>{
       return cart.some(prod => prod.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.count, 0)
    }
  
    const clearCart = () => {
        setCart([])
    }
  
    const removeItem = (id) => {
        setCart( cart.filter((prod) => prod.id !== id) )
    }

    const cartTotal = () =>{
        return cart.reduce((acc,prod) => acc += prod.price * prod.count,0)
    }
  

      return(
        <CartContext.Provider value={{
          cart,
          addItem,
          isInCart,
          cartQuantity,
          clearCart,
          removeItem,
          cartTotal
          }}>
               {children} 
        </CartContext.Provider>
        )
}