import express from 'express'
import User from '../model/userModel'
import data from '../seed'
import expressAsyncHandler from 'express-async-handler'
import bcyrpt from 'bcryptjs'
import { generateToken } from '../utils'

const userRoutes = express.Router();

userRoutes.get('/users', expressAsyncHandler( async (req, res) => {  
    await User.remove({})
    const createdUser = await User.insertMany(data.users)
    res.send({createdUser})
}))

userRoutes.post('/signin', expressAsyncHandler( async (req, res) => {  
    
    const user = await User.findOne({email: req.body.email})
    if(user){
        if(bcyrpt.compareSync(req.body.password, user.password)){
              res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user)
              });
              return; 
        }
    } else {

        res.status(401).send({message: 'invalid user email/password'})
    }
}))

userRoutes.post('/register', expressAsyncHandler( async (req, res) => {  
    
    const user = await User({name: req.body.name, email: req.body.email,
                             password: bcyrpt.hashSync(req.body.password, 8)});
    const newUser = await user.save();
    res.send({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: generateToken(newUser)
    });   
        
}))

export default userRoutes