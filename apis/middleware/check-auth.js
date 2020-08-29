
var jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    try{
        const token = req.headers['authorization'];
        console.log(token);
        const decode = jwt.verify(token,'Rishabhjain');
        req.userData = decode;
        next();
    }
    catch(error){
        console.log(error);
         return res.json({
            message:"auth failed"
        });
    }
  

}