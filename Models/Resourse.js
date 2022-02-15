const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim:true
    },
    url: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "CourseSchema"
    }
})

module.exports = mongoose.model("ResourceSchema", resourceSchema)