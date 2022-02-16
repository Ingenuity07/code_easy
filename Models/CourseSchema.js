const mongoose = require('mongoose')
const Resource = require('./Resourse')
const {ObjectId} = require('mongodb');

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        default:"All Categories"
    },
    src:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

courseSchema.virtual('resource',{
    ref:'ResourceSchema',
    localField:'_id',
    foreignField:'owner'
})

courseSchema.statics.deleteChild = async function (id){
    await Resource.deleteMany({owner: new ObjectId(id)})
}

module.exports = mongoose.model("CourseSchema",courseSchema)