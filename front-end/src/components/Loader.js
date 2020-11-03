import React from 'react'
import '../loader.css'
function Loader(){
    return (
        <div className='row'>
            <div className="loader-profile">
                <div className="wrapper">
                    <div className="loader__image" />
                    <div className="line__1" />
                    <div className="line__2" />
                </div>
            </div>

            <div className="loader-profile">
                <div className="wrapper">
                    <div className="loader__image" />
                    <div className="line__1" />
                    <div className="line__2" />
                </div>
            </div>

            <div className="loader-profile">
                <div className="wrapper">
                    <div className="loader__image" />
                    <div className="line__1" />
                    <div className="line__2" />
                </div>
            </div>
        </div>

    );
}


export default Loader