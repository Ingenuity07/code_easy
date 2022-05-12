const express = require('express')
require('./Mongoose/mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT

const path = require('path')

const courseRoutes = require('./Routes/courseRoutes')
const adminRoutes = require('./Routes/adminRoutes')

app.use("/course",courseRoutes)
app.use("/admin",adminRoutes)

app.use((err,req,res,next)=>{
    res.status(404)
    res.send({
      error:'404 ERROR'
    })
  })


  
if(process.env.NODE_ENV == "production")
{
    app.use(express.static("client/build"))
}

app.listen(port,()=>{
    console.log("server is up on "+port)
})