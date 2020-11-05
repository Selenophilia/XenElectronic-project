import React from 'react'
import { useSelector } from 'react-redux';
import Checkout from '../components/Checkout'
import { Link } from 'react-router-dom'

function Receipt(props){
 
    const {shippingaddress, paymentMethod, cartItems} = useSelector( (state) => state.cart)
    const checkoutHandler = () =>{

    }

    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty , 0)
    const Tax = totalPrice * 0.13
    const items = cartItems.reduce((acc, curr) => acc + curr.qty, 0)
    if(!paymentMethod){
        props.history.push('/payment')
    }
    return(
        <div >
            <Checkout step1 step2 step3 step4></Checkout>
            <div className='row top'>
                    <div className='col-2'>
                        <ul>
                            <li>
                                <div className='card card-body'>
                                    <h1>Shipping Details</h1>
                                          <p> Name: {shippingaddress.name}</p> <br/>
                                          <p> Address: {shippingaddress.address},{shippingaddress.city},{shippingaddress.postalcode}, {shippingaddress.country}
                                        </p>
                                </div> 
                                <div className='card card-body'>
                                    <h1>Payment Method</h1>
                                          <p> Method: {paymentMethod}
                                        </p>
                                </div> 
                                <div className='card card-body'>
                                    <h1>Items: </h1>
                                        
                                <ul>
                                {cartItems.map((item) => ( 
                                        <li key={item.product}>
                                        <div className='row'>
                                            <div>
                                                <img  src={item.image} alt={item.name} className='image__small'/>
                                            </div>
                                            <div className='cart-item'>
                                                <Link to={`/product/${item.product}`}> {item.name}</Link>
                                            </div>
                                            <div>
                                                Qty: {item.qty}
                                            </div>
                                            <div>
                                                ${item.price}
                                            </div>
                                        
                                        </div>

                                    </li>))}
                                </ul>
                                </div> 
                            </li>
                        </ul>
                    </div>
                    <div className='col-1'> 
                     <ul>
                     <div className='card card-body'>
                         <li>
                           <h1> Order Summary:</h1>
                         </li>
                         <li>
                             <div className='row'>
                                <div> <h1>Total:</h1> </div>    
                                <div>${totalPrice}</div>   
                            </div>
                         </li>
                        
                         <li>
                             <div className='row'>
                                <div> <h1>Tax:</h1> </div>    
                                <div>${Tax} </div>   
                            </div>
                         </li>
                         <li>
                             <div className='row'>
                                <div> <h1>Number of items:</h1> </div>    
                                <div>{items} item/s</div>   
                            </div>
                         </li>


                         <button className='primary'
                                 onClick={checkoutHandler} >Buy</button>
                         </div>
                         <div>

                        </div>
                     </ul>
                    </div>
            </div>

           
        </div>
    );
}

export default Receipt