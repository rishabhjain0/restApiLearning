const { getAllPRoducts } = require("../../apis/controller/product")

const getAllProducts = async()=>{
    const api = API_LIST["GET_ALL_PRODUCTS"];
    try{
        let result = await ajax(REQUEST_TYPE["GET"],api,{});
        console.log(result);

        if(result && result.status == "success"){
            window.localStorage.setItem("TOKEN",result.token);
            window.location.href = "/products";
        }
        else{
            console.log(result.status, result.error);
        }
        
    }
    catch(err){
        console.log(err);

    }
}

$(document).ready(() => {
    getAllProducts();
})