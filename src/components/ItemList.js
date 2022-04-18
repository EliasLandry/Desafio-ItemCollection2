import React from "react";
import Item from './Item';

const ulStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginTop: '50px',
    flexWrap: 'wrap'
}

const itemStyle = {
    listStyleType:'none',
    margin:'0 25px',
    marginBottom: '20px',
}

function ItemList ({Items}) {
    return (<ul style={ulStyle}>{Items.map(j => <li key={j.id} style={itemStyle}><Item id={j.id} title={j.title} price={j.price} pictureURL={j.pictureURL}/></li>)}</ul>)
}




export default ItemList 