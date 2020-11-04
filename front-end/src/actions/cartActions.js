import Axios from "axios"
import { CARD_ADD_ITEM } from "../constants/cartConstant"

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const {data} = await Axios.get(`/api/product/${productId}`)
    dispatch({
        type: CARD_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            numStock: data.numStock,
            price: data.price,
            product: data.id,
            qty,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}