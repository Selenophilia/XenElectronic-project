import express from 'express'
import User from '../model/userModel'
import data from '../seed'
import expressAsyncHandler from 'express-async-handler'

const userRoutes = express.Router();

userRoutes.get('/users', expressAsyncHandler( async (req, res) => {  
    await User.remove({})
    const createdUser = await User.insertMany(data.users)
    res.send({createdUser})
}))

export default userRoutes