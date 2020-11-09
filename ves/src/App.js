import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ShopScreen from './screens/ShopScreen';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import ArtistsScreen from './screens/ArtistsScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ExhibitionsScreen from './screens/ExhibitionsScreen';
import cartScreen from './screens/cartScreen';

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/artists" component={ArtistsScreen} exact></Route>
          <Route path="/exhibitions" component={ExhibitionsScreen} exact></Route>
          <Route path="/aboutus" component={AboutUsScreen} exact></Route>
          <Route path="/shop/product/:id" component={ProductScreen}></Route>
          <Route path="/shop" component={ShopScreen} exact></Route>
          <Route path="/cart/:id?" component={cartScreen}></Route>
        </main>
        <footer className="row center">
          All rights reserved @2020
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
