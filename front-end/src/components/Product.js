import React from 'react';
import Rating from './Rating';
import { Link }  from 'react-router-dom'


function Product(props){
    return(
        <div className="card">
                    <Link to={`/product/${props.id}`}>
                      <img className="image__medium" src={props.image_url} alt={props.name}/>   
                      </Link>
                      <div className="card-body">
                          <div className="product-details">
                              <Link to={`/product/${props.id}`}>
                                        <h1> {props.name}</h1>    
                              </Link>
                              <span className='price'>
                                    <h2> Price: ${props.price}</h2>
                              </span>
                              <span className='brand'>
                                    <h2> Brand: {props.brand}</h2>
                              </span>
                              <span className='description'>
                                    <p>  {props.description}</p>
                              </span>
                              
                          </div>
                         <Rating reviews={props.reviews}
                                  rating={props.rating}
                         />
                      </div>                        
                  </div>  
    );

}

export default Product