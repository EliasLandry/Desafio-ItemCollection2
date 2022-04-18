import React from 'react'
import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { useState } from 'react'
import { db } from '../../firebase/config'
import { collection, addDoc, Timestamp, doc, getDoc, updateDoc} from 'firebase/firestore'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Checkout = () => {

    const{cart, cartTotal, clearCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues]= useState ({
      nombre:'',
      email:'',
      tel: ''
    })

    const handleInputChange= (e) => {
      setValues({
          ...values,
          [e.target.name]: e.target.value
      })
    }
   
    const handleSubmit = (e) => {
      e.preventDefault()


      const orden = {
        items: cart,
        total: cartTotal(),
        comprador: {...values},
        fyh: Timestamp.fromDate(new Date())
      }


      const ordersRef= collection(db, 'orders')

      cart.forEach((item)=> {
        const docRef= doc(db, 'productos', item.id)

        getDoc(docRef)
              .then((doc)=> {
                if(doc.data().stock >= item.count){
                  updateDoc(docRef, {
                    stock: doc.data().stock - item.count
                  })
                  addDoc(ordersRef, orden)
                  .then((doc) => {
                    setOrderId(doc.id)
                    clearCart()
                })

                } else {
                  alert('No hay stock');
                   //reemplazar por componente modal.
                }
              })
      })
  

    }
    if (orderId) {
      return (<div className="container my-5">
             <h2>Tu orden se registró exitosamente!</h2>
             <h4> Guarda tu número de orden: {orderId}</h4>
             <Link to="/" className="btn btn-primary">Volver al inicio</Link>
             </div>)
    }
    
    if (cart.length === 0){
        return <Navigate to='/'/>
    }

  return (
    <div className='container my-5'>
        <h2>Checkout</h2>
        <hr/>

        <form onSubmit={handleSubmit}>
          <input
              className="form-control my-2"
              type={'text'}
              placeholder= 'Tu nombre'
              value={values.nombre}
              name='nombre'
              onChange={handleInputChange}
              

          />
           <input
              className="form-control my-2"
              type={'email'}
              placeholder= 'Tu email'
              value={values.email}
              name='email'
              onChange={handleInputChange}
          />
          <input
              className="form-control my-2"
              type={'tel'}
              placeholder= 'Tu telefono'
              value={values.tel}
              name='tel'
              onChange={handleInputChange}
          />
         
          <button className="btn btn-primary" type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Checkout