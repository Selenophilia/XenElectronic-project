import React from 'react'

function ThankYou(props){
    return(
        
        <div className="thank-you-card card-body">
            <div className='text-description' >
                <div className="icon-check">
                    <i className="fa fa-check fa-3x" ></i>
                </div>
                <h1 >Thank you</h1>
                <p ><strong>Your Purchase have been completed.</strong></p>
                    <hr/>
                    <p>
                    <a href="/">Shop Again?</a>
                </p>
            </div>
        </div>

    );
}

export default ThankYou