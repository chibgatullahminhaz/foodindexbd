const jwt = require('jsonwebtoken');
const UserModel = require('../model/user.model');

// token base authorizarizatioon 

const requireSingIn  = async (req, res, next)=>{
    try {
        const decode = jwt.verify(req.headers.authorization,process.env.JWT_TOKEN );
        // passing decode to user 
        req.user = decode; 
        next()

    } catch (error) {
        res.status(401).send(error);
    }
};

// admin acess 
const isAdmin = async (req,res,next)=>{
    try {
        const user = await UserModel.findById(req.user._id);
        if(user.role !== 1){
            return res.status(401).send({ 
                success: false,
                message: "Unauthorize Acess"
            });
        }else{
            next();
        }
        
    } catch (error) {
        res.status(401).send({
            success : false,
            error:error
        })
    }
}

 
module.exports = {requireSingIn, isAdmin}