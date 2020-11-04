import React, { useEffect,  } from 'react'
import Product from '../components/Product'

import Loader from '../components/Loader'
import AlertMessages from '../components/AlertMessages'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
function ProductDetails(){
   
    
    const productList = useSelector((state) => state.productList);
  
  
    const {loading, error, products} = productList;
    const dispatch = useDispatch();
  
   
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
  
    return(
        <div className="row center">   

        {loading ? ( <Loader />  
         ) : error ?  (<AlertMessages>{error} </AlertMessages>
         ) : products.map((product) => 
                        <Product key={product.id} 
                                id={product.id}    
                                name={product.name}
                                price={product.price}
                                image_url={product.image}
                                description={product.description}
                                brand={product.brand} 
                                reviews={product.numReviews}
                                rating={product.rating}/>
                )}
              
        </div>         
    );
}

export default ProductDetails