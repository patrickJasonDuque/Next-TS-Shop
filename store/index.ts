import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user/userReducer';
import cart from './cart/cartReducer';

const reducer = combineReducers({ user, cart });

const server = typeof window === 'undefined';

let userFromStorage = null;
let cartFromStorage = null;
let localUser = null;
if (!server) {
  userFromStorage = JSON.parse(localStorage.getItem('user'));
  cartFromStorage = JSON.parse(localStorage.getItem('cart'));
  localUser = (userFromStorage || cartFromStorage) && { ...userFromStorage, cart: cartFromStorage };
}

const initialState = {
  user: { user: localUser, loading: false }
};

const middleware = [ thunk ];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export type RootStore = ReturnType<typeof reducer>;

export default store;
