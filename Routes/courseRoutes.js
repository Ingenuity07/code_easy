const express = require('express');
const CourseSchema = require('../Models/CourseSchema');
const ResourceSchema = require('../Models/Resourse')
const router = express();

router.use(express.json())

router.get('/test',(req,res)=>{
    res.send("succes")
})

router.get("/getAllCourse", async (req,res)=>{
    try{
        const courses = await CourseSchema.find()
        res.send(courses)
    }
    catch(err)
    {
        res.send(err.message)
    }
})

router.get("/getAllResource/:id", async (req,res)=>{
    try{
        const resources =await   ResourceSchema.find({owner:req.params.id})

        res.send(resources)}
        catch(er)
    {
        
    }
})

module.exports = router