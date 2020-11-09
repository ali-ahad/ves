import React from 'react';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <a href={`shop/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name}/>
      </a>
      <div className="card-body">
        <a href={`shop/product/${product._id}`}>
          <h1>{product.name}</h1>
        </a>
        <div className="artist">
          <h2>{product.artist}</h2>
        </div>
        <div className="price">${product.price}</div>
      </div>
    </div>
  )
}