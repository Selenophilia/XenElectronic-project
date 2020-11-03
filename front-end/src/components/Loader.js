import React from 'react'
import '../loader.css'
function Loader(){
    return (
        <div className='row'>
            <div className="loader-profile">
                <div className="wrapper">
                    <div className="circle" />
                    <div className="line-1" />
                    <div className="line-2" />
                </div>
            </div>

            <div className="loader-profile">
                <div className="wrapper">
                    <div className="circle" />
                    <div className="line-1" />
                    <div className="line-2" />
                </div>
            </div>

            <div className="loader-profile">
                <div className="wrapper">
                    <div className="circle" />
                    <div className="line-1" />
                    <div className="line-2" />
                </div>
            </div>
        </div>

    );
}


export default Loader