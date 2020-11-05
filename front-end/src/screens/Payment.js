import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions'
import Checkout from '../components/Checkout'

function Payment(props){
    const dispatch = useDispatch()


    const {shippingaddress} = useSelector( (state) => state.cart)
    const [payment, setPayment] = useState('Paypal')
   
    const submitHandler = (e) => {
           e.preventDefault()
           dispatch(savePaymentMethod(payment))
           props.history.push('/receipt')
    }

  
    if(!shippingaddress){
        props.history.push('/shipping')
    }
    
    return(
        <div >
            <Checkout step1 step2 step3></Checkout>
            <form className="form" onSubmit={submitHandler}>
                <div> <h1> Select a Payment Method</h1></div>
             
                 <input type="radio" 
                           id="paypal"
                           name="paymentMethod"
                           value="Paypal"
                           onChange={(e) => setPayment(e.target.value) }  
                           required
                           checked
                           />
                <label  htmlFor="paypal">  <i class="fa fa-cc-paypal"></i> Paypal</label>
             
              
                 <input type="radio" 
                           id="Visa"
                           name="paymentMethod"
                           value="Visa"
                           onChange={(e) => setPayment(e.target.value) }  
                           required/>
                     <label  htmlFor="Visa"> <i class="fa fa-cc-visa"></i> Visa</label>
             
                <div>
                    <label />
                    <button className="primary" type="submit"> Next</button>
                </div>
           
            </form>

        </div>
    );
}

export default Payment