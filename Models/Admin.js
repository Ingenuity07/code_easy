const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const adminSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String
        }
    }]
},
{
    timestamps:true
})

adminSchema.methods.generateToken = async function(){

    const admin = this;
    const token = await jwt.sign({_id:admin._id.toString()}, process.env.JWT_SECRET) 

    admin.tokens = admin.tokens.concat({token})

    await admin.save()
    return token
}


adminSchema.pre('save', async function(next) {
    const admin=this
    if(admin.isModified('password'))
    admin.password =await bcrypt.hash(admin.password,8)
    next()
})


module.exports = mongoose.model("AdminSchema",adminSchema)