const path = require('path');


exports.getAllPRoducts =  (req,res,next)=>{
    let data = req.userData;
    let obj={
        "1":"hello",
        "2":"hii"
    }
    res.json(obj)
}

exports.getAllPRoductsPage=(req,res,next)=>{
    res.sendFile('products.html', { root: path.join(__dirname, '../../views') });
}

exports.postProducts =  (req,res,next)=>{
    const product = new Product({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.productName,
        price: req.body.productPrice
    })
    product.save().then(result =>{
        console.log(result);
        res.status(200).json({
            message:'product post route handled',
            result:result
        })
    }).catch(error =>{
        res.status(404).json({
            error:error
        })
    });
   
}

exports.getProductById = (req,res,next)=>{
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc =>{
        if(doc){
            log
            res.status(201).json({
                "message":"got product id",
                "product":doc,
            })
        }
       
    })
    .catch(error=>{
        res.status(500).json({
            "message":"not found id"
        })
    })
}