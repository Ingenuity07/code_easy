const mongoose = require('mongoose')

const connection_URL =  process.env.MONGODB_URL

console.log(connection_URL)
mongoose.connect(connection_URL,{
    useNewUrlParser:true
})