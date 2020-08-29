const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Product = require("../models/products");
const authCheck = require("../middleware/check-auth");
const productsController = require("../controller/product");





router.get('/',authCheck,productsController.getAllPRoductsPage);

router.post('/',authCheck,productsController.postProducts);

router.get('/:productId',authCheck, productsController.getProductById);

router.patch('/:productId', (req,res,next)=>{
    res.json({
        message:'updated product'
    })

})

router.delete('/:productId', (req,res,next)=>{
    res.json({
        message:'deleted'
    })

})
module.exports = router