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

// const index = require('./client/build/index.html')

// app.use((req,res,next) => {
    
//     res.sendFile((index), function(err) {
    
//   })
// })
__dirname=path.resolve()

  
if(process.env.NODE_ENV == "production")
{
    app.use(express.static("/client/build"))

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(port,()=>{
    console.log("server is up on "+port)
})