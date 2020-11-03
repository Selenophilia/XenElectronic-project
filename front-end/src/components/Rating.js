import React from 'react'

function Rating(props){
    return(
        <div className="product-rating">
                <span><i className={props.rating > 1 
                                    ? "fa fa-star": 
                                    props.rating >=0.5 ?
                                     "fa fa-star-half-o": "fa fa-star-o"}></i>
                </span>
                <span><i className={props.rating > 2 
                                    ? "fa fa-star": 
                                    props.rating >=2.5 ?
                                     "fa fa-star-half-o": "fa fa-star-o"}></i> 
                </span>
                 <span><i className={props.rating > 3 
                                    ? "fa fa-star": 
                                    props.rating >=3.5 ?
                                     "fa fa-star-half-o": "fa fa-star-o"}></i> 
                </span>
                <span><i className={props.rating > 4 
                                    ? "fa fa-star": 
                                    props.rating >=4.5 ?
                                     "fa fa-star-half-o": "fa fa-star-o"}></i> 
                </span>
                <span><i className={props.rating === 5 
                                    ? "fa fa-star" :  props.rating >= 4.5 ? "fa fa-star-half-o" : "fa fa-star-o"}></i> 
                </span>
                <span>
                       <p>  {props.reviews > 1 ? `${props.reviews} reviews` : `${props.reviews} review` }  </p>    
                </span>        
    </div>     
    );
}

export default Rating