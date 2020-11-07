import React from 'react';
import data from './data.js';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/shop">Shop</a>
        </div>
        <div>
          <a href="/artists">Artists</a>
        </div>
        <div>
          <a href="/exhibitions">Exhibitions</a>
        </div>
        <div>
          <a href="/aboutus">About Us</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.products.map(product => (
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
            ))
          }
        </div>  
      </main>
      <footer className="row center">
        All rights reserved @2020
      </footer>
    </div>
  );
}

export default App;
