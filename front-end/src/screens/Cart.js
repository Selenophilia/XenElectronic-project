import React, { useEffect } from 'react'
import { addToCart } from '../actions/cartActions';
import {  useDispatch, useSelector } from 'react-redux';
import AlertMessages from '../components/AlertMessages';
import { Link } from 'react-router-dom'

function Cart(props){
    const getProductId = props.match.params.id;
    const getQty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(() => {
        if(getProductId){
            dispatch(addToCart(getProductId, getQty))
        }

    }, [dispatch,getProductId, getQty])
    const removeItemHandler = (itemId) => {

    }

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping')

    }
    return(
        <div className='row top'>
            <div className='col-2'> <h1> Shopping Cart</h1>
    {cartItems.length === 0 ? <AlertMessages> Shopping Cart Empty! <Link to='/'> Go To Shopping Page</Link></AlertMessages> 
    : (<ul>
        {cartItems.map((item) => ( 
                <li key={item.id}>
                    <div className='row'>
                        <div>
                             <img  src={item.image} alt={item.name} className='image__small'/>
                        </div>
                        <div className='cart-item'>
                            <Link to={`/product/${item.id}`}> {item.name}</Link>
                        </div>
                        <div>
                        <select className='qty'
                                value={item.qty}
                                onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                            >
                                 {
                                    [...Array(item.numStock).keys()].map((count) => (
                                    <option key={count + 1} value={count+1}> {count +1}</option>
                                        ))
                                }  
                            </select>
                        </div>
                        <div>
                            ${item.price}
                        </div>
                        <div>
                            <button className='btn-delete'
                                    onClick={() => removeItemHandler(item.product)}>
                                    <i class="fa fa-trash"></i></button>
                        </div>
                    </div>

                 </li>))}
            </ul>)}
            </div>
            <div className='col-1'>
                <div className='card card-body'>
                    <div>
                            <h2> Sub-total: ({cartItems.reduce((acc, curr) => acc + curr.qty, 0)}-item/s) :
                              ${cartItems.reduce((acc, curr) => acc + curr.price * curr.qty , 0)} </h2>
                    </div>
                    <div>
                        <button className={cartItems.length === 0 ? 'disabled' : 'primary'}
                                 onClick={checkoutHandler}> Proceed to Checkout</button>
                    </div>
                 </div>
            </div>
        </div>
    );
}

export default Cart;