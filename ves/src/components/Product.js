import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`shop/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name}/>
      </Link>
      <div className="card-body">
        <Link to={`shop/product/${product._id}`}>
          <h1>{product.name}</h1>
        </Link>
        <div className="artist">
          <h2>{product.artist}</h2>
        </div>
        <div className="price">${product.price}</div>
      </div>
    </div>
  )
}