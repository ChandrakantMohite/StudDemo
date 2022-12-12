var express = require("express");
var Student = require("../model/Student");
var router = express.Router();


router.put("/",(req, res)=>{
    let body = req.body;
    let student = new Student

    student.name = body.name;
    student.email = body.email;
    student.mobileno = body.mobileno;
    student.city = body.city;

    student.save().then( (result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    } , (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    } )


});

router.get("/",(req, res)=>{
    let student = new Student
    student.list().then( (result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    } , (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    } )

});

router.get("/:id",(req, res)=>{
    let id = req.params.id;
    let student = new Student   
    student.id = id;
    student.get().then( (result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    } , (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    } )
});

router.post("/:id",(req, res)=>{
    let body = req.body;
    let student = new Student
    student.id = req.params.id;
    student.name = body.name;
    student.email = body.email;
    student.mobileno = body.mobileno;
    student.city = body.city;

    student.update().then( (result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    } , (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    } )
});

router.delete("/:id",(req, res)=>{
    let id = req.params.id;
    let student = new Student
    student.id = id;
    student.delete().then( (result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    } , (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    } )
});

module.exports=router;