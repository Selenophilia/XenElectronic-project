import React from 'react';


function Product(props){
    return(
        <div className="card">
                    <a href={`/product/${props.id}`}>
                      <img className="image" src={props.image_url} alt={props.name}/>   
                      </a>
                      <div className="card-body">
                          <div className="product-details">
                              <a href={`/product/${props.id}`}>
                                        <h1> {props.name}</h1>    
                              </a>
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
                          <div className="product-rating">
                              <span><i className="fa fa-star"></i> </span>
                              <span><i className="fa fa-star"></i> </span>
                              <span><i className="fa fa-star"></i> </span>
                              <span><i className="fa fa-star"></i> </span>
                              <span><i className="fa fa-star"></i> </span>             
                          </div>           
                      </div>                        
                  </div>  
    );

}

export default Product