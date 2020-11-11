import React from 'react';

export default function ArtistsScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
  return (
    <div className="row center">
      <h1>Cart Screen</h1>
      <p>Add to cart : Product ID: {productId} Qty : {qty}</p>
    </div>  
  )
}