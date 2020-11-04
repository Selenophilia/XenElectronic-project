import React from 'react'

function AlertMessages(props){
    return(
        <div className={ props.children ? 'danger' : 'info' }>
                {props.children}
        </div>
    );
}

export default AlertMessages 