import React from 'react'

function Checkout(props){
    return(
        <div className='row checkout'>
            <div className={props.step1 ? 'active': null}> Step 1: Sign In</div>
            <div className={props.step2 ? 'active': null}> Step 2: Shipping</div>
            <div className={props.step3 ? 'active': null}> Step 3: Payment</div>
            <div className={props.step4 ? 'active': null}> Step 4: Receipt</div>
        </div>
    );
}

export default Checkout