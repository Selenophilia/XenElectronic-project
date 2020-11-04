import React from  'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Navbar(){
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    return(
        <header className="row">
            <div>
                <Link to="/"> XenElectronic </Link>
            </div>
            
            <div>
                <Link to='/cart'> <span className="icon">
                    <i className="fa fa-shopping-cart"></i>
                    {
                    cartItems.length > 0  
                    ?  <span className='badge'>{cartItems.length}</span> 
                    : null
                }
                    </span>
               
                </Link>
                <Link to="/login">Sign In </Link>  
            </div>
        </header>
    );
}

export default Navbar