import React, { useEffect } from 'react'
import { addToCart } from '../actions/cartActions';
import {  useDispatch } from 'react-redux';

function Cart(props){
    const getProductId = props.match.params.id;
    const getQty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();

    useEffect(() => {
        if(getProductId){
            dispatch(addToCart(getProductId, getQty))
        }

    }, [dispatch,getProductId, getQty])
    return(
        <div>
        <h1> Cart Compnent</h1>
          <p>product id:{ getProductId}</p>
          <p>getQty:{ getQty}</p>
        </div>
    );
}

export default Cart;