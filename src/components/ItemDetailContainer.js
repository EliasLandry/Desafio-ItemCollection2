import React, {useState,useEffect} from 'react' 
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([])
    const { itemId } = useParams();

    useEffect(() => {
    
      const docRef= doc(db,'productos', itemId)
      getDoc(docRef)
      .then(doc => {
        setProductDetail({id:doc.id, ...doc.data()})
      })
  
    },[itemId])

  return (
    <div className= 'd-flex '>
      <ItemDetail productDetail = {productDetail}/>
    </div>
  )
}

export default ItemDetailContainer

