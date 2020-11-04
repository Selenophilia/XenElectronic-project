import Axios from "axios"
import { CARD_ADD_ITEM, CARD_REMOVE_ITEM } from "../constants/cartConstant"

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const {data} = await Axios.get(`/api/product/${productId}`)
    console.log(data)
    dispatch({
        type: CARD_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            numStock: data.numStock,
            price: data.price,
            product: data._id,
            qty,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeToCart = (productId) => async (dispatch, getState) => {
    dispatch({
        type: CARD_REMOVE_ITEM,
        payload: productId
      
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}