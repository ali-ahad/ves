import data from './data';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';

// Load a list of products in data.js
const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;