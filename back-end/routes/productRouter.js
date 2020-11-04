import express from 'express'
import Product from '../model/productModel'
import data from '../seed'
import expressAsyncHandler from 'express-async-handler'

const productRoutes = express.Router();

productRoutes.get('/', expressAsyncHandler( async (req, res) => {
    await Product.remove({})
    const products = await Product.find({})
    res.send({products})
}))

productRoutes.get('/products', expressAsyncHandler( async (req, res) => {
     await Product.remove({})
    const createdProduct = await Product.insertMany(data.products)
    res.send({createdProduct})    
}))


productRoutes.get('/:id', expressAsyncHandler( async (req, res) => {
    const product =  await Product.findById(req.params.id)
    product ? res.send(product) : res.status(404).send({message: 'product not found'})
}))

export default productRoutes