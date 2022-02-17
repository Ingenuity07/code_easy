const express = require('express')
const auth = require('../Middleware/auth')
const router = express();
const Course = require('../Models/CourseSchema')
const {ObjectId} = require('mongodb');
const Resource = require('../Models/Resourse');
const Admin = require('../Models/Admin');
const bcrypt = require('bcrypt')
const validUrl = require('valid-url');

router.use(express.json());

router.get('/test',auth,(req,res)=>{
    res.send('admin router working')
})

router.post('/create',async (req,res)=>{
    
    const admin = new Admin(req.body)
    try{
        await admin.save()
        const token =await admin.generateToken()
        delete admin.password
        res.send({admin,token})
    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
})

router.post('/login',async (req,res)=>{

    try{
        const admin = await Admin.findOne({email:req.body.email})

        if(!admin)
        throw new Error("Invalid Credentials")

        const isMatch = await bcrypt.compare(req.body.password,admin.password)
        if(isMatch)
        {
            const token = await admin.generateToken()
            res.send({admin,token})
        }
        else
        {
            throw new Error("Invalid Credentials")
        }
    }
    catch(err)
    {
        console.log(err.message)
        res.status(500).send(err.message);
    }

})


router.get('/logout',auth,async (req,res)=>{

    


    try{
        req.admin.tokens=[];
        await req.admin.save();

        res.send()
    }
    catch(err)
    {
        console.log(err.message)
        res.status(500).send(err.message);
    }

})



router.post("course/addCourse", async (req,res)=>{
    const user = new Course(req.body)
    try{
        await user.save()
        res.send(user)
    }
    catch(er)
    {
        res.status(500).send(er.message)
    }
})

router.patch("course/updateCourse/:id", async (req,res)=>{
   
    const updates = Object.keys(req.body)
    try{
        const course = await Course.findById(req.params.id)
        updates.forEach(element => {
            course[element]=req.body[element]
        });

        await course.save()

        res.send("updated")
    }
    catch(er)
    {
        res.status(500).send(er.message)
    }
})

router.delete("/deleteCourse/:id", async (req,res)=>{
    
    try{
        const course = await Course.deleteOne({_id:new ObjectId(req.params.id)})
        Course.deleteChild(req.params.id);
        res.send(course)
    }
    catch(er)
    {
        res.status(500).send(er.message)
    }
})

router.post("/addResource/:id", async (req,res)=>{
    try{
        const data = req.body

        if(!validUrl.isUri(data.url))
        throw new Error("Invalid URL")

        const resource = await new Resource({
            ...data,
            owner:req.params.id
        })

        await resource.save()

        res.send(resource);
    }
    catch(er)
    {
        res.status(500).send(er.message)
    }
})

router.patch("/updateResource/:id", async (req,res)=>{
    
   

    try{
        const data = req.body
        if(!validUrl.isUri(data.url))
            throw new Error("Invalid URL")
    
        const updates = Object.keys(data)
        const resource = await Resource.findById(req.params.id)

        updates.forEach(element => {
            resource[element]=data[element]
        });

        await resource.save()
        res.send("Resurce updated")
    }
    catch(er)
    {
        res.status(500).send(er.message)
    }
})

router.delete("/deleteResource/:id", async (req,res)=>{
    try{
        await Resource.deleteOne({_id:req.params.id})
        res.send("deleted")
    }
    catch(er)
    {
        res.status(500).send(er.message)
    }
})


module.exports = router