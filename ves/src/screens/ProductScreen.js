import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data.js';

export default function ProductScreen(props) {
  const product = data.products.find(x => x._id === props.match.params.id);
  if (!product) {
    return  (<div>Product Not Found</div>);
  }
  return (
    <div>
      <Link to="/shop" >Back to shop</Link>
      <div className="row top">
        <div className="col-2">
          <img src={product.image} alt={product.name}></img>
        </div>
        <div className="col-2">
          <ul>
            <li><h1>{product.name}</h1></li>
            <li><h2>{product.artist}</h2></li>
            <li>{product.category}</li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}