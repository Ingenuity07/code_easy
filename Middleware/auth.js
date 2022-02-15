const jwt= require('jsonwebtoken')
const Admin = require('../Models/Admin')

const jwtSecret=process.env.JWT_SECRET

const auth = async (req,res,next)=>{
    
    try {

        const token = req.header('Authorization').replace('Bearer ','')

        const decoded = jwt.verify(token,jwtSecret)
        const admin = await Admin.findOne({_id :decoded._id,'tokens.token':token})

        if(!admin)
        throw new Error();
        
        req.token = token;
        req.admin = admin;
        next();
        
    } catch (err) {

        console.log(err.message)
        res.status(401).send({error:'please authenticate'})
    }
    
}

module.exports= auth