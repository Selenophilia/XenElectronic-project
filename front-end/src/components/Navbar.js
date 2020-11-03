import React from  'react'

function Navbar(){
    return(
        <header className="row">
            <div>
                <a href="/"> XenElectronic </a>
            </div>
            
            <div>
                <a href='/shopping-cart'> <span className="icon"><i className="fa fa-shopping-cart"></i></span></a>
                <a href="/login">Sign In </a>  
            </div>
        </header>
    );
}

export default Navbar