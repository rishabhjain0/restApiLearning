const express = require("express");
const app = express();
const productsRoutes = require('./apis/routes/products');
const ordersRoutes = require('./apis/routes/orders');
const userRoutes = require('./apis/routes/users');
const checkauth = require("./apis/middleware/check-auth")
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/restApiAcademind" ,  { useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false}); 


 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());
app.use("/products",productsRoutes);
app.use("/orders",ordersRoutes);
app.use("/signup",userRoutes);


app.listen(3000,()=>{
    console.log("server is running on the port number 3000");
})