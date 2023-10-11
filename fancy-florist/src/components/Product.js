import React from 'react'
import './Product.css'

export default function Product(props) {
  const {name, description, price, sale, url} = props;

  return (
    <div className="product-card">
        <img src={url}/>
        <h2>{name}</h2>
        <p>{description}</p>
        ${price} {sale ? <span className="sale">on sale!</span> : ""} <br /><br />
        <button className="buy-now">Buy Now</button>
    </div>
  )
}
