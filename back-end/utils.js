import jwt from 'jsonwebtoken'
export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET || 'somethingsecret' ,{
        expiresIn: '10d'
    })
}

export const isAuth = (req, res, next) => {
    const auth =  req.headers.authentication
    if(auth){
        const token = auth.slice(7, auth.length);
        jwt.verify(token, process.env.JWT_SECRET || 'somethingsecret',  (err, decode) => { 
            if(err){
                res.status(401).send({ message: "invalid token!"})
            } else {
                req.user = decode;
                next();
            }
         })
    } else {
        res.status(401).send({ message: "no token!"})
    }
}