const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/users"); 
const bcrypt = require('bcrypt');
const { Router } = require("express");
var jwt = require('jsonwebtoken');
const path = require('path');


router.get("/",(req,res,next)=>{
res.sendFile("signup.html",{ root: path.join(__dirname, '../../views') })
})
router.post("/",(req,res,next)=>{
    console.log("atishay");
    const userdata = {
        username:req.body.username,
        password:bcrypt.hashSync(req.body.password,12)
    }
    User.findOne({username:userdata.username}, (err, result1)=>{
        if(result1){
            console.log("username exist");
            let obj = {
                status:"failure",
                error:"username exist"
            }            
            res.json(obj);        
            }
            else{
                const user = new User({
                    username:userdata.username,
                    password:userdata.password
                })
                user.save()
                .then(result=>{
            
                    jwt.sign({username:result.username},'Rishabhjain',(err, result)=>{
                        res.json({
                            "status":"success",
                            "message":"user signed up successfully",
                            "token": result
                        })
                    })
            
               
                })
                .catch(err=>{
                    res.status(500).json({
                        err:err
                    })
                })
              
            }
           
            })

  
})

router.post("/signin",(req,res,next)=>{
    const userdata = {
        username:req.body.username,
        password:req.body.password
    };
    User.findOne({username:userdata.username}, (err, result1)=>{
        if(result1){
            console.log("username found");
            const passwordResult = bcrypt.compareSync(userdata.password, result1.password);
            if(passwordResult){
                console.log("user signin");
                jwt.sign({username:result1.username},'Rishabhjain',(err, result)=>{
                    console.log(result);
                    res.json({
                        message:"user signin",
                        token:result                 
                    })
                })
               
            }
            else{
                res.json({
                    message:"password not found"
                })
            }
           
            }
        else{
            res.json({
                message:"username not found"
            })

            }
        
    }
   
    )
})

module.exports = router;