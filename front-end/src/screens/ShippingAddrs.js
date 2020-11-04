import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { saveshippingaddress } from '../actions/cartActions'
import Checkout from '../components/Checkout'

function ShippingAddrs(props){
    const user = useSelector(state => state.usersignin)
    const { userInfo }  = user
    const cart = useSelector(state => state.cart)
   
    const {shippingaddrs} = cart
    const [name, setName] = useState(shippingaddrs.name)
    const [address, setAddress] = useState(shippingaddrs.address)
    const [city, setCity] = useState(shippingaddrs.city)
    const [postalcode, setPostalCode] = useState(shippingaddrs.postalcode)
    const [country, setCountry] = useState(shippingaddrs.country)
    const dispatch = useDispatch();

    if(!userInfo) {
        props.history.push('/login')
    }

    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const addrsHandler = (e) => {
        setAddress(e.target.value)
    }
    const cityHandler = (e) => {
        setCity(e.target.value)
    }

    const submitHandler = (e) => {
           e.preventDefault()
           dispatch(saveshippingaddress({name, address, country, postalcode, city}))
           props.history.push('/payment')
    }

    const postalCodeHandler = (e) => {
        setPostalCode(e.target.value)
    }

    const countryHandler = (e) => {
        setCountry(e.target.value)
    }
    return(
        <div >
            <Checkout step1 step2></Checkout>
            <form className="form" onSubmit={submitHandler}>
                <div> <h1> Shipping Address</h1></div>
             
                <div> <label htmlFor="name"> Full Name</label>
                    <input type="text" 
                           id="name"
                           placeholder="Enter your name..."
                           value={name}
                           onChange={(e) => nameHandler(e) }  
                           required/>
                </div>
                <div> <label htmlFor="address"> Address</label>
                    <input type="text" 
                           id="text"
                           placeholder="Enter your address..."
                           value={address}
                           onChange={(e) => addrsHandler(e) }
                           required/>
                </div>
                <div> <label htmlFor="address"> City</label>
                    <input type="text" 
                           id="text"
                           placeholder="Enter your city..."
                           value={city}
                           onChange={(e) => cityHandler(e)}
                           required/>
                </div>
                <div> <label htmlFor="address"> Postal Code</label>
                    <input type="text" 
                           id="text"
                           placeholder="Enter your postal code..."
                           value={postalcode}
                           onChange={(e) => postalCodeHandler(e)}
                           required/>
                </div>
                <div> <label htmlFor="address"> Country</label>
                    <input type="text" 
                           id="text"
                           placeholder="Enter your country..."
                           value={country}
                           onChange={(e) => countryHandler(e)}
                           required/>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit"> Next</button>
                </div>
           
            </form>

        </div>
    );
}

export default ShippingAddrs