import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

// Load a list of products in data.js
const initialState = {};

// Adding reducers to store.js
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;