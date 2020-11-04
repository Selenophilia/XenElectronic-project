import React from  'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userAction';

function Navbar(){
    const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.usersignin)
    const dispatch = useDispatch();
    const { cartItems } = cart
    const { userInfo }  = user
    
    const signoutHandler = () => {
            dispatch(signout())
    }
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
                {
                    userInfo ?  <div className='dropdown'>
                        <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i> </Link>
                        <ul className='dropdown-content'>
                            <Link to='/' onClick={signoutHandler}> Sign Out</Link>
                        </ul>
                    </div>: <Link to="/login">Sign In </Link>  
                }
            </div>
        </header>
    );
}

export default Navbar