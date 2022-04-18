import React from "react";
import { Link } from 'react-router-dom'



function Item({id, title, price, pictureURL}){
return(
            <div className="card" style={{width: 18+'rem'}}>
                <img src={require("../images/items/" + pictureURL)} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">${price}</p>
                    <Link to={`/item/${id}`}><button type="button" className="btn btn-primary">VER MAS</button></Link>
                </div>
            </div>
        )
}




export default Item 

