import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers'
import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { userRegisterReducer, userSignInReducer } from './reducers/userReducer'

const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        shippingaddrs: localStorage.getItem('shippingaddrs') ? JSON.parse(localStorage.getItem('shippingaddrs')) : {}
       },
    usersignin:{
        userInfo: localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')) : null
    }   
}

const reducer = combineReducers({ 
                    productList:  productListReducer, 
                    productDetails: productDetailsReducer,
                    cart: cartReducer,
                    usersignin: userSignInReducer,
                    userRegister: userRegisterReducer
                })

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store