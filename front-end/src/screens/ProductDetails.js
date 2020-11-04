import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Rating from '../components/Rating';
// import data from '../seed'
import Loader from '../components/Loader'
import AlertMessages from '../components/AlertMessages'
import { detailsProducts } from '../actions/productActions';

function ProductDetails(props){
    // const product =  data.products.find((prod ) =>  prod.id ===  parseInt(props.match.params.id))
   const dispatch = useDispatch();
   const getProdId = props.match.params.id
   const productDetails = useSelector(state => state.productDetails)
   const {error, loading, product} = productDetails
  
   
   useEffect(() => {
       dispatch(detailsProducts(getProdId));
   }, [dispatch, getProdId]);
    return(
        <div >
               {loading ? ( <Loader />  
         ) : error ?  (<AlertMessages>{error} </AlertMessages>
         ) : (  
         <div className='row product-details'>
            <div className='col-2'>
                    <img className='image__large' src={product.image} alt={props.name}/>  
                    <p> More Images: </p> 
                    <img className='image__small' src={product.image} alt={props.name}/>  

                </div>

                <div className='col-1'>
                            <ul>
                                <li>  Product Name: {product.name}</li>
                                <li> Price: ${product.price}</li>
                                <li>  <Rating reviews={product.numReviews}
                                            rating={product.rating} /></li>
                                <li>  <p> Description: </p>
                                    <p>{product.description}</p></li>
                            </ul>
                        <div className='card card-body'>
                            <ul>
                                <li>
                                    <div className='row'>
                                        <div> Price: </div>  
                                        <div className='price'> ${product.price}</div>  
                                    </div>
                                    <div className='row'>
                                        <div> Qty: </div>  
                                        <div className='price'> 1</div>  
                                    </div>
                                    <div className='row'>
                                        <div> Stock:</div>  
                                        <div className='stock'> {product.numStock >  0 ? product.numStock : 0} in stock</div>  
                                    </div>
                                </li>
                            
                                <li>
                                    <button className='primary'> Add to Cart</button>
                                </li>
                            </ul>
                    </div>

                </div>    
         </div>)}

            </div>
    
    );
}

export default ProductDetails