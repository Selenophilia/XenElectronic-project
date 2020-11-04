import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import axios from 'axios'
import Loader from '../components/Loader'
import AlertMessages from '../components/AlertMessages'
function ProductDetails(props){
    const [products, setProduct] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    
    useEffect(() => {
       
        const fetchProduct = async () => {
            try{
                setLoader(true)
                const { data } = await axios.get('/api/products')    
                setLoader(false)
                setProduct(data)
            } catch(err){
                console.log(err.message)
                setError(err.message)
                setLoader(false)
            }

        }
        fetchProduct()
    }, [])

    let getProducts = products.map((product) => 
                    <Product key={product.id} 
                             id={product.id}    
                             name={product.name}
                             price={product.price}
                             image_url={product.image}
                             description={product.description}
                             brand={product.brand} 
                             reviews={product.numReviews}
                             rating={product.rating}/>
    );

    return(
        <div className="row center">   

        {loader ? ( <Loader />  
         ) : error ?  (<AlertMessages>{error} </AlertMessages>
         ) : getProducts}
              
        </div>         
    );
}

export default ProductDetails