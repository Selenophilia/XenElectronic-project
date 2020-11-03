import React, { useEffect, useState } from 'react'
import data from '../seed'
import Product from '../components/Product'
import axios from 'axios'

function ProductDetails(props){
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get('/api/product') 
          
        }
        console.log(getProduct())
    }, [])

    let getProducts = data.products.map((product) => 
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
                 {getProducts}
        </div>         
    );
}

export default ProductDetails