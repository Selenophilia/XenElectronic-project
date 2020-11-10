import express from 'express'
import Order from '../model/orderModel'
import expressAsyncHandler from 'express-async-handler'
import { isAuth } from '../utils';

const orderRoutes = express.Router();

orderRoutes.post('/orders', isAuth, expressAsyncHandler( async (req, res) => {
    if(req.body.orderItems.length === 0){
        res.status(400).send({ message: "cart is empty!"})
    } else {
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,            
            total: req.body.total,
            user: req.user._id
        });
        const newOrder = await order.save
        res.status(201).send({message: "Order Created!", order: newOrder});
    }
}))

 export default orderRoutes