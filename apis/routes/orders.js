const express = require("express");
const checkAuthentication = require("../middleware/check-auth");
const router = express.Router();

router.get("/",checkAuthentication, (req,res,next)=>{
    res.status(200).json({
        message:'handled orders get route'
    })
})

router.post("/",checkAuthentication, (req,res,next)=>{
    res.status(200).json({
        message:'handled orders post route'
    })
})

router.get("/:orderId",checkAuthentication, (req,res,next)=>{
    res.status(200).json({
        message:'handled orders post route',
        orderId:req.params.orderId
    })
})

router.delete("/:orderId", (req,res,next)=>{
    res.status(200).json({
        message:'order deleted',
        orderId:req.params.orderId
    })
})


module.exports = router