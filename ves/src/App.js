import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ShopScreen from './screens/ShopScreen';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import ArtistsScreen from './screens/ArtistsScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ExhibitionsScreen from './screens/ExhibitionsScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';

function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/shop">Shop</Link>
          </div>
          <div>
            <Link to="/artists">Artists</Link>
          </div>
          <div>
            <Link to="/exhibitions">Exhibitions</Link>
          </div>
          <div>
            <Link to="/aboutus">About Us</Link>
          </div>
          <div>
            <Link to="/cart">Cart
            {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
            )} 
            </Link>
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/artists" component={ArtistsScreen} exact></Route>
          <Route path="/exhibitions" component={ExhibitionsScreen} exact></Route>
          <Route path="/aboutus" component={AboutUsScreen} exact></Route>
          <Route path="/shop/product/:id" component={ProductScreen}></Route>
          <Route path="/shop" component={ShopScreen} exact></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
        </main>
        <footer className="row center">
          All rights reserved @2020
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
