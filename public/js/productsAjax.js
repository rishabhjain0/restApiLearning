const checkAuth = async()=>{
    try{
    let api = API_LIST["CHECK_AUTH"];

    let result = await ajax(REQUEST_TYPE["GET"],api,{});
    if(result && result.status == "success"){
        console.log("Logged IN");
    }
    else{
            window.location.href = "/signup";
    }
    
}
catch(err){
    window.location.href = "/signup";
}

}

$(document).ready(() => {
    checkAuth();
})